/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchRequest } from '@rails/request.js';
import { useFlashStore } from '@/stores/flash';

export function withFlash(request: Promise<any>) {
  const flash = useFlashStore();

  return request.then(async (response: { json: any; ok: any }) => {
    const body = await response.json;

    if (response.ok) flash.notice = body.notice;
    else flash.alert = body.alert;

    setTimeout(() => flash.$reset(), 2000);

    return response;
  });
}

export function get(url: string, options: any) {
  const request = new FetchRequest('get', url, options);
  return withFlash(request.perform());
}

export function post(url: string, options: any) {
  const request = new FetchRequest('post', url, options);
  return withFlash(request.perform());
}
