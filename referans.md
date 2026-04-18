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

*(Henüz güncelleme yapılmadı. İlk senkronizasyon sonrası buraya kayıt eklenecektir.)*
