// import type { MiddlewareResponseHandler } from 'astro';
import { defineMiddleware } from 'astro:middleware';
import { page } from '$app/stores';
import { hosts } from '$app/configs';

export default () =>
  defineMiddleware(({ url, request }, next) => {
    page.set({
      url,
      request,
      draft: hosts[url.hostname] ?? 'default'
    });
    return next();
  });
