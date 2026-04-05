# CorteQS | Türk Diaspora Ağı

Türk diasporası için global danışmanlık, dernek ve etkinlik ağı platformu.

## Özellikler

- **Danışmanlık Hizmetleri**: Uzman danışmanlarla bağlantı kurun
- **Dernekler**: Türk derneklerini keşfedin ve üye olun
- **İşletmeler**: Türk işletmelerini bulun ve destekleyin
- **Etkinlikler**: Diaspora etkinliklerini keşfedin ve katılın
- **Harita Arama**: Konum bazlı arama yapın

## Teknolojiler

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [React Router](https://reactrouter.com/) - Routing

## Geliştirme

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Repoyu klonla
git clone https://github.com/ubterzioglu/corteqs.git
cd corteqs

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

### Script'ler

- `npm run dev` - Geliştirme sunucusu
- `npm run build` - Production build
- `npm run preview` - Production preview
- `npm run test` - Testleri çalıştır

## 🚀 Coolify Deployment

Bu proje Coolify üzerinde deploy edilebilir.

### Gereksinimler
- Coolify instance
- Supabase projesi (URL ve Anon Key)

### Adımlar
1. Coolify dashboard'a git
2. "New Resource" → "Public Repository"
3. GitHub URL: `https://github.com/ubterzioglu/corteqs`
4. Branch: `master`
5. Build Pack: `Docker Compose`
6. Compose File: `docker-compose.coolify.yml`
7. Environment Variables ekle:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
8. Coolify içinde host port publish etmeyin (proxy domain ile route eder)

### Manuel Docker Build
```bash
docker build -t corteqs .
docker run -p 3000:80 corteqs
```

## Lisans

Bu proje özel lisans altında lisanslanmıştır.
