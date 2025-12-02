# 🚀 Quick Start Guide - Deployment pe Hosterion

## Deployment Rapid (GitHub Actions - Recomandat)

### Setup Inițial (doar prima dată)

1. **Configurează GitHub Secrets:**
   - Mergi la: https://github.com/teonegura21/HolistBella/settings/secrets/actions
   - Click pe "New repository secret"
   - Adaugă fiecare secret:

   | Nume Secret | Valoare |
   |-------------|---------|
   | `HOSTERION_HOST` | `holistbella.ro` sau `92.114.98.33` |
   | `HOSTERION_USERNAME` | `holistbe` |
   | `HOSTERION_PASSWORD` | (parola ta de hosting) |

### Deployment Automat

După ce ai configurat secrets-urile, deployment-ul este AUTOMAT:

```bash
# Faci modificări în cod
git add .
git commit -m "Descriere modificări"
git push origin main
```

**Gata!** GitHub Actions va face automat:
- ✅ Instalare dependințe
- ✅ Build frontend
- ✅ Upload pe Hosterion
- ✅ Site-ul se actualizează în ~2-3 minute

**Verifică deployment-ul:**
- https://github.com/teonegura21/HolistBella/actions

---

## Deployment Manual (Alternativă)

Dacă preferi să faci upload manual sau GitHub Actions nu funcționează:

### Opțiunea 1: Frontend Static (Simplu)

```bash
# 1. Build frontend
npm run build:client

# 2. Upload dist/public/* către public_html/ via FileZilla sau cPanel File Manager
#    Host: holistbella.ro (sau 92.114.98.33)
#    User: holistbe
#    Pass: (parola ta)
```

### Opțiunea 2: Node.js Full-Stack (Complex)

```bash
# 1. Build tot
npm run build

# 2. Upload întreg proiectul către /home/holistbe/holistbella/

# 3. În cPanel:
#    Software → Setup Node.js App → Create Application
#    - Node version: 20.x
#    - App root: holistbella
#    - App URL: holistbella.ro
#    - Startup file: dist/index.js
```

---

## Comenzi Disponibile

```bash
# Development (local)
npm run dev              # Pornește serverul de development

# Build pentru production
npm run build:client     # Build doar frontend (pentru static hosting)
npm run build:server     # Build doar backend (pentru Node.js)
npm run build            # Build complet (frontend + backend)

# Production server local (pentru testare)
npm start                # Pornește serverul de producție

# Type checking
npm run check            # Verifică TypeScript
```

---

## Verificare După Deployment

După ce ai făcut deployment, verifică:
- [ ] Site-ul se deschide la https://www.holistbella.ro
- [ ] Toate paginile funcționează (Acasă, Despre Noi, Servicii, etc.)
- [ ] Imaginile se încarcă corect
- [ ] Pe mobil arată bine
- [ ] SSL funcționează (HTTPS)

---

## Troubleshooting

**GitHub Actions eșuează:**
- Verifică că ai adăugat toate secrets-urile corect
- Încearcă să folosești IP-ul `92.114.98.33` în loc de domeniu

**Site-ul nu se vede după deployment:**
- Așteaptă 5-10 minute pentru cache clearing pe server
- Verifică că ai uploadat conținutul din `dist/public/`, nu folderul însuși
- Șterge cache-ul browserului (Ctrl+Shift+R)

**Stilurile sau imaginile lipsesc:**
- Asigură-te că `public_html/` conține direct `index.html` și `assets/`
- Nu ar trebui să fie `public_html/dist/public/index.html`

---

## Resurse

- **cPanel**: https://pontus.hosterion.net:2083/
- **GitHub Actions**: https://github.com/teonegura21/HolistBella/actions
- **Documentație completă**: Vezi `README.md` în repository

---

**🎉 Succes cu deployment-ul!**
