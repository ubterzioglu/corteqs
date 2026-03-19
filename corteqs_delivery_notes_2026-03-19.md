# Corteqs teslim paketi

Bu paket, GitHub bağlantısı düzelene kadar projeyi güvenli şekilde paylaşmak ve taşımak için hazırlandı.

## Dosyalar
- `corteqs_backup_2026-03-19.zip` — proje kaynak kodu yedeği
- `corteqs_delivery_notes_2026-03-19.md` — bu teslim notu

## İçerik
ZIP paketi proje dosyalarını içerir. Geçici derleme çıktıları ve büyük bağımlılık klasörleri dahil edilmemiştir:
- hariç tutulanlar: `.git`, `node_modules`, `dist`, `.vite`, `coverage`

## Yerelde çalıştırma
1. ZIP dosyasını açın
2. terminalde proje klasörüne girin
3. bağımlılıkları kurun:
   - `npm install`
4. geliştirme sunucusunu başlatın:
   - `npm run dev`

## Alternatif teslim yöntemleri
- ZIP dosyasını e-posta / Drive / Slack ile paylaşın
- Alıcı kendi Git deposuna çıkarıp ilk commit'i atabilir
- GitHub bağlantısı düzelince aynı kod tabanı Lovable içinden tekrar bağlanabilir

## Doğrulama checklist
- dosya açılıyor mu
- `npm install` hatasız tamamlanıyor mu
- `npm run dev` ile uygulama açılıyor mu
- ana sayfa düzgün render oluyor mu

## Not
Bu paket yedek ve teslim amaçlıdır; gizli anahtarlar koda gömülmemelidir.
