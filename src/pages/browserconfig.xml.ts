import type { APIRoute } from 'astro';

import pkg from 'package.json';
const { version } = pkg;

import { page } from '$app/stores';
import app from '$app/configs/app';

export const GET = (() => {
  const { draft } = page.get();
  return new Response(
    `
<?xml version="1.0" encoding="UTF-8" ?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/favicon/${draft}/mstile/70.png?v=${version}" />
      <square150x150logo src="/favicon/${draft}/mstile/150.png?v=${version}" />
      <square310x310logo src="/favicon/${draft}/mstile/310.png?v=${version}" />
      <wide310x150logo src="/favicon/${draft}/mstile/310x150.png?v=${version}" />
      <TileImage src="/favicon/${draft}/mstile/150.png?v=${version}" />
      <TileColor>${app.tileColor}</TileColor>
    </tile>
  </msapplication>
</browserconfig>
    `
      .trim()
      .replace(/\n/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/> </g, '><'),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}) satisfies APIRoute;
