import { setActivePinia, createPinia } from 'pinia';
import { get, post } from '@/use/fetch';
import { useFlashStore } from '@/stores/flash';

function mockResponse(body: string, init: ResponseInit) {
  vi.spyOn(window, 'fetch').mockResolvedValue(new Response(body, init));
}

describe('fetch', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('returns the body of a JSON response', async () => {
    mockResponse(JSON.stringify({ total: 42, notice: 'Fine!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });

    const json = await get('/clicks', { responseKind: 'json' });

    expect(json.total).toEqual(42);
    expect(useFlashStore().notice).toEqual('Fine!');
  });

  it('returns the body of a JSON error response', async () => {
    mockResponse(JSON.stringify({ alert: 'Click recording failed!' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });

    const json = await post('/clicks', { responseKind: 'json' });

    expect(json.alert).toEqual('Click recording failed!');
    expect(useFlashStore().alert).toEqual('Click recording failed!');
  });

  // A proxy or bot filter in front of the application answers with HTML,
  // which must not reject the promise
  it('returns no body for a HTML error response', async () => {
    mockResponse('<html>Forbidden</html>', {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });

    const json = await get('/clicks', { responseKind: 'json' });

    expect(json).toBeNull();
    expect(useFlashStore().alert).toEqual(
      'Something went wrong, please try again later.',
    );
  });

  it('returns no body when the request fails', async () => {
    vi.spyOn(window, 'fetch').mockRejectedValue(
      new TypeError('Failed to fetch'),
    );

    const json = await get('/clicks', { responseKind: 'json' });

    expect(json).toBeNull();
    expect(useFlashStore().alert).toEqual(
      'Something went wrong, please try again later.',
    );
  });

  it('resets the flash after some time', async () => {
    mockResponse(JSON.stringify({ notice: 'Fine!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    await get('/clicks', { responseKind: 'json' });
    expect(useFlashStore().notice).toEqual('Fine!');

    vi.advanceTimersByTime(2000);
    expect(useFlashStore().notice).toEqual('');
  });
});
