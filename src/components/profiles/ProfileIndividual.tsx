import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wallet, Calendar, Tag, Users, Bell, 
  ArrowLeft, Plus, ChevronRight, Star, Bot, MessageSquare,
  MapPin, Clock, Gift, TrendingUp, Briefcase, Linkedin,
  FileText, Eye, EyeOff, Settings, Shield, UserPlus, ScanLine, QrCode
} from "lucide-react";
import QRScannerMock from "@/components/QRScannerMock";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { consultants, associations } from "@/data/mock";

const ProfileIndividual = () => {
  const [isJobSeeking, setIsJobSeeking] = useState(true);
  const [profileVisible, setProfileVisible] = useState(true);
  const [linkedinUrl, setLinkedinUrl] = useState("https://linkedin.com/in/emreaydin");
  const [cvUploaded, setCvUploaded] = useState(true);

  const user = {
    name: "Emre Aydın",
    email: "emre@example.com",
    avatar: "EA",
    country: "Almanya",
    city: "Berlin",
    balance: 250.00,
    title: "Yazılım Mühendisi",
  };

  const followedConsultants = consultants.slice(0, 3);
  const followedAssociations = associations.slice(0, 2);

  const coupons = [
    { id: 1, title: "İlk Seans %20 İndirim", code: "HOSGELDIN20", expires: "31 Mar 2026", type: "discount" as const, businessName: "CorteQS Platform" },
    { id: 2, title: "Ücretsiz AI Twin Denemesi", code: "AITWIN1", expires: "15 Nis 2026", type: "free" as const, businessName: "CorteQS Platform" },
    { id: 3, title: "Dernek Etkinliği %10", code: "ETKINLIK10", expires: "30 Nis 2026", type: "discount" as const, businessName: "Almanya Türk Toplumu" },
    { id: 4, title: "Hoşgeldin İndirimi %15", code: "HOSGELDIN15", expires: "30 Nis 2026", type: "discount" as const, businessName: "Turkish Döner GmbH" },
    { id: 5, title: "Hediye Baklava", code: "TATLI1", expires: "15 Mar 2026", type: "free" as const, businessName: "İstanbul Baklava House" },
    { id: 6, title: "HSBC Diaspora %5 Döviz", code: "HSBC5", expires: "30 Haz 2026", type: "discount" as const, businessName: "HSBC Türkiye" },
    { id: 7, title: "THY 500 Mil Hediye", code: "THY500", expires: "31 May 2026", type: "free" as const, businessName: "Türk Hava Yolları" },
    { id: 8, title: "Vodafone Roaming %50", code: "VDFROAM50", expires: "30 Nis 2026", type: "discount" as const, businessName: "Vodafone Türk Hattı" },
    { id: 9, title: "Turkish Market %10 Alışveriş", code: "MARKET10", expires: "30 Nis 2026", type: "discount" as const, businessName: "Turkish Market Europe" },
  ];

  const [selectedCouponForScan, setSelectedCouponForScan] = useState<number | null>(null);
  const [showScanner, setShowScanner] = useState(false);

  const notifications = [
    { id: 1, from: "Ayşe Kara", type: "follow", message: "Yeni etkinlik oluşturdu: Yatırım Webinarı 2026", time: "1 saat önce" },
    { id: 2, from: "Almanya Türk Toplumu", type: "follow", message: "Networking akşam yemeği düzenliyor — 18 Mar", time: "3 saat önce" },
    { id: 3, from: "Zeynep Arslan", type: "follow", message: "Dubai Şirket Kurma Workshop'u yayınladı", time: "5 saat önce" },
  ];

  const calendarEvents = [
    { id: 1, title: "Ayşe Kara - Yatırım Webinarı", date: "15 Mar", time: "20:00", type: "online" as const },
    { id: 2, title: "ATT Networking Yemeği", date: "08 Mar", time: "19:00", type: "yüz yüze" as const },
    { id: 3, title: "Can Özdemir - Danışmanlık", date: "20 Mar", time: "14:00", type: "online" as const },
  ];

  const turkeyDates = [
    { id: 100, title: "🇹🇷 MTV 1. Taksit Son Gün", date: "31 Oca", time: "—", type: "hatırlatma" as const },
    { id: 101, title: "🇹🇷 Gelir Vergisi Beyannamesi", date: "31 Mar", time: "—", type: "hatırlatma" as const },
    { id: 105, title: "🇹🇷 23 Nisan Ulusal Egemenlik", date: "23 Nis", time: "—", type: "resmi tatil" as const },
  ];

  const germanyDates = [
    { id: 200, title: "🇩🇪 Einkommensteuer Beyanname", date: "31 Tem", time: "—", type: "hatırlatma" as const },
    { id: 203, title: "🇩🇪 Tag der Arbeit", date: "01 May", time: "—", type: "resmi tatil" as const },
  ];

  const [calendarFilter, setCalendarFilter] = useState<"all" | "events" | "turkey" | "germany">("all");

  const allCalendarItems = [...calendarEvents, ...turkeyDates, ...germanyDates];
  const filteredCalendar = calendarFilter === "all"
    ? allCalendarItems
    : calendarFilter === "events" ? calendarEvents
    : calendarFilter === "turkey" ? turkeyDates : germanyDates;

  return (
    <>
      {/* Profile header */}
      <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl shrink-0">
            {user.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
              {isJobSeeking && (
                <Badge className="bg-turquoise/15 text-turquoise border-turquoise/30 gap-1">
                  <Briefcase className="h-3 w-3" /> İş Arıyorum
                </Badge>
              )}
              {profileVisible ? (
                <Badge variant="outline" className="gap-1 text-xs"><Eye className="h-3 w-3" /> Profil Açık</Badge>
              ) : (
                <Badge variant="outline" className="gap-1 text-xs text-muted-foreground"><EyeOff className="h-3 w-3" /> Profil Gizli</Badge>
              )}
            </div>
            <p className="text-muted-foreground">{user.title} · {user.email}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" /> {user.city}, {user.country}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              {cvUploaded && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" /> CV yüklendi
                </span>
              )}
            </div>
          </div>
          <div className="bg-turquoise/10 rounded-xl p-4 text-center shrink-0 min-w-[140px]">
            <Wallet className="h-5 w-5 text-turquoise mx-auto mb-1" />
            <p className="text-2xl font-bold text-foreground">€{user.balance.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">Cüzdan Bakiyesi</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="wallet" className="w-full">
        <TabsList className="bg-card border border-border w-full justify-start overflow-x-auto flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="wallet" className="gap-1.5"><Wallet className="h-4 w-4" /> Cüzdan</TabsTrigger>
          <TabsTrigger value="calendar" className="gap-1.5"><Calendar className="h-4 w-4" /> Takvim</TabsTrigger>
          <TabsTrigger value="coupons" className="gap-1.5"><Tag className="h-4 w-4" /> Kuponlar</TabsTrigger>
          <TabsTrigger value="following" className="gap-1.5"><Users className="h-4 w-4" /> Takip</TabsTrigger>
          <TabsTrigger value="notifications" className="gap-1.5"><Bell className="h-4 w-4" /> Bildirimler</TabsTrigger>
          <TabsTrigger value="settings" className="gap-1.5"><Settings className="h-4 w-4" /> Ayarlar</TabsTrigger>
        </TabsList>

        {/* WALLET */}
        <TabsContent value="wallet" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Wallet className="h-5 w-5 text-turquoise" /> Bakiye
              </h2>
              <p className="text-4xl font-bold text-foreground mb-1">€{user.balance.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mb-6">Mevcut bakiyeniz</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[25, 50, 100].map((amount) => (
                  <Button key={amount} variant="outline" className="font-bold">€{amount}</Button>
                ))}
              </div>
              <Button className="w-full gap-2 bg-turquoise hover:bg-turquoise-light text-primary-foreground">
                <Plus className="h-4 w-4" /> Para Yükle
              </Button>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" /> Son İşlemler
              </h2>
              <div className="space-y-3">
                {[
                  { label: "AI Twin Seans - Ayşe Kara", amount: -15, date: "24 Şub" },
                  { label: "Para Yükleme", amount: 100, date: "20 Şub" },
                  { label: "Etkinlik Bileti - ATT", amount: -25, date: "18 Şub" },
                  { label: "Danışmanlık - Can Özdemir", amount: -45, date: "15 Şub" },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{tx.label}</p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                    <span className={`font-bold text-sm ${tx.amount > 0 ? "text-success" : "text-foreground"}`}>
                      {tx.amount > 0 ? "+" : ""}€{Math.abs(tx.amount)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* CALENDAR */}
        <TabsContent value="calendar" className="mt-6">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Takvimim
              </h2>
              <div className="flex flex-wrap gap-2">
                {([
                  { key: "all" as const, label: "Tümü" },
                  { key: "events" as const, label: "Etkinlikler" },
                  { key: "turkey" as const, label: "🇹🇷 Türkiye" },
                  { key: "germany" as const, label: "🇩🇪 Almanya" },
                ]).map((f) => (
                  <Button
                    key={f.key}
                    variant={calendarFilter === f.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCalendarFilter(f.key)}
                    className="text-xs"
                  >
                    {f.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {filteredCalendar.map((evt) => {
                const typeColors: Record<string, string> = {
                  online: "bg-turquoise/10 text-turquoise",
                  "yüz yüze": "bg-primary/10 text-primary",
                  hatırlatma: "bg-gold/10 text-gold",
                  "resmi tatil": "bg-destructive/10 text-destructive",
                };
                return (
                  <div key={evt.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="text-center shrink-0 w-14">
                      <div className="text-xl font-bold text-primary">{evt.date.split(" ")[0]}</div>
                      <div className="text-xs text-muted-foreground">{evt.date.split(" ")[1]}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{evt.title}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        {evt.time !== "—" && <><Clock className="h-3 w-3" /> {evt.time} · </>}
                        <span className={`px-2 py-0.5 rounded-full text-xs ${typeColors[evt.type] || "bg-muted text-muted-foreground"}`}>
                          {evt.type}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* COUPONS */}
        <TabsContent value="coupons" className="mt-6">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" /> Kuponlarım & İndirimlerim
              </h2>
              <Button
                variant={showScanner ? "default" : "outline"}
                size="sm"
                className="gap-1.5"
                onClick={() => { setShowScanner(!showScanner); setSelectedCouponForScan(null); }}
              >
                <ScanLine className="h-4 w-4" /> {showScanner ? "Listeye Dön" : "Kupon Kullan"}
              </Button>
            </div>

            {showScanner ? (
              <div className="space-y-6">
                {!selectedCouponForScan ? (
                  <>
                    <p className="text-sm text-muted-foreground text-center mb-4">Kullanmak istediğiniz kuponu seçin:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {coupons.map((coupon) => (
                        <button
                          key={coupon.id}
                          onClick={() => setSelectedCouponForScan(coupon.id)}
                          className="text-left border border-border rounded-xl p-4 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                        >
                          <h3 className="font-bold text-foreground text-sm">{coupon.title}</h3>
                          <p className="text-xs text-muted-foreground">{coupon.businessName}</p>
                          <code className="text-xs font-bold text-primary mt-1 block">{coupon.code}</code>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      İşletmedeki okuyucuya gösterin:
                    </p>
                    <div className="bg-muted rounded-2xl p-6 mb-4">
                      <QrCode className="h-32 w-32 text-foreground mx-auto" />
                      <p className="text-center font-bold text-foreground mt-3">
                        {coupons.find(c => c.id === selectedCouponForScan)?.code}
                      </p>
                      <p className="text-center text-xs text-muted-foreground mt-1">
                        {coupons.find(c => c.id === selectedCouponForScan)?.businessName}
                      </p>
                    </div>
                    <QRScannerMock couponCode={coupons.find(c => c.id === selectedCouponForScan)?.code} />
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => setSelectedCouponForScan(null)}
                    >
                      Başka Kupon Seç
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {coupons.map((coupon) => (
                  <div key={coupon.id} className="relative border border-dashed border-primary/30 rounded-xl p-5 bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${coupon.type === "free" ? "bg-turquoise/10 text-turquoise" : "bg-gold/10 text-gold"}`}>
                        {coupon.type === "free" ? "Ücretsiz" : "İndirim"}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{coupon.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{coupon.businessName}</p>
                    <p className="text-xs text-muted-foreground mb-3">Son: {coupon.expires}</p>
                    <div className="bg-card rounded-lg px-3 py-2 text-center border border-border">
                      <code className="text-sm font-bold text-primary tracking-wider">{coupon.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        {/* FOLLOWING */}
        <TabsContent value="following" className="mt-6 space-y-6">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-gold" /> Takip Ettiğim Danışmanlar
            </h2>
            <div className="space-y-3">
              {followedConsultants.map((c) => (
                <Link to={`/consultant/${c.id}`} key={c.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <img src={c.photo} alt={c.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.role} · {c.city}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button variant="default" size="sm" className="gap-1 text-xs"><Bot className="h-3 w-3" /> AI Twin</Button>
                    <Button variant="outline" size="sm" className="gap-1 text-xs"><MessageSquare className="h-3 w-3" /></Button>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-turquoise" /> Takip Ettiğim Dernekler
            </h2>
            <div className="space-y-3">
              {followedAssociations.map((a) => (
                <Link to={`/association/${a.id}`} key={a.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground font-bold shrink-0">{a.logo}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{a.name}</h3>
                    <p className="text-sm text-muted-foreground">{a.type} · {a.city}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* NOTIFICATIONS */}
        <TabsContent value="notifications" className="mt-6">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" /> Bildirimler
            </h2>
            <div className="space-y-3">
              {notifications.map((n) => (
                <div key={n.id} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${n.type === "follow" ? "bg-gold/10" : n.type === "event" ? "bg-turquoise/10" : "bg-primary/10"}`}>
                    {n.type === "follow" ? <UserPlus className="h-4 w-4 text-gold" /> : n.type === "event" ? <Calendar className="h-4 w-4 text-turquoise" /> : <MessageSquare className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground"><span className="font-semibold">{n.from}</span></p>
                    <p className="text-sm text-muted-foreground">{n.message}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* SETTINGS */}
        <TabsContent value="settings" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" /> Profil Ayarları
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">İş Arıyorum Badge'i</p>
                    <p className="text-sm text-muted-foreground">Profilinizde "İş Arıyorum" etiketi görünsün</p>
                  </div>
                  <Switch checked={isJobSeeking} onCheckedChange={setIsJobSeeking} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Profil Görünürlüğü</p>
                    <p className="text-sm text-muted-foreground">Diğer üyeler profilinizi görebilsin</p>
                  </div>
                  <Switch checked={profileVisible} onCheckedChange={setProfileVisible} />
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-primary" /> Kariyer Bilgileri
              </h2>
              <div className="space-y-4">
                <div>
                  <Label>LinkedIn Profili</Label>
                  <Input value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="https://linkedin.com/in/kullaniciadi" />
                </div>
                <div>
                  <Label>CV / Özgeçmiş</Label>
                  <div className="mt-2">
                    {cvUploaded ? (
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">emre_aydin_cv.pdf</p>
                          <p className="text-xs text-muted-foreground">Yüklendi · 2.3 MB</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setCvUploaded(false)}>Kaldır</Button>
                      </div>
                    ) : (
                      <Button variant="outline" className="w-full gap-2" onClick={() => setCvUploaded(true)}>
                        <FileText className="h-4 w-4" /> CV Yükle (PDF)
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProfileIndividual;
