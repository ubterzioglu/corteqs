import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DiasporaProvider } from "@/contexts/DiasporaContext";
import Index from "./pages/Index";
import Consultants from "./pages/Consultants";
import ConsultantDetail from "./pages/ConsultantDetail";
import Associations from "./pages/Associations";
import AssociationDetail from "./pages/AssociationDetail";
import Businesses from "./pages/Businesses";
import BusinessDetail from "./pages/BusinessDetail";
import Profile from "./pages/Profile";
import WhatsAppGroups from "./pages/WhatsAppGroups";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import RadioSongRequest from "./pages/RadioSongRequest";
import MapSearch from "./pages/MapSearch";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DiasporaProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/consultant/:id" element={<ConsultantDetail />} />
            <Route path="/associations" element={<Associations />} />
            <Route path="/association/:id" element={<AssociationDetail />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/business/:id" element={<BusinessDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/whatsapp-groups" element={<WhatsAppGroups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/radio/:id/song-request" element={<RadioSongRequest />} />
            <Route path="/map" element={<MapSearch />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DiasporaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
