// Static site generator: reads content.mjs and posts/*.md, writes dist/.
// Usage: npm ci && node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import * as c from './content.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const LANGS = ['en', 'ko'];
const PREFIX = { en: '', ko: 'ko/' };
const HAS_CV = fs.existsSync(path.join(ROOT, 'static', 'cv.pdf'));
const ASSET_VERSION = Date.now().toString(36);

const UI = {
  about: { en: 'About', ko: '소개' },
  news: { en: 'News', ko: '소식' },
  publications: { en: 'Publications', ko: '논문' },
  projects: { en: 'Projects', ko: '프로젝트' },
  awards: { en: 'Honors & Awards', ko: '수상' },
  grants: { en: 'Research Grants', ko: '연구과제' },
  patents: { en: 'Patents', ko: '특허' },
  scholarships: { en: 'Scholarships', ko: '장학금' },
  education: { en: 'Education', ko: '학력' },
  experience: { en: 'Experience & Service', ko: '경력 · 학술 활동' },
  history: { en: 'History', ko: '연혁' },
  contact: { en: 'Contact', ko: '연락처' },
  background: { en: 'Background', ko: '이력' },
  interests: { en: 'Research interests', ko: '연구 관심사' },
  email: { en: 'Email', ko: '이메일' },
  phone: { en: 'Phone', ko: '전화' },
  office: { en: 'Office', ko: '연구실' },
  lab: { en: 'Affiliation', ko: '소속' },
  advisor: { en: 'Advisor', ko: '지도교수' },
  blog: { en: 'Blog', ko: '블로그' },
  labLink: { en: 'Lab', ko: '연구실' },
  fullHistory: { en: 'Full timeline', ko: '전체 연혁 보기' },
  historyLead: { en: 'A timeline from 2018 to now.', ko: '2018년부터 지금까지의 기록.' },
  posts: { en: 'Posts', ko: '글' },
  backHome: { en: 'Back to home', ko: '홈으로' },
  skip: { en: 'Skip to content', ko: '본문으로 건너뛰기' },
  theme: { en: 'Toggle dark mode', ko: '다크 모드 전환' },
  switchLang: { en: '한국어', ko: 'English' },
  notFound: { en: 'Page not found', ko: '페이지를 찾을 수 없습니다' },
  updated: { en: 'Last updated', ko: '최종 수정' },
};

const t = (v, lang) => (v == null ? '' : typeof v === 'string' ? v : v[lang] ?? v.en ?? '');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const tx = (v, lang) => esc(t(v, lang));
const isExternal = (url) => /^https?:\/\//.test(url);
const href = (url, lang) => (isExternal(url) || url.startsWith('mailto:') ? url : url);
const ext = (url) => (isExternal(url) ? ' target="_blank" rel="noopener"' : '');

