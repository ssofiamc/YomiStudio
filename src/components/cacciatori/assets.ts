/** Ruta pública compatible con desarrollo local y exportación a GitHub Pages. */
export function cacciatoriAsset(filename: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}/cacciatori/${filename}`;
}
