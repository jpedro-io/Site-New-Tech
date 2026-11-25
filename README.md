# New Tech — Soluções digitais (site)

Site institucional estático (HTML + CSS + JS puro, sem build), réplica fiel da prancha
`newtech-site-uidesign.pdf` / `site-uidesign.html`.

## Rodar local
Abra `index.html` no navegador, ou sirva a pasta:
```
python3 -m http.server 8080
```

## Deploy (Vercel / Netlify / GitHub Pages)
É um site estático: aponte a raiz do projeto para esta pasta e publique.
Na Vercel: `vercel deploy` na pasta (framework: Other / static).

## Estrutura
- `index.html` — página única (nav → hero → marcos → serviços → história → stack → projetos → processo → CTA → footer)
- `css/style.css` — estilos + animações de entrada/idle + responsivo + `prefers-reduced-motion`
- `js/main.js` — reveal on scroll (IntersectionObserver) e estado do nav
- `assets/fonts/` — Montserrat 300–800 auto-hospedada
- `assets/img/` — logos, textura, favicon e screenshots reais dos projetos

## Onde trocar contatos/link
- WhatsApp: procure `wa.me/5533998478236` no `index.html`
- Projetos: blocos `.pc` (URLs visíveis em `.meta .u`)
- Redes do footer: bloco `.social`
