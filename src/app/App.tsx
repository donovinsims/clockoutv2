import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { ExitIntentModal } from "./components/ExitIntentModal";
import Home from "./pages/Home";
import Agent from "./pages/Agent";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LocationRockford from "./pages/LocationRockford";
import LocationRoscoe from "./pages/LocationRoscoe";

function ScrollAndHashHandler() {
  const loc = useLocation();
  useEffect(() => {
    if (loc.hash) {
      const id = loc.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [loc.pathname, loc.hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollAndHashHandler />
      <div className="min-h-screen flex flex-col bg-background text-foreground pb-20 md:pb-0">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agent" element={<Agent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/rockford-il" element={<LocationRockford />} />
            <Route path="/roscoe-il" element={<LocationRoscoe />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <StickyMobileBar />
      <ExitIntentModal />
    </BrowserRouter>
  );
}
