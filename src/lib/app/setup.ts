import { setup } from '$app/stores';
import { hosts } from '$app/configs';

export default (request: Request) => {
  const url = new URL(request.url);
  setup.set({
    url,
    draft: hosts[url.hostname] ?? 'default'
  });
  return setup.get().draft;
};
