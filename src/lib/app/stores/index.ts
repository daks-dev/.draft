import { map } from 'nanostores';

export const page = map<{
  url: URL;
  request: Request;
  draft: string;
}>({
  url: {} as URL,
  request: {} as Request,
  draft: ''
});
