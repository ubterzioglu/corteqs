# Corteqs MVP - Agent Kuralları

## Lovable Senkronizasyon Kuralları

### Genel Akış
1. Kullanıcı Lovable'dan projenin güncel halini `referans/` klasörüne atar
2. Agent (Kilo), `referans/src/` ile `src/` arasındaki farkları tespit eder
3. Farklar, mevcut proje yapısını bozmadan `src/` altına implemente edilir
4. Her güncelleme `referans.md` dosyasına timestamp ile kaydedilir

### Fark Tespiti
- `referans/src/` ile `src/` arasındaki farkları bul
- Önce dosya listesi karşılaştırması yap (yeni dosyalar, silinen dosyalar)
- Sonra mevcut dosyalardaki içerik farklarını tespit et
- `package.json` dependency farklarını kontrol et
- `referans/supabase/migrations/` altındaki yeni migration'ları tespit et

### Implementasyon Kuralları
- Mevcut `src/` yapısını koru (klasör yapısı, naming conventions)
- `src/contexts/`, `src/hooks/`, `src/data/` gibi özel klasörleri koru
- Lovable'ın generate ettiği UI değişikliklerini mevcut component yapısına uyarla
- Route'ları `App.tsx`'te mevcut yapıya uygun ekle
- Supabase migration'larını `referans/supabase/migrations/` altına kopyala
- Yeni dependency'leri `package.json`'a ekle ve install çalıştır

### Güncelleme Kaydı
- Her implementasyondan sonra `referans.md`'nin "Güncelleme Geçmişi" bölümüne timestamp ekle
- Format:
  ```
  ### [YYYY-MM-DD HH:MM]
  **Eklenen özellikler:**
  - ...
  **Değiştirilen dosyalar:**
  - ...
  **Yeni dependency'ler:**
  - ...
  ```

### Korunacak Öğeler (Asla Üzerine Yazılmaz)
- `src/contexts/` - Özel context yapıları
- `src/hooks/` - Özel hook'lar
- `src/data/` - Statik veri dosyaları
- `src/integrations/` - Supabase ve üçüncü parti entegrasyonları
- `docker-compose.yml`, `Dockerfile`, `nginx.conf` - Deployment yapılandırması
- `.env.local` - Lokal environment değişkenleri
- `scripts/` - Deployment scriptleri
- `.kilo/` - Kilo yapılandırması
- `docu/` - Dokümantasyon

## Komutlar
- `npm run dev` - Geliştirme sunucusu
- `npm run build` - Production build
- `npm run lint` - ESLint kontrolü
- `npm run test` - Test çalıştırma
- `npm run test:watch` - Test izleme modu
