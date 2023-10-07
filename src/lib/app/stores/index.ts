import { map } from 'nanostores';

export const setup = map<{
  url: URL;
  draft: string;
}>({
  url: <URL>{},
  draft: ''
});
