import { map } from 'nanostores';

export * as persisten from './persistent';

export const setup = map<{
  url: URL;
  draft: string;
}>({
  url: <URL>{},
  draft: ''
});

export const page = map<{
  url: URL;
  request: Request;
}>({
  url: <URL>{},
  request: <Request>{}
});
