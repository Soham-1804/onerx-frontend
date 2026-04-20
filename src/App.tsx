import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import RxIntelligence from "./pages/RxIntelligence";
import RxManager from "./pages/RxManager";
import RxSuite from "./pages/RxSuite";
import RxIncident from "./pages/RxIncident";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login.tsx";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog.jsx";
import Docs from "./pages/Docs";
import Careers from "./pages/Careers.tsx";
import Insights from "./pages/Insights.tsx";
import Documentation from "./pages/Documentation.tsx";
import Press from "./pages/Press.tsx";
import Contact from "./pages/Contact.tsx";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rx-intelligence" element={<RxIntelligence />} />
          <Route path="/rx-manager" element={<RxManager />} />
          <Route path="/rx-suite" element={<RxSuite />} />
          <Route path="/rx-incident" element={<RxIncident />} />
           <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/docs" element={<Docs/>}/>
            <Route path="/careers" element={<Careers/>}/>
            <Route path="/insights" element={<Insights/>}/>
            <Route path="/documentation" element={<Documentation/>}/>
            <Route path="/press" element={<Press/>}/>
            <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
