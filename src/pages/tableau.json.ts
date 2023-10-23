import type { APIRoute } from 'astro';

import pkg from 'package.json';
const { version } = pkg;

import { page } from '$app/stores';
import app from '$app/configs/app';

export const GET = (() => {
  const { url, draft } = page.get();

  const canonical = new URL(process.env.APP_CANONICAL || url).origin;

  return new Response(
    JSON.stringify({
      version,
      api_version: 1,
      layout: {
        logo: `${canonical}/favicon/${draft}/tableau/60.png?v=${version}`, //encodeURIComponent()
        color: app.tileColor,
        show_title: true
      }
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}) satisfies APIRoute;
