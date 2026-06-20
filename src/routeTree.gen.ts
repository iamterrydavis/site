// AUTO-GENERATED MANUAL ROUTE TREE (no CLI required)

import { createRootRoute } from "@tanstack/react-router";
import { createRoute } from "@tanstack/react-router";

import { Route as RootRoute } from "./routes/__root";
import { Route as IndexRoute } from "./routes/index";
import { Route as PricingRoute } from "./routes/pricing";
import { Route as FAQRoute } from "./routes/faq";
import { Route as ContactRoute } from "./routes/contact";
import { Route as SitemapRoute } from "./routes/sitemap[.]xml";

// Root
const rootRoute = createRootRoute({
  component: RootRoute.options.component,
});

// Pages
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexRoute.options.component,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingRoute.options.component,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQRoute.options.component,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactRoute.options.component,
});

// XML route (special file route)
const sitemapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sitemap.xml",
  component: SitemapRoute.options.component,
});

// Route tree export (THIS is what router.tsx expects)
export const routeTree = rootRoute.addChildren([
  indexRoute,
  pricingRoute,
  faqRoute,
  contactRoute,
  sitemapRoute,
]);
