export default {
  async fetch(request, env) {
    // Forward to origin app
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If that fails, return 404
      return new Response("Not Found", { status: 404 });
    }
  }
}; 