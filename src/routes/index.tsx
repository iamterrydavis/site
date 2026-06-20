import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, ShieldCheck, BadgePercent, Clock, Star } from "lucide-react";
import { SiteLayout, DISCORD } from "@/components/site/SiteLayout";
import { StockBackground } from "@/components/site/StockBackground";
import { PaymentBadges } from "@/components/site/PaymentBadges";
import logo from "@/assets/swats-stock-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swat's Stock — Premium Robux Marketplace" },
      { name: "description", content: "Buy Robux at $2.50 per 1K. Instant delivery, trusted seller, crypto & PayPal accepted. Join the Discord." },
      { property: "og:title", content: "Swat's Stock — Premium Robux Marketplace" },
      { property: "og:description", content: "Instant Robux delivery at the best rates. Crypto & PayPal." },
    ],
  }),
  component: Index,
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="grid min-h-screen place-items-center bg-background p-6 text-center">
        <div>
          <h1 className="text-xl font-semibold">Something went wrong</h1>
          <button onClick={reset} className="mt-4 rounded-md bg-[var(--neon)] px-4 py-2 text-sm font-semibold text-black">Try again</button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background p-6 text-center">
      <p className="text-muted-foreground">Not found.</p>
    </div>
  ),
});

const features = [
  { icon: Zap, title: "Instant Delivery", desc: "Robux drops in your account within minutes of payment confirmation." },
  { icon: ShieldCheck, title: "Trusted Seller", desc: "Hundreds of completed orders. Reputation backed by our community." },
  { icon: BadgePercent, title: "Best Rates", desc: "Flat $2.50 per 1,000 Robux. No hidden fees, no inflated pricing." },
  { icon: Clock, title: "24/7 Support", desc: "Reach us anytime on Discord — real humans, fast replies." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <StockBackground />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:pt-36">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="animate-float-up mb-8 flex flex-wrap items-center justify-center gap-2">
              <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon)]" />
                Live stock — instant delivery
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--neon)]/30 bg-[var(--neon)]/10 px-3.5 py-1.5 text-xs font-semibold text-neon">
                <Star className="size-3 fill-current" />
                2,000+ Vouches
              </div>
            </div>
            <img
              src={logo}
              alt="Swat's Stock logo"
              className="animate-float-up mb-6 h-24 w-auto sm:h-28"
            />
            <h1 className="animate-float-up text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The Premium <br />
              <span className="text-neon text-glow">Robux Marketplace</span>
            </h1>
            <p className="animate-float-up mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
              Flat-rate Robux at <span className="text-foreground font-semibold">$2.50 / 1,000</span>.
              Crypto and PayPal accepted. Orders fulfilled directly through our Discord.
            </p>
            <div className="animate-float-up mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a href={DISCORD} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg group">
                Join Discord to Buy
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link to="/pricing" className="btn btn-secondary btn-lg">
                See Pricing
              </Link>
            </div>

            <div className="animate-float-up mt-14 grid w-full grid-cols-3 gap-3 sm:max-w-md">
              {[
                { v: "$2.50", l: "Per 1K" },
                { v: "2K+", l: "Vouches" },
                { v: "<5m", l: "Delivery" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-neon">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Accepted Payments
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Pay your way</h2>
        </div>
        <div className="mt-8">
          <PaymentBadges />
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Why Swat's Stock</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for serious buyers</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--neon)]/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--neon)]/10 text-neon ring-1 ring-[var(--neon)]/30">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="absolute inset-0 -z-10 opacity-60 bg-grid" />
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to stock up?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Hop into the Discord, drop your order, get your Robux. It's that simple.
          </p>
          <a href={DISCORD} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg mt-8">
            Join Discord <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
