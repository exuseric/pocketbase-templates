import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /cgi-bin/
Disallow: /temp/
Disallow: /private/

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

/**
 * GET request handler for the robots.txt file.
 *
 * This function returns a Response object with the contents of the robots.txt file.
 * The response is set to have the 'Content-Type' header set to 'text/plain; charset=utf-8'.
 *
 * @returns {Response} The Response object with the contents of the robots.txt file.
 */
export const GET: APIRoute = () => {
  // Create a new Response object with the contents of the robots.txt file.
  return new Response(robotsTxt, {
    // Set the 'Content-Type' header to specify that the response is plain text.
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
