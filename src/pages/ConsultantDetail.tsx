import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Bot, MessageSquare, Calendar, Video, Globe as GlobeIcon, ArrowLeft, ExternalLink, UserPlus, UserCheck, Zap, Info, Clock, Home, MapPin, BedDouble, Bath, Maximize, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { consultants } from "@/data/mock";
import { useToast } from "@/hooks/use-toast";

const ConsultantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const consultant = consultants.find((c) => c.id === id);
  const [isFollowing, setIsFollowing] = useState(false);

  if (!consultant) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 container mx-auto px-4 text-center py-20">
          <h1 className="text-2xl font-bold text-foreground mb-4">Danışman bulunamadı</h1>
          <Link to="/consultants" className="text-primary hover:underline">← Danışmanlara dön</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    toast({
      title: isFollowing ? "Takipten çıkıldı" : "Takip edildi! 🔔",
      description: isFollowing
        ? `${consultant.name} artık takip edilmiyor.`
        : `${consultant.name} yeni bir şey paylaştığında bildirim alacaksınız.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/consultants" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Danışmanlara dön
          </Link>

          {/* Free Banner */}
          <div className="bg-gradient-to-r from-turquoise/10 via-primary/10 to-gold/10 border border-primary/20 rounded-2xl p-4 mb-6 flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">İlk 10 dakika ücretsiz! 🎁</p>
              <p className="text-xs text-muted-foreground font-body">Canlı görüşme ve AI Twin seanslarında ilk 10 dakika tamamen ücretsiz.</p>
            </div>
          </div>

          {/* Header */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl md:text-3xl shrink-0">
                {consultant.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">{consultant.name}</h1>
                  <Button
                    variant={isFollowing ? "secondary" : "outline"}
                    size="sm"
                    className="gap-1"
                    onClick={toggleFollow}
                  >
                    {isFollowing ? <UserCheck className="h-3.5 w-3.5" /> : <UserPlus className="h-3.5 w-3.5" />}
                    {isFollowing ? "Takipte" : "Takip Et"}
                  </Button>
                </div>
                <p className="text-muted-foreground font-body mt-1">{consultant.role}</p>
                <p className="text-sm text-muted-foreground font-body mt-1">📍 {consultant.city}, {consultant.country}</p>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-gold fill-gold" />
                    <span className="font-semibold text-foreground">{consultant.rating}</span>
                    <span className="text-sm text-muted-foreground">({consultant.reviews} değerlendirme)</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-muted/60 rounded-full px-2.5 py-1">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="h-3.5 w-3.5" />
                    <span className="text-sm font-semibold text-foreground">4.{Math.floor(Math.random() * 3) + 7}</span>
                    <span className="text-xs text-muted-foreground">Google</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {consultant.languages.map((l) => (
                    <span key={l} className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1">{l}</span>
                  ))}
                </div>
              </div>

              {/* CTAs with pricing */}
              <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
                <div className="bg-muted/50 rounded-xl p-3 mb-1">
                  <p className="text-xs text-muted-foreground font-body text-center mb-2">Görüşme Ücretleri</p>
                  <div className="flex gap-4 justify-center text-center">
                    <div>
                      <p className="text-lg font-bold text-foreground">€30</p>
                      <p className="text-[10px] text-muted-foreground">Canlı / 30dk</p>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <p className="text-lg font-bold text-foreground">€10</p>
                      <p className="text-[10px] text-muted-foreground">AI Twin / 30dk</p>
                    </div>
                  </div>
                </div>
                {/* CTAs with availability badges */}
                <TooltipProvider>
                  <Button variant="default" className="gap-2 w-full relative">
                    <span className="absolute -top-2 -right-2 bg-[hsl(var(--success))] text-primary-foreground text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Şu an müsait
                    </span>
                    <Video className="h-4 w-4" /> Canlı Görüşme — €30
                  </Button>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="gap-2 w-full relative">
                        <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full p-0.5">
                          <Info className="h-3 w-3" />
                        </span>
                        <Bot className="h-4 w-4" /> AI Twin Seans — €10
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-[250px] text-center">
                      <p className="font-semibold mb-1">🤖 24 Saat Danışman Klonu</p>
                      <p className="text-xs text-muted-foreground">Yapay zeka teknolojisiyle danışmanın dijital ikizi ile 7/24 görüşme fırsatı!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button variant="outline" className="gap-2 w-full">
                  <MessageSquare className="h-4 w-4" /> WhatsApp ile Görüş
                </Button>
                <Button variant="outline" className="gap-2 w-full">
                  <Calendar className="h-4 w-4" /> Randevu Al
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="bg-card border border-border w-full justify-start overflow-x-auto">
              <TabsTrigger value="bio">Hakkında</TabsTrigger>
              <TabsTrigger value="specialties">Uzmanlık Alanları</TabsTrigger>
              <TabsTrigger value="events">Etkinlik Takvimi</TabsTrigger>
              <TabsTrigger value="contact">İletişim</TabsTrigger>
              <TabsTrigger value="contact">İletişim</TabsTrigger>
            </TabsList>

            <TabsContent value="bio" className="mt-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h2 className="text-xl font-bold text-foreground mb-4">Biyografi</h2>
                <p className="text-muted-foreground font-body leading-relaxed">{consultant.bio}</p>
              </div>
            </TabsContent>

            <TabsContent value="specialties" className="mt-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h2 className="text-xl font-bold text-foreground mb-4">Uzmanlık Alanları</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {consultant.specialties.map((s) => (
                    <div key={s} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground font-body">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>


            <TabsContent value="events" className="mt-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h2 className="text-xl font-bold text-foreground mb-4">Etkinlik Takvimi</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="text-center shrink-0">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-xs text-muted-foreground">Mar</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Yatırım Webinarı</h3>
                      <p className="text-sm text-muted-foreground font-body">Online · 20:00 CET</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto shrink-0">Katıl</Button>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="text-center shrink-0">
                      <div className="text-2xl font-bold text-primary">22</div>
                      <div className="text-xs text-muted-foreground">Mar</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Birebir Danışmanlık Günü</h3>
                      <p className="text-sm text-muted-foreground font-body">{consultant.city} · 10:00-17:00</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto shrink-0">Randevu</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h2 className="text-xl font-bold text-foreground mb-4">İletişim</h2>
                <div className="space-y-4">
                  <a href={consultant.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <GlobeIcon className="h-5 w-5 text-primary" />
                    <span className="text-foreground font-body">{consultant.website}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                  </a>
                  <a href={`https://wa.me/${consultant.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="text-foreground font-body">WhatsApp: {consultant.whatsapp}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                  </a>
                  <Button variant="default" className="w-full gap-2 mt-4">
                    <Calendar className="h-4 w-4" /> Mesaj Gönder
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Gayrimenkul İlanları — always visible below tabs */}
          {consultant.category === "Gayrimenkul" && (
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" /> Gayrimenkul İlanları
                </h2>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-semibold">Freemium: 1 ilan</span>
              </div>
              
              {/* Active Listing (Freemium - 1 ilan) */}
              <div className="border border-border rounded-xl overflow-hidden mb-4">
                <div className="aspect-video bg-muted relative">
                  <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=340&fit=crop" alt="Property" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Satılık</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg">Modern 2+1 Daire — {consultant.city} Merkez</h3>
                  <p className="text-muted-foreground text-sm font-body mt-1 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {consultant.city}, {consultant.country}
                  </p>
                  <p className="text-2xl font-bold text-primary mt-3">€285.000</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" /> 2 Oda</span>
                    <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> 1 Banyo</span>
                    <span className="flex items-center gap-1"><Maximize className="h-4 w-4" /> 85 m²</span>
                  </div>
                  <Button className="w-full mt-4 gap-2">
                    <MessageSquare className="h-4 w-4" /> İlanı Sorgula
                  </Button>
                </div>
              </div>

              {/* Premium locked listings */}
              <div className="relative">
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10 rounded-xl flex flex-col items-center justify-center gap-3">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Crown className="h-6 w-6 text-gold" />
                  </div>
                  <p className="font-bold text-foreground text-center">Premium ile 3 ilan yayınlayın</p>
                  <p className="text-sm text-muted-foreground text-center max-w-xs">Premium abonelikle 3'e kadar gayrimenkul ilanı yayınlayabilirsiniz.</p>
                  <Button variant="default" size="sm" className="gap-1.5 bg-gold hover:bg-gold/90 text-primary-foreground">
                    <Crown className="h-3.5 w-3.5" /> Premium'a Geç
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-40">
                  {[
                    { title: "Lüks 3+1 Villa", price: "€520.000", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=240&fit=crop" },
                    { title: "Yatırımlık Studio", price: "€165.000", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=240&fit=crop" },
                  ].map((p, i) => (
                    <div key={i} className="border border-border rounded-xl overflow-hidden">
                      <div className="aspect-video bg-muted">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground">{p.title}</h3>
                        <p className="text-lg font-bold text-primary mt-1">{p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultantDetail;
