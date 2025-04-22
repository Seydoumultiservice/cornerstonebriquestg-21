import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import OrderTracking from "./pages/OrderTracking";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Reviews from "./pages/Reviews";
import Login from "./components/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/boutique/:category" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/suivi" element={<OrderTracking />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/mon-compte" element={<Account />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/avis" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
