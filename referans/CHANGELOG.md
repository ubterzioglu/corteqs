# CorteQS_V2 — Değişiklik Geçmişi

Bu doküman, son oturumda yapılan tüm değişikliklerin kronolojik özetidir.

---

## 1. Dernek Kartları — Hollanda yerine Dubai İş İnsanları Konseyi
- `src/components/AssociationsSection.tsx`: 3 ek dernek kartı eklendi.
- `src/data/mock.ts`: Hollanda derneği yerine "Dubai'den İş İnsanları Konseyi" eklendi.

---

## 2. AI Twin & Canlı Görüşme Mantığı
- **Yeni sayfa**: `src/pages/AITwin.tsx` — AI Twin landing page.
  - Küçük görseller ile "AI Twin hazırlanacak" akışı.
  - Döküman submit → her zaman önüne **Premium Pro** paketi çıkar.
  - "AI Twin kullanımı, AI twin seanslarından yapılan **%10 kesinti** ile karşılanmaktadır." notu.
  - Yeterli özgün veri (ses + görüntü örnekleri) → RAG çalışması başlatılır.
- `src/App.tsx`: `/ai-twin` route'u eklendi.
- `src/components/FeaturedConsultants.tsx` & `src/components/profiles/ProfileConsultant.tsx`:
  Tüm danışman ve işletme kartlarında **ücretlendirilmiş AI Twin / Canlı Görüşme / WhatsApp** opsiyonları gözden geçirildi.
- `src/pages/AdminDashboard.tsx`: AI Twin **aktivasyon başvurusu** tab'ı (paket upgrade + admin onayı).
- `src/pages/Consultants.tsx`: AI Twin CTA entegrasyonu.

---

## 3. Şehir Elçisi Dashboard — Onboarding & Referral Reporting
- `src/components/profiles/ProfileAmbassador.tsx`: "Onboarding" tab'ı tam **rapor merkezine** çevrildi.
  - **KPI Kartları**: Total Onboarded, Total Revenue, Referral Payment, Business Revenue.
  - **Tarih aralığı filtreleri**: 7/30/90 gün ve tüm zamanlar.
  - **Detaylı tablo**: Tip (Birey / Danışman / İşletme), tarih, gelir, referans payı, durum.
  - **CSV İndir** butonu.
  - **Komisyon kuralları**: Birey başına €5 sabit, Danışman/V-Blogger seansı %10, İşletme cirosu %5.

---

## 4. Diaspora Menüsü Düzeni & Uluslararası Landing Page'ler
- `src/components/Navbar.tsx`: Türk dışı diasporalar ve `/register-diaspora` sayfasında ülke seçici **gizlendi**.
- `src/assets/multicultural-diaspora-hero.jpg`: **Yeni hero görseli** (bayraksız, çok kültürlü).
- `src/components/InternationalDiasporaHero.tsx` & `src/pages/RegisterDiaspora.tsx`:
  - Sadeleştirilmiş 3 parçalı yapı: **Açılış banner + 2 değer section + Kayıt formu**.
  - "Sosyal ve ekonomik dayanışma makinesi — tüm danışmanlar, işletmeler ve dernekler tek çatı altında" mesajı.
  - Hindi, Çince, Filipino dillerine çeviriler güncellendi.

---

## 5. Hero Layout & Diaspora Drop-down İncelemesi
- `src/components/HeroSection.tsx`: Blog Contest & City Ambassador teaser butonlarına `max-w-xl lg:max-w-lg` eklendi → görselin üstüne taşmıyor.
- `src/components/Navbar.tsx`: "Register Diaspora" / "Request your community" etiketleri **İngilizce sabit** (drill-down son seçenek).
- `src/assets/multicultural-diaspora-hero.jpg`: Doğu & Batı'dan **ikonik mimari yapılarla** (Eyfel, Burj Khalifa, Ayasofya, Çin Seddi vb.) yenilendi.

---

## 6. Türk Diasporası Hero — Sayaç Bloğu Kaldırıldı
- `src/components/HeroSection.tsx`: `<HeroCityCounters />` Türk diaspora ana sayfasından **kaldırıldı**.

---

## Etkilenen Dosyalar (Özet)
- `src/App.tsx`
- `src/assets/multicultural-diaspora-hero.jpg` (yeni)
- `src/components/AssociationsSection.tsx`
- `src/components/FeaturedConsultants.tsx`
- `src/components/HeroSection.tsx`
- `src/components/InternationalDiasporaHero.tsx`
- `src/components/Navbar.tsx`
- `src/components/profiles/ProfileAmbassador.tsx`
- `src/components/profiles/ProfileConsultant.tsx`
- `src/data/mock.ts`
- `src/pages/AITwin.tsx` (yeni)
- `src/pages/AdminDashboard.tsx`
- `src/pages/Consultants.tsx`
- `src/pages/RegisterDiaspora.tsx`
