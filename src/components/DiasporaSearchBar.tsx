const DiasporaSearchBar = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
            🌍 Diasporada <span className="text-gradient-primary">Ara</span>
          </h2>
          <p className="text-muted-foreground text-sm font-body mb-6">
            Konsolosluk, doktor, market, iş ilanı ve daha fazlasını anında bul
          </p>

          {/* AI Chat Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative flex items-center bg-card border border-border rounded-2xl shadow-card px-4 py-3 gap-3">
              <span className="text-xl">🤖</span>
              <input
                type="text"
                placeholder="Ne arıyorsun? Örn: 'En yakın konsolosluk nerede?' veya 'Vize danışmanı bul'"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-body"
                readOnly
              />
              <button className="shrink-0 bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
                Ara
              </button>
            </div>
          </div>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              🏛️ Konsolosluk
            </button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-full bg-turquoise/10 text-turquoise hover:bg-turquoise/20 transition-colors">
              🩺 Doktor
            </button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors">
              ✈️ Vize & Göçmenlik
            </button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-full bg-success/10 text-success hover:bg-success/20 transition-colors">
              🛒 Türk Marketi
            </button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors">
              💼 İş İlanları
            </button>
          </div>

          {/* Sponsor */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground font-body mb-2">Sponsor</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">✈️</span>
              <span className="text-sm font-semibold text-foreground">Türk Hava Yolları</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiasporaSearchBar;
