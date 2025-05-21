// Server component for structured data
export default function SchemaScript() {
  // Schema data directly in the component
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://calidw.com/#business",
        "name": "Cali Door & Window",
        "url": "https://calidw.com",
        "logo": "https://calidw.com/calidw.png",
        "image": "https://calidw.com/images/og-image.jpg",
        "description": "Premium quality doors and windows for residential and commercial properties."
      },
      {
        "@type": "WebSite",
        "@id": "https://calidw.com/#website",
        "url": "https://calidw.com",
        "name": "Cali Door & Window",
        "description": "Premium doors and windows for your California home"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
} 