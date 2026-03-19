import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">CorteQS</span>
            </div>
            <p className="text-sm text-secondary-foreground/60 font-body">
              Türk diasporasını birleştiren global platform.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60 font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Danışmanlar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dernekler</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Etkinlikler</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Twin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Kurumsal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60 font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Yasal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60 font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kullanım Şartları</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">KVKK</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/40 font-body">
          © 2026 CorteQS. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
