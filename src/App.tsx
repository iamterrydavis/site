import { SiteLayout } from "@/components/site/SiteLayout";
import Index from "@/routes/index";
import Pricing from "@/routes/pricing";
import FAQ from "@/routes/faq";
import Contact from "@/routes/contact";

export default function App() {
  return (
    <SiteLayout>
      <Index />
      <Pricing />
      <FAQ />
      <Contact />
    </SiteLayout>
  );
}
