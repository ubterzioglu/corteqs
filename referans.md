# Lovable Senkronizasyon Referansı

## Plan

Bu repo, Lovable platformunda geliştirilen Corteqs MVP projesinin güncel halini `referans/` klasörü üzerinden takip eder.

### Senkronizasyon Akışı
1. Kullanıcı Lovable'dan projenin güncel halini `referans/` klasörüne atar
2. `referans/` ile `src/` arasındaki farklar tespit edilir
3. Farklar, mevcut proje yapısını bozmadan `src/` altına implemente edilir
4. Her güncelleme bu dosyanın "Güncelleme Geçmişi" bölümüne kaydedilir

### Dikkat Edilecek Noktalar
- Mevcut klasör yapısı ve naming korunacak
- Özel eklenen dosyalar (contexts, hooks, data) korunacak
- Deployment yapılandırması (Docker, nginx) korunacak
- Yeni dependency'ler eklenecek, çakışanlar resolve edilecek

---

## Güncelleme Geçmişi

### [2026-05-03 10:05]
**Eklenen özellikler:**
- AI Twin landing ve admin aktivasyon başvuruları
- Şehir elçisi onboarding/referral rapor merkezi
- Uluslararası diaspora landing ve Register Diaspora akışı
- Founding 1000, Career, Vlogger Contest, Dashboards sayfaları
- WhatsApp grup landing oluşturma, landing detay ve admin moderasyon sistemi
- Legal/KVKK/GDPR sayfaları ve cookie consent banner
- Mock provider verilerinden birleşik harita entity altyapısı ve WhatsApp bot lookup function
- Interest registration, WhatsApp landings, events ve welcome pack SIM card database migration'ları

**Değiştirilen dosyalar:**
- `src/App.tsx`, `src/main.tsx`
- `src/components/`, `src/components/admin/`, `src/components/profiles/`
- `src/pages/`, `src/pages/legal/`
- `src/lib/`, `src/data/`, `src/contexts/`
- `src/integrations/supabase/types.ts`
- `supabase/functions/whatsapp-bot-lookup/index.ts`
- `supabase/migrations/`

**Yeni dependency'ler:**
- Yok. Mevcut proje dependency'leri korundu; `lovable-tagger` ve referans env/project ayarları taşınmadı.
