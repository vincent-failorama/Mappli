/**
 * Image de partage social (Open Graph + Twitter), générée par `next/og`.
 *
 * Pourquoi générée plutôt qu'un JPG figé dans /public : le visuel reprend la palette,
 * la typo et l'accroche du hero. Un fichier statique aurait divergé au premier
 * changement de baseline.
 *
 * ⚠️ `runtime = 'edge'` est OBLIGATOIRE, pas un choix de perf : la build Node de
 * @vercel/og fait un `path.join()` sur une URL `file://` pour charger ses wasm, ce qui
 * donne `file:\F:\...` sous Windows et fait échouer le prerender (« TypeError: Invalid
 * URL »). La build edge charge ses wasm autrement et fonctionne partout.
 *
 * Satori (le moteur de next/og) ne connaît qu'un sous-ensemble de CSS : pas de
 * `filter: blur()`. Les halos du hero sont donc rendus en `radial-gradient`.
 */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'MAPPLI — Applications mobiles & web sur mesure pour les professionnels';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Le logo du site (public/logo-mappli.png) est anthracite sur fond transparent : posé
 * sur le fond noir de l'image, son wordmark disparaît. On redessine donc le sigle —
 * hexagone + curseur — en vectoriel, aux couleurs du hero, et on retypographie
 * « MAPPLI » en blanc.
 */
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#38bdf8"/>
      <stop offset="0.55" stop-color="#60a5fa"/>
      <stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <path d="M27 5 H73 L96 50 L73 95 H27 L4 50 Z" fill="none" stroke="url(#g)" stroke-width="7" stroke-linejoin="round"/>
  <path d="M38 27 L68 50 L54 54 L61 71 L52 75 L45 58 L34 66 Z" fill="#5eead4"/>
</svg>`;

const MARK_URI = `data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`;

/**
 * Montserrat en 700/900 pour coller au site. Google Fonts ne sert du woff2 (illisible
 * pour Satori) qu'aux navigateurs récents : on se déclare en User-Agent antique pour
 * obtenir du TrueType. Si la requête échoue, on retombe sur la police par défaut
 * plutôt que de renvoyer une erreur.
 */
async function loadMontserrat(weight: 700 | 900) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=Montserrat:wght@${weight}`, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 5.1)' },
  }).then((r) => r.text());

  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
  if (!url) throw new Error('Montserrat introuvable dans la réponse Google Fonts');

  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const fonts = await Promise.all([loadMontserrat(700), loadMontserrat(900)])
    .then(([bold, black]) => [
      { name: 'Montserrat', data: bold, weight: 700 as const, style: 'normal' as const },
      { name: 'Montserrat', data: black, weight: 900 as const, style: 'normal' as const },
    ])
    .catch(() => undefined);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 76px',
          backgroundColor: '#09090b',
          // Les trois halos du hero : bleu en haut à gauche, violet en bas à droite,
          // et une nappe centrale plus sourde. Satori ne sait pas lire la syntaxe
          // `radial-gradient(900px 700px at …)` — seule la forme `circle at …` passe.
          backgroundImage: [
            'radial-gradient(circle at 6% -12%, rgba(14,165,233,0.26), transparent 55%)',
            'radial-gradient(circle at 102% 112%, rgba(139,92,246,0.28), transparent 55%)',
            'radial-gradient(circle at 50% 50%, rgba(30,64,175,0.14), transparent 60%)',
          ].join(','),
          fontFamily: fonts ? 'Montserrat' : undefined,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_URI} alt="" width={72} height={72} />
          <div style={{ fontSize: 44, fontWeight: 900, color: '#ffffff', letterSpacing: '0.08em' }}>
            MAPPLI
          </div>
        </div>

        {/* Accroche — reprise mot pour mot du hero de la home. */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // 62px : au-delà, « Applications mobiles & web » ne tient plus sur une
              // seule ligne dans les 1048px utiles et casse en deux.
              fontSize: 62,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            <div style={{ display: 'flex' }}>Applications mobiles &amp; web</div>
            <div
              style={{
                display: 'flex',
                backgroundImage: 'linear-gradient(120deg, #38bdf8, #a78bfa 55%, #60a5fa)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              sur mesure
            </div>
            <div style={{ display: 'flex' }}>pour les professionnels</div>
          </div>

          <div style={{ display: 'flex', fontSize: 27, fontWeight: 700, color: '#a1a1aa' }}>
            Robustes et intuitives, pensées pour les équipes terrain.
          </div>
        </div>

        {/* Pied : domaine à gauche, positionnement à droite. */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.10)',
            paddingTop: 26,
          }}
        >
          <div style={{ display: 'flex', fontSize: 29, fontWeight: 900, color: '#ffffff' }}>
            mappli.fr
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Mobile', 'Web', 'Cloud', 'Sur mesure'].map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  fontSize: 21,
                  fontWeight: 700,
                  color: '#d4d4d8',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: 999,
                  padding: '8px 20px',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
