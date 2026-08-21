/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchRequest } from '@rails/request.js';
import { useFlashStore } from '@/stores/flash';

const JSON_CONTENT_TYPE = /^application\/.*json$/;

const GENERIC_ALERT = 'Something went wrong, please try again later.';

// Not every response comes from the application: A proxy or bot filter in
// front of it answers with an HTML error page (e.g. 403), and a broken
// connection gives no response at all. Reading `json` on such a response
// rejects, which ends as an unhandled promise rejection in the caller.
async function jsonBody(response: any) {
  if (!JSON_CONTENT_TYPE.test(response.contentType)) return null;

  return await response.json;
}

export async function withFlash(request: Promise<any>) {
  const flash = useFlashStore();

  let ok = false;
  let body = null;

  try {
    const response = await request;
    ok = response.ok;
    body = await jsonBody(response);
  } catch {
    // Request failed before a response arrived, treat it like an error response
  }

  if (ok) flash.notice = body?.notice ?? '';
  else flash.alert = body?.alert ?? GENERIC_ALERT;

  setTimeout(() => flash.$reset(), 2000);

  return body;
}

export function get(url: string, options: any) {
  const request = new FetchRequest('get', url, options);
  return withFlash(request.perform());
}

export function post(url: string, options: any) {
  const request = new FetchRequest('post', url, options);
  return withFlash(request.perform());
}
