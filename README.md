# jhkang-rsrch.github.io

Source of <https://jhkang-rsrch.github.io>. A small static site in English and Korean, built by one script and deployed by GitHub Actions on every push to `main`.

## Editing

| To change | Edit |
|---|---|
| Bio, news, publications, projects, awards, grants, history, contact | `content.mjs` |
| Layout and section order | `build.mjs` |
| Colors, fonts, spacing | `src/style.css` |
| Profile photo | `static/avatar.jpg` |
| CV download button | Add `static/cv.pdf` (the button appears when the file exists) |
| Google Scholar button | Set `links.scholar` in `content.mjs` |
| Posts | Add `posts/YYYY-MM-DD-slug.md` with `title` and `date` front matter |

Text values in `content.mjs` are either a plain string, used for both languages, or `{ en: '...', ko: '...' }`.

## Preview locally

```bash
npm install
npm run preview   # http://localhost:4000
```

## License

Content and code are under the MIT license. See [LICENSE](LICENSE).
