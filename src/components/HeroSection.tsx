import { ArrowRight, Globe, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import landmarksImage from "@/assets/landmarks-collage.png";
import { useDiaspora } from "@/contexts/DiasporaContext";

const HeroSection = () => {
  const { t } = useDiaspora();
  const h = t.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-80 h-80 bg-turquoise/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-turquoise-light/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      </div>

      {/* Landmarks image */}
      <div className="absolute bottom-0 right-0 w-full md:w-3/5 h-[50%] md:h-[85%] pointer-events-none">
        <img
          src={landmarksImage}
          alt="World landmarks"
          className="w-full h-full object-contain object-bottom opacity-50 md:opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-turquoise/15 border border-turquoise/30 mb-8 animate-fade-in-up shadow-md">
            <Globe className="h-4 w-4 text-turquoise" />
            <span className="text-sm font-semibold text-turquoise">{h.badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {h.title}
            <span className="text-gradient-primary">{h.titleHighlight}</span>
            {h.titleEnd}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up font-body" style={{ animationDelay: '0.2s' }}>
            {h.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="text-base px-8 py-6 bg-turquoise hover:bg-turquoise-light text-primary-foreground shadow-lg">
              {h.cta1}
              <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 border-foreground/20 text-foreground hover:bg-foreground/5">
              {h.cta2}
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-turquoise" />
              <span className="text-sm text-muted-foreground font-body">{h.stat1}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground font-body">{h.stat2}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-turquoise" />
              <span className="text-sm text-muted-foreground font-body">{h.stat3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
