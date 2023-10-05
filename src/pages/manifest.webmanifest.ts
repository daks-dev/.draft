import type { APIRoute } from 'astro';

import pkg from 'package.json';
const { version } = pkg;

import setup from '$app/setup';
import app from '$app/configs/app';

export const GET = (async ({ request }) => {
  const draft = setup(request);
  const { id, scope, display, backgroundColor, themeColor } = app;
  const { name, shortName, description } = app[draft];

  const pathname = process.env.APP_CANONICAL ? new URL(process.env.APP_CANONICAL).pathname : './';

  const any = ['icon.svg', 128, 192, 256, 384, 512];
  const maskable = ['icon.svg', 192, 384, 512];
  const monochrome = ['icon.svg', 128, 192, 256];
  const icons: Record<string, string>[] = [];
  const push = (arr = any, purpose = 'any') => {
    arr.forEach((val) => {
      const png = typeof val === 'number';
      const dir =
        purpose.indexOf('maskable') > -1
          ? 'maskable/'
          : purpose.indexOf('monochrome') > -1
          ? 'monochrome/'
          : '';
      const file = png ? `${val}.png` : val;
      icons.push({
        src: `/favicon/${draft}/${dir}${file}?v=${version}`,
        sizes: png ? `${val}x${val}` : 'any',
        type: `image/${png ? 'png' : 'svg+xml'}`,
        purpose
      });
    });
  };

  push();
  push(maskable, 'maskable');
  push(monochrome, 'monochrome');

  return new Response(
    JSON.stringify({
      name,
      short_name: shortName,
      description,
      icons,
      id,
      start_url: pathname,
      scope,
      display,
      background_color: backgroundColor,
      theme_color: themeColor
    }),
    {
      headers: {
        'Content-Type': 'application/manifest+json'
      }
    }
  );
}) satisfies APIRoute;
