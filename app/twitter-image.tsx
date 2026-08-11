/**
 * Twitter/X réutilise tel quel le visuel Open Graph — une seule source à maintenir.
 *
 * `runtime` est redéclaré en dur : Next analyse statiquement cet export et ne suit pas
 * un ré-export. Sans ça, la route repasse en runtime Node et casse la build sous
 * Windows (voir le commentaire dans opengraph-image.tsx).
 */
export const runtime = 'edge';

export { default, alt, size, contentType } from './opengraph-image';
