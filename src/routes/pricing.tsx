import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { SiteLayout, DISCORD } from "@/components/site/SiteLayout";
import { PaymentBadges } from "@/components/site/PaymentBadges";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Swat's Stock" },
      { name: "description", content: "Flat $2.50 per 1,000 Robux. Crypto and PayPal accepted. Custom order sizes available." },
      { property: "og:title", content: "Pricing — Swat's Stock" },
      { property: "og:description", content: "Flat $2.50 per 1,000 Robux. Custom orders available." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  { amount: 1000, price: 2.5, label: "Starter" },
  { amount: 5000, price: 12.5, label: "Popular", featured: true },
  { amount: 10000, price: 25, label: "Pro" },
];

const perks = [
  "Instant Discord checkout",
  "Crypto & PayPal accepted",
  "Live order tracking",
  "Trusted seller — verified history",
];

function Pricing() {
  return (
    <SiteLayout>
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Pricing</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            One flat rate. <span className="text-neon">$2.50 / 1K.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            No tiered scams. No inflated fees. Pay only what the Robux costs — and get it instantly.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.amount}
              className={`glass relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 ${
                t.featured ? "ring-2 ring-[var(--neon)]/60 shadow-[0_0_40px_rgba(57,255,20,0.25)]" : ""
              }`}
            >
              {t.featured && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--neon)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon ring-1 ring-[var(--neon)]/40">
                  <Sparkles className="size-3" /> Popular
                </div>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.label}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight text-neon">
                  {t.amount.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">Robux</span>
              </div>
              <div className="mt-1 text-2xl font-bold">${t.price.toFixed(2)}</div>
              <ul className="mt-6 space-y-2 text-sm">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 text-neon" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={DISCORD}
                target="_blank"
                rel="noreferrer"
                className={`btn mt-7 w-full ${t.featured ? "btn-primary" : "btn-secondary"}`}
              >
                Order on Discord
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl p-6 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold">Custom order?</h3>
              <p className="text-sm text-muted-foreground">Need 25K, 100K, or something specific? DM us on Discord.</p>
            </div>
            <a href={DISCORD} target="_blank" rel="noreferrer" className="btn btn-primary">
              Request a Quote
            </a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Accepted Payments</p>
          <div className="mt-6">
            <PaymentBadges />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
