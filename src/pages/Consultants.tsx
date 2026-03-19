import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Bot, Video, UserPlus, UserCheck, Home, Plane, Briefcase, Scale, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryFilter from "@/components/CountryFilter";
import { consultants } from "@/data/mock";
import { useToast } from "@/hooks/use-toast";

const categoryFilters = [
  { key: "all", label: "Tümü", icon: null },
  { key: "Gayrimenkul", label: "Gayrimenkul", icon: Home },
  { key: "Vize & Göçmenlik", label: "Vize & Göçmenlik", icon: Plane },
  { key: "Şirket & İş", label: "Şirket & İş", icon: Briefcase },
  { key: "Hukuk & Vergi", label: "Hukuk & Vergi", icon: Scale },
  { key: "Finansal", label: "Finansal", icon: TrendingUp },
  { key: "Yaşam & Relocation", label: "Yaşam & Relocation", icon: Heart },
];

const Consultants = () => {
  const [country, setCountry] = useState("all");
  const [category, setCategory] = useState("all");
  const { toast } = useToast();
  const [followedIds, setFollowedIds] = useState<Set<string>>(new Set());

  const filtered = consultants.filter((c) => {
    const matchesCountry = country === "all" || c.country === country;
    const matchesCategory = category === "all" || c.category === category;
    return matchesCountry && matchesCategory;
  });

  const toggleFollow = (id: string, name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFollowedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast({ title: "Takipten çıkıldı", description: `${name} artık takip edilmiyor.` });
      } else {
        next.add(id);
        toast({ title: "Takip edildi! 🔔", description: `${name} yeni bir şey paylaştığında bildirim alacaksınız.` });
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Danışmanlar</h1>
              <p className="text-muted-foreground font-body mt-1">
                {filtered.length} danışman bulundu
              </p>
            </div>
            <CountryFilter value={country} onChange={setCountry} />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categoryFilters.map((f) => {
              const isActive = category === f.key;
              const Icon = f.icon;
              return (
                <Button
                  key={f.key}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(f.key)}
                  className="gap-1.5 text-xs"
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  {f.label}
                </Button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((c) => {
              const isFollowed = followedIds.has(c.id);
              return (
                <Link
                  to={`/consultant/${c.id}`}
                  key={c.id}
                  className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={c.photo} alt={c.name} className="w-14 h-14 rounded-full object-cover shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-bold text-foreground truncate">{c.name}</h3>
                        <p className="text-xs text-muted-foreground font-body truncate">{c.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => toggleFollow(c.id, c.name, e)}
                      className={`p-2 rounded-full transition-colors shrink-0 ${isFollowed ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground hover:text-primary"}`}
                    >
                      {isFollowed ? <UserCheck className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground font-body mb-2">📍 {c.city}, {c.country}</p>

                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 text-gold fill-gold" />
                    <span className="text-sm font-semibold text-foreground">{c.rating}</span>
                    <span className="text-xs text-muted-foreground">({c.reviews})</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {c.specialties.slice(0, 2).map((s) => (
                      <span key={s} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5">{s}</span>
                    ))}
                  </div>

                  <div className="flex gap-2" onClick={(e) => e.preventDefault()}>
                    <Button variant="default" size="sm" className="flex-1 gap-1 text-xs">
                      <Video className="h-3 w-3" /> Canlı
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-1 text-xs">
                      <Bot className="h-3 w-3" /> AI Twin
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground font-body">
              Bu filtrelerde danışman bulunmuyor.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultants;