function write(rel, html) {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function shell({ lang, rel, title, description, body, home = false }) {
  const base = '/' + PREFIX[lang];
  const other = lang === 'en' ? 'ko' : 'en';
  const otherUrl = '/' + PREFIX[other] + rel;
  const canonical = c.site.url + base + rel;
  const sec = (id) => (home ? `#${id}` : `${base}#${id}`);
  const nav = [
    [sec('news'), UI.news],
    [sec('publications'), UI.publications],
    [sec('projects'), UI.projects],
    [sec('background'), UI.background],
    [`${base}history/`, UI.history],
    [sec('contact'), UI.contact],
  ];
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Juheon Kang',
    alternateName: '강주헌',
    url: c.site.url,
    image: c.site.url + '/avatar.jpg',
    jobTitle: 'Ph.D. Student',
    affiliation: { '@type': 'CollegeOrUniversity', name: 'University of Seoul' },
    sameAs: [c.site.links.github, c.site.links.scholar, c.site.links.blog].filter(Boolean),
  };
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en" href="${c.site.url}/${rel}">
<link rel="alternate" hreflang="ko" href="${c.site.url}/ko/${rel}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${c.site.url}/avatar.jpg">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script>try{var m=localStorage.getItem('theme');if(m)document.documentElement.dataset.theme=m}catch(e){}</script>
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="stylesheet" href="/assets/style.css?v=${ASSET_VERSION}">
${home ? `<script type="application/ld+json">${JSON.stringify(person)}</script>` : ''}
</head>
<body>
<a class="skip" href="#main">${tx(UI.skip, lang)}</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${base}">${tx(c.site.name, lang)}</a>
    <nav class="nav" aria-label="Primary">
      ${nav.map(([u, label]) => `<a href="${u}">${tx(label, lang)}</a>`).join('\n      ')}
    </nav>
    <div class="tools">
      <a class="tool lang" href="${otherUrl}" lang="${other}" hreflang="${other}">${tx(UI.switchLang, lang)}</a>
      <button class="tool theme" type="button" id="theme-toggle" aria-label="${tx(UI.theme, lang)}" title="${tx(UI.theme, lang)}">
        <svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor"/></svg>
        <svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></g></svg>
      </button>
    </div>
  </div>
</header>
<main id="main" class="wrap">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <span>© ${new Date().getFullYear()} ${tx(c.site.name, lang)}</span>
    <span>${tx(UI.updated, lang)} ${new Date().toISOString().slice(0, 10)}</span>
  </div>
</footer>
<script src="/assets/site.js?v=${ASSET_VERSION}" defer></script>
</body>
</html>
`;
}

const linkList = (links, lang) =>
  links && links.length
    ? `<p class="links">${links.map((l) => `<a href="${href(l.url, lang)}"${ext(l.url)}>${tx(l.label, lang)}</a>`).join('')}</p>`
    : '';

// A dated row: date on the left, title / note on the right.
const row = (item, lang) => `<li class="row">
  <div class="row-date">${tx(item.date, lang)}</div>
  <div class="row-body">
    <p class="row-title">${tx(item.title, lang)}${item.role ? ` <span class="tag">${tx(item.role, lang)}</span>` : ''}</p>
    ${item.note ? `<p class="row-note">${tx(item.note, lang)}</p>` : ''}
  </div>
</li>`;

const rows = (items, lang) => `<ul class="rows">\n${items.map((i) => row(i, lang)).join('\n')}\n</ul>`;

const section = (id, title, inner, lang) => `<section id="${id}" class="section">
  <h2>${tx(title, lang)}</h2>
  ${inner}
</section>`;

function homePage(lang) {
  const L = c.site.links;
  const buttons = [
    L.email && [`mailto:${L.email}`, UI.email],
    HAS_CV && ['/cv.pdf', 'CV'],
    L.scholar && [L.scholar, 'Google Scholar'],
    L.github && [L.github, 'GitHub'],
    L.blog && [L.blog, UI.blog],
    L.lab && [L.lab, UI.labLink],
  ].filter(Boolean);

  const hero = `<section id="about" class="hero">
  <img class="portrait" src="/avatar.jpg" width="480" height="640" alt="${tx(c.site.name, lang)}">
  <div class="hero-text">
    <h1>${tx(c.site.name, lang)} <span class="alt-name" lang="${lang === 'en' ? 'ko' : 'en'}">${tx(c.site.altName, lang)}</span></h1>
    <p class="role">${tx(c.site.role, lang)}<br>${tx(c.site.affiliation, lang)}</p>
    ${c.site.bio.map((p) => `<p>${tx(p, lang)}</p>`).join('\n    ')}
    <ul class="chips" aria-label="${tx(UI.interests, lang)}">
      ${c.site.interests.map((i) => `<li>${tx(i, lang)}</li>`).join('')}
    </ul>
    <p class="buttons">
      ${buttons.map(([u, label], i) => `<a class="button${i === 0 ? ' primary' : ''}" href="${u}"${ext(u)}>${tx(label, lang)}</a>`).join('\n      ')}
    </p>
  </div>
</section>`;

  const news = section('news', UI.news, `<ul class="rows compact">
${c.news.map((n) => `<li class="row"><div class="row-date">${tx(n.date, lang)}</div><div class="row-body"><p>${tx(n.text, lang)}</p></div></li>`).join('\n')}
</ul>`, lang);

  const pubs = section('publications', UI.publications, `<ol class="pubs">
${c.publications.map((p) => `<li class="pub">
  <div class="pub-venue">${tx(p.venue, lang)}</div>
  <div class="pub-body">
    <h3>${tx(p.title, lang)}</h3>
    <p class="pub-meta">${[t(p.detail, lang), t(p.date, lang)].filter(Boolean).map(esc).join(' · ')}</p>
    <p class="pub-tags"><span class="tag${p.role === c.publications[0].role || t(p.role, 'en').startsWith('First') ? ' strong' : ''}">${tx(p.role, lang)}</span>${p.badge ? `<span class="tag accent">${tx(p.badge, lang)}</span>` : ''}${(p.links || []).map((l) => `<a class="tag link" href="${l.url}"${ext(l.url)}>${tx(l.label, lang)}</a>`).join('')}</p>
  </div>
</li>`).join('\n')}
</ol>`, lang);

  const projects = section('projects', UI.projects, `<ul class="cards">
${c.projects.map((p) => `<li class="card">
  <h3>${tx(p.name, lang)}</h3>
  <p>${tx(p.text, lang)}</p>
  ${linkList(p.links, lang)}
</li>`).join('\n')}
</ul>`, lang);

  const sub = (title, inner) => `<div class="subsection"><h3 class="sub-title">${tx(title, lang)}</h3>${inner}</div>`;
  const background = `<section id="background" class="section">
  <h2>${tx(UI.background, lang)}</h2>
  ${sub(UI.education, rows(c.education, lang))}
  ${sub(UI.awards, rows(c.awards, lang))}
  ${sub(UI.grants, rows(c.grants, lang))}
  ${sub(UI.patents, rows(c.patents, lang))}
  ${sub(UI.scholarships, rows(c.scholarships, lang))}
  ${sub(UI.experience, rows(c.experience, lang))}
  <p class="more"><a href="/${PREFIX[lang]}history/">${tx(UI.fullHistory, lang)} →</a></p>
</section>`;

  const k = c.contact;
  const contact = section('contact', UI.contact, `<dl class="contact">
  <dt>${tx(UI.email, lang)}</dt>
  <dd>${k.emails.map((e) => `<a href="mailto:${e.value}">${esc(e.value)}</a> <span class="muted">${tx(e.label, lang)}</span>`).join('<br>')}</dd>
  <dt>${tx(UI.phone, lang)}</dt>
  <dd><a href="tel:${k.phone.replace(/-/g, '')}">${esc(k.phone)}</a></dd>
  <dt>${tx(UI.office, lang)}</dt>
  <dd>${tx(k.office, lang)}</dd>
  <dt>${tx(UI.lab, lang)}</dt>
  <dd><a href="${k.lab.url}"${ext(k.lab.url)}>${esc(k.lab.name)}</a>, ${tx(k.lab.text, lang)}</dd>
  <dt>${tx(UI.advisor, lang)}</dt>
  <dd><a href="${k.advisor.url}"${ext(k.advisor.url)}>${tx(k.advisor.name, lang)}</a></dd>
</dl>`, lang);

  return shell({
    lang, rel: '', home: true,
    title: lang === 'en' ? 'Juheon Kang' : '강주헌 (Juheon Kang)',
    description: t(c.site.description, lang),
    body: [hero, news, pubs, projects, background, contact].join('\n'),
  });
}

function historyPage(lang) {
  const body = `<section class="page-head">
  <h1>${tx(UI.history, lang)}</h1>
  <p class="lead">${tx(UI.historyLead, lang)}</p>
</section>
${c.history.map((y) => `<section class="section timeline">
  <h2>${esc(y.year)}</h2>
  <ul class="rows">
${y.items.map((i) => `<li class="row${i.major ? ' major' : ''}">
  <div class="row-date">${tx(i.date, lang)}</div>
  <div class="row-body">
    <p class="row-title">${tx(i.title, lang)}</p>
    ${i.note ? `<p class="row-note">${tx(i.note, lang)}</p>` : ''}
  </div>
</li>`).join('\n')}
  </ul>
</section>`).join('\n')}
<p class="more"><a href="/${PREFIX[lang]}">← ${tx(UI.backHome, lang)}</a></p>`;
  return shell({
    lang, rel: 'history/',
    title: `${t(UI.history, lang)} | ${t(c.site.name, lang)}`,
    description: t(UI.historyLead, lang),
    body,
  });
}

function readPosts() {
  const dir = path.join(ROOT, 'posts');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8').replace(/\r\n/g, '\n');
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    const meta = {};
    if (m) for (const line of m[1].split('\n')) {
      const kv = line.match(/^(\w+):\s*(.*)$/);
      if (kv) meta[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1');
    }
    const slug = file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    const date = (meta.date || file.slice(0, 10)).slice(0, 10);
    return { slug, date, title: meta.title || slug, html: marked.parse(m ? m[2] : raw) };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

function postPage(post) {
  const body = `<article class="post">
  <header class="page-head">
    <p class="muted">${esc(post.date)}</p>
    <h1>${esc(post.title)}</h1>
  </header>
  <div class="prose">
${post.html}
  </div>
  <p class="more"><a href="/">← ${UI.backHome.en}</a></p>
</article>`;
  // Posts are single-language; both language switches lead to the same page.
  return shell({ lang: 'en', rel: `posts/${post.slug}/`, title: `${post.title} | Juheon Kang`, description: post.title, body })
    .replace(`href="/ko/posts/${post.slug}/" lang="ko" hreflang="ko"`, 'href="/ko/" lang="ko" hreflang="ko"')
    .replace(`<link rel="alternate" hreflang="ko" href="${c.site.url}/ko/posts/${post.slug}/">\n`, '');
}

function postsIndex(posts) {
  const body = `<section class="page-head"><h1>${UI.posts.en}</h1></section>
<ul class="rows">
${posts.map((p) => `<li class="row"><div class="row-date">${esc(p.date)}</div><div class="row-body"><p class="row-title"><a href="/posts/${p.slug}/">${esc(p.title)}</a></p></div></li>`).join('\n')}
</ul>`;
  return shell({ lang: 'en', rel: 'posts/', title: 'Posts | Juheon Kang', description: 'Posts by Juheon Kang', body })
    .replace('href="/ko/posts/" lang="ko" hreflang="ko"', 'href="/ko/" lang="ko" hreflang="ko"')
    .replace(`<link rel="alternate" hreflang="ko" href="${c.site.url}/ko/posts/">\n`, '');
}

const redirect = (to) => `<!doctype html><meta charset="utf-8"><title>Redirecting</title><link rel="canonical" href="${c.site.url}${to}"><meta http-equiv="refresh" content="0; url=${to}"><a href="${to}">Moved here</a>\n`;

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name), b = path.join(to, e.name);
    e.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b);
  }
}

fs.rmSync(DIST, { recursive: true, force: true });
copyDir(path.join(ROOT, 'static'), DIST);
copyDir(path.join(ROOT, 'src'), path.join(DIST, 'assets'));
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');

for (const lang of LANGS) {
  write(`${PREFIX[lang]}index.html`, homePage(lang));
  write(`${PREFIX[lang]}history/index.html`, historyPage(lang));
}

const posts = readPosts();
for (const p of posts) write(`posts/${p.slug}/index.html`, postPage(p));
write('posts/index.html', postsIndex(posts));

// Addresses used by the previous version of the site.
write('about/index.html', redirect('/'));
write('contact/index.html', redirect('/#contact'));

write('404.html', shell({
  lang: 'en', rel: '404.html', title: 'Page not found | Juheon Kang', description: 'Page not found',
  body: `<section class="page-head"><h1>${UI.notFound.en}</h1><p class="lead">${UI.notFound.ko}</p><p class="more"><a href="/">← ${UI.backHome.en}</a></p></section>`,
}));

const urls = ['', 'history/', 'ko/', 'ko/history/', 'posts/', ...posts.map((p) => `posts/${p.slug}/`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${c.site.url}/${u}</loc></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${c.site.url}/sitemap.xml\n`);

console.log(`Built ${urls.length} pages into dist/ (CV button: ${HAS_CV ? 'on' : 'off, add static/cv.pdf to enable'})`);
