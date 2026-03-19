import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileIndividual from "@/components/profiles/ProfileIndividual";
import ProfileBusiness from "@/components/profiles/ProfileBusiness";
import ProfileAssociation from "@/components/profiles/ProfileAssociation";
import ProfileConsultant from "@/components/profiles/ProfileConsultant";
import ProfileAdmin from "@/components/profiles/ProfileAdmin";

const Profile = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "individual";

  const renderProfile = () => {
    switch (type) {
      case "business":
        return <ProfileBusiness />;
      case "association":
        return <ProfileAssociation />;
      case "consultant":
        return <ProfileConsultant />;
      case "admin":
        return <ProfileAdmin />;
      default:
        return <ProfileIndividual />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Ana Sayfa
          </Link>
          {renderProfile()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
