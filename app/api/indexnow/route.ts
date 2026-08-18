import { NextResponse } from 'next/server';

import sitemap from '../../sitemap';

const KEY = '2d58daaa2fbb495097e017dfe65321f0';
const HOST = 'mappli.fr';
const BASE_URL = `https://${HOST}`;

/**
 * Les URL soumises sont celles du sitemap, et non une seconde liste tenue à la main :
 * celle-ci avait déjà décroché — itero et gestion-locative n'y figuraient pas, et
 * n'étaient donc jamais poussées vers Bing. Une page ajoutée au sitemap est désormais
 * soumise automatiquement.
 */
const URLS = sitemap().map((entry) => entry.url);

export async function POST(request: Request) {
  // Protection par token secret pour éviter les appels non autorisés
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  const validSecret = process.env.INDEXNOW_SECRET ?? 'mappli_indexnow_2026';
  if (secret !== validSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${BASE_URL}/${KEY}.txt`,
        urlList: URLS,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: `IndexNow returned ${response.status}` }, { status: 500 });
    }

    return NextResponse.json({ success: true, submitted: URLS.length, urls: URLS });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to reach IndexNow' }, { status: 500 });
  }
}
