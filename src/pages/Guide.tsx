import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle, AlertTriangle, Info, FileText, GitCompare, ListTodo, Roadmap, Settings } from "lucide-react";

const categoryStatus = [
  { name: "Vizyon & Kapsam", status: "Tamam", progress: 100, count: "6/6" },
  { name: "Kullanıcı Rolleri", status: "Tamam", progress: 100, count: "6/6" },
  { name: "Arama & AI", status: "Kısmen", progress: 85, count: "6/7" },
  { name: "İçerik & Veri", status: "Geliştirilecek", progress: 28, count: "2/7" },
  { name: "UI/UX Tasarımı", status: "Tamam", progress: 100, count: "6/6" },
  { name: "Teknik Altyapı", status: "Değerlendirme Gerekli", progress: 37, count: "3/8" },
  { name: "Pazarlama & Lansman", status: "Tamam", progress: 100, count: "5/5" },
  { name: "Gelir Modelleri", status: "Tamam", progress: 100, count: "5/5" },
];

const comparisonData = [
  { feature: "Kullanıcı Rolleri (4 tip)", baDocu: true, ubtDocu: true, note: "Eşleşiyor" },
  { feature: "AI Arama Sistemi", baDocu: true, ubtDocu: true, note: "Eşleşiyor" },
  { feature: "Harita Entegrasyonu", baDocu: true, ubtDocu: true, note: "Eşleşiyor" },
  { feature: "İşletme Claim Sistemi", baDocu: false, ubtDocu: true, note: "UBT'de var" },
  { feature: "Moderasyon Sistemi", baDocu: false, ubtDocu: true, note: "UBT'de var" },
  { feature: "Doğrulama Rozetleri", baDocu: false, ubtDocu: true, note: "UBT'de var" },
  { feature: "KYC Doğrulama", baDocu: true, ubtDocu: false, note: "BA'da var" },
  { feature: "AI Twin Sistemi", baDocu: true, ubtDocu: false, note: "BA'da var" },
];

const missingFeatures = [
  { title: "Supabase Auth & Database", priority: "Kritik", category: "Backend" },
  { title: "Kullanıcı Rolleri Sistemi", priority: "Kritik", category: "Auth" },
  { title: "RLS Policies (Güvenlik)", priority: "Kritik", category: "Backend" },
  { title: "İşletme Claim Sistemi", priority: "Yüksek", category: "Feature" },
  { title: "Moderasyon Paneli", priority: "Yüksek", category: "Admin" },
  { title: "Storage (Fotoğraf)", priority: "Yüksek", category: "Backend" },
  { title: "Doğrulama Rozetleri", priority: "Orta", category: "Feature" },
  { title: "Edge Functions", priority: "Orta", category: "Backend" },
];

const roadmap = [
  { phase: "Sprint 1", date: "Mart 2026", status: "Tamamlandı", items: ["Frontend kurulumu", "UI/UX tasarımı", "Mock data implementasyonu"] },
  { phase: "Sprint 2", date: "Nisan 2026", status: "Devam Ediyor", items: ["Supabase kurulumu", "Auth entegrasyonu", "Profil yönetimi"] },
  { phase: "Sprint 3", date: "Mayıs 2026", status: "Bekliyor", items: ["Danışman/İşletme CRUD", "Etkinlik sistemi", "Arama & filtreleme"] },
  { phase: "Sprint 4", date: "Haziran 2026", status: "Bekliyor", items: ["Claim sistemi", "Moderasyon paneli", "Beta launch"] },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Tamam":
    case "Tamamlandı":
      return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">{status}</Badge>;
    case "Kısmen":
    case "Devam Ediyor":
      return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">{status}</Badge>;
    case "Geliştirilecek":
    case "Değerlendirme Gerekli":
    case "Bekliyor":
      return <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "Kritik":
      return <Badge className="bg-red-500/10 text-red-500">{priority}</Badge>;
    case "Yüksek":
      return <Badge className="bg-orange-500/10 text-orange-500">{priority}</Badge>;
    case "Orta":
      return <Badge className="bg-blue-500/10 text-blue-500">{priority}</Badge>;
    default:
      return <Badge variant="secondary">{priority}</Badge>;
  }
};

