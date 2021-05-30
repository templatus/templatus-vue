export function metaContent(name: string): string | undefined {
  return (
    document.querySelector(`meta[name='${name}']`)?.getAttribute('content') ||
    undefined
  );
}
