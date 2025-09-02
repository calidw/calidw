import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

export const runtime = 'edge';

const testimonialProjection = `{
  _id,
  name,
  quote,
  location,
  "image": image.asset->url,
  rating,
  projectType,
  date,
  isFeatured
}`;

// Centralized environment-safe client just for this API route
function buildClient() {
  let projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ejlhmf3v';
  let dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim().toLowerCase();

  const projectIdValid = /^[a-z0-9]+$/.test(projectId || '');
  const datasetValid = /^[a-z0-9_-]+$/.test(dataset || '');

  if (!projectIdValid) {
    console.warn('[api/testimonials] Invalid projectId env value, falling back');
    projectId = 'ejlhmf3v';
  }
  if (!datasetValid) {
    console.warn('[api/testimonials] Invalid dataset env value, falling back to production');
    dataset = 'production';
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: '2023-05-03',
    useCdn: false
  });
}

export async function GET() {
  const client = buildClient();
  try {
    // Primary ordered query using optional orderBy field + fallback to created date
    const primaryQuery = `*[_type == "testimonial"] | order(coalesce(orderBy, 999999) asc, _createdAt desc) ${testimonialProjection}`;
    let data = await client.fetch(primaryQuery);

    if (!data || data.length === 0) {
      console.warn('[api/testimonials] Primary query returned 0, running fallback ordering by _createdAt desc');
      const fallbackQuery = `*[_type == "testimonial"] | order(_createdAt desc) ${testimonialProjection}`;
      data = await client.fetch(fallbackQuery);
    }

    return NextResponse.json({ success: true, count: data.length, testimonials: data });
  } catch (err: unknown) {
    console.error('[api/testimonials] Fetch failed', { 
      message: err instanceof Error ? err.message : 'Unknown error', 
      stack: err instanceof Error ? err.stack : undefined 
    });
    return NextResponse.json({ 
      success: false, 
      error: err instanceof Error ? err.message : 'Unknown error' 
    }, { status: 500 });
  }
}