export default function Guide() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">CorteQS MVP Project Guide</h1>
          <p className="text-muted-foreground text-lg">Türk Diaspora Ağı - Proje Takip ve Geliştirme Rehberi</p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>MVP İlerleme</CardDescription>
              <CardTitle className="text-3xl text-yellow-500">65%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={65} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Tamamlanan</CardDescription>
              <CardTitle className="text-3xl text-green-500">41/55</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Madde tamamlandı</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Bekleyen</CardDescription>
              <CardTitle className="text-3xl text-red-500">14</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Madde kaldı</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Kritik Eksik</CardDescription>
              <CardTitle className="text-3xl text-red-500">6</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Acil çözüm gerekli</p>
            </CardContent>
          </Card>
        </div>

        {/* Alert */}
        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertTitle>Bilgi</AlertTitle>
          <AlertDescription>
            Bu rehber iki ayrı MVP dokümanının (ba_docu.md ve ubt_docu.md) karşılaştırmasını içerir. 
            Mevcut frontend React + Vite + TypeScript ile hazır. Backend için Supabase entegrasyonu bekleniyor.
          </AlertDescription>
        </Alert>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="overview" className="gap-2">
              <FileText className="h-4 w-4" /> Genel Bakış
            </TabsTrigger>
            <TabsTrigger value="comparison" className="gap-2">
              <GitCompare className="h-4 w-4" /> Karşılaştırma
            </TabsTrigger>
            <TabsTrigger value="missing" className="gap-2">
              <ListTodo className="h-4 w-4" /> Eksikler
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="gap-2">
              <Roadmap className="h-4 w-4" /> Yol Haritası
            </TabsTrigger>
            <TabsTrigger value="tech" className="gap-2">
              <Settings className="h-4 w-4" /> Teknik
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Proje Durumu</CardTitle>
                <CardDescription>Kategori bazlı tamamlanma oranları</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryStatus.map((cat) => (
                    <div key={cat.name} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{cat.name}</span>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(cat.status)}
                            <span className="text-sm text-muted-foreground w-12 text-right">{cat.count}</span>
                          </div>
                        </div>
                        <Progress value={cat.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comparison Tab */}
          <TabsContent value="comparison">
            <Card>
              <CardHeader>
                <CardTitle>Döküman Karşılaştırma</CardTitle>
                <CardDescription>BA Docu vs UBT Docu özellik karşılaştırması</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Özellik</th>
                        <th className="text-center py-3 px-4 font-medium">BA Docu</th>
                        <th className="text-center py-3 px-4 font-medium">UBT Docu</th>
                        <th className="text-left py-3 px-4 font-medium">Not</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((item, idx) => (
                        <tr key={idx} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-4">{item.feature}</td>
                          <td className="text-center py-3 px-4">
                            {item.baDocu ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3 px-4">
                            {item.ubtDocu ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Missing Tab */}
          <TabsContent value="missing">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-red-500/5">
                  <CardTitle className="flex items-center gap-2 text-red-500">
                    <AlertTriangle className="h-5 w-5" />
                    Backend Eksikleri
                  </CardTitle>
                  <CardDescription>Supabase entegrasyonu için gerekli</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {missingFeatures.filter(f => f.category === "Backend" || f.category === "Auth").map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="font-medium">{item.title}</span>
                        {getPriorityBadge(item.priority)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-orange-500/5">
                  <CardTitle className="flex items-center gap-2 text-orange-500">
                    <ListTodo className="h-5 w-5" />
                    Feature Eksikleri
                  </CardTitle>
                  <CardDescription>Kullanıcı deneyimi için gerekli</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {missingFeatures.filter(f => f.category === "Feature" || f.category === "Admin").map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="font-medium">{item.title}</span>
                        {getPriorityBadge(item.priority)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap">
            <div className="space-y-4">
              {roadmap.map((sprint, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{sprint.phase}</CardTitle>
                        <CardDescription>{sprint.date}</CardDescription>
                      </div>
                      {getStatusBadge(sprint.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {sprint.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tech Tab */}
          <TabsContent value="tech">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mevcut Stack</CardTitle>
                  <CardDescription>Frontend teknolojileri</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "TanStack Query", "Zod"].map((tech) => (
                      <Badge key={tech} variant="default" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eklenecek Stack</CardTitle>
                  <CardDescription>Backend ve servisler</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Supabase", "PostgreSQL", "Supabase Auth", "Supabase Storage", "Edge Functions", "RLS"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-muted-foreground border-t pt-8">
          <p>CorteQS MVP Project Guide • Son Güncelleme: Mart 2026</p>
          <p className="mt-2">
            <a href="/docu/guide.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Detaylı HTML Versiyonu
            </a>
            {" • "}
            <a href="https://github.com/ubterzioglu/corteqs" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
