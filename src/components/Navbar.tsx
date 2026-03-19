import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, User, Building2, Users, ShieldCheck, UserCircle, Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDiaspora, diasporaOptions } from "@/contexts/DiasporaContext";

const userTypes = [
  { label: "Bireysel Kullanıcı", icon: UserCircle, path: "/profile?type=individual" },
  { label: "Danışman", icon: Briefcase, path: "/profile?type=consultant" },
  { label: "İşletme", icon: Building2, path: "/profile?type=business" },
  { label: "Kuruluşlar", icon: Users, path: "/profile?type=association" },
  { label: "Admin", icon: ShieldCheck, path: "/profile?type=admin" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { diaspora, setDiaspora, t, currentOption } = useDiaspora();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-foreground tracking-tight">
                Corte<span className="text-gradient-primary">QS</span>
              </span>
            </Link>

            {/* Diaspora Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5 text-base px-2">
                  <span className="text-lg">{currentOption.flag}</span>
                  <span className="hidden sm:inline text-xs text-muted-foreground">{currentOption.nativeLabel}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel className="text-xs text-muted-foreground">Diaspora Seçin</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {diasporaOptions.map((opt) => (
                  <DropdownMenuItem
                    key={opt.key}
                    className={`gap-2 cursor-pointer ${diaspora === opt.key ? "bg-accent/50 font-semibold" : ""}`}
                    onClick={() => setDiaspora(opt.key)}
                  >
                    <span className="text-lg">{opt.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-sm">{opt.label}</span>
                      <span className="text-xs text-muted-foreground">{opt.nativeLabel}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/consultants" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.consultants}</Link>
            <Link to="/associations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.organizations}</Link>
            <Link to="/businesses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.businesses}</Link>
            <Link to="/whatsapp-groups" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.groups}</Link>
            <Link to="/events" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.events}</Link>
            <Link to="/map" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"><MapPin className="h-3 w-3" />{t.nav.map}</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <User className="h-4 w-4" /> {t.nav.profile}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel className="text-xs text-muted-foreground">Hesap Türü Seçin</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userTypes.map((type) => (
                  <Link key={type.label} to={type.path}>
                    <DropdownMenuItem className="gap-2 cursor-pointer">
                      <type.icon className="h-4 w-4 text-primary" />
                      {type.label}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm">{t.nav.login}</Button>
            <Link to="/pricing"><Button variant="default" size="sm">{t.nav.signup}</Button></Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {/* Mobile Diaspora Selector */}
              <div className="flex gap-2 mb-2">
                {diasporaOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setDiaspora(opt.key)}
                    className={`text-xl p-1.5 rounded-lg transition-all ${diaspora === opt.key ? "bg-primary/15 ring-2 ring-primary/30 scale-110" : "hover:bg-muted"}`}
                  >
                    {opt.flag}
                  </button>
                ))}
              </div>
              <Link to="/consultants" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{t.nav.consultants}</Link>
              <Link to="/associations" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{t.nav.organizations}</Link>
              <Link to="/businesses" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{t.nav.businesses}</Link>
              <Link to="/whatsapp-groups" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{t.nav.groups}</Link>
              <Link to="/events" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{t.nav.events}</Link>
              <Link to="/map" className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1" onClick={() => setIsOpen(false)}><MapPin className="h-3 w-3" />{t.nav.map}</Link>
              <div className="border-t border-border pt-3 mt-1">
                <p className="text-xs text-muted-foreground mb-2 font-medium">{t.nav.profile}</p>
                {userTypes.map((type) => (
                  <Link
                    key={type.label}
                    to={type.path}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-1.5"
                    onClick={() => setIsOpen(false)}
                  >
                    <type.icon className="h-4 w-4 text-primary" />
                    {type.label}
                  </Link>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="ghost" size="sm" className="flex-1">{t.nav.login}</Button>
                <Link to="/pricing" onClick={() => setIsOpen(false)}><Button variant="default" size="sm" className="flex-1">{t.nav.signup}</Button></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
