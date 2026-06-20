import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Music2 } from "lucide-react";
import { SiteLayout, DISCORD, TIKTOK } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Swat's Stock" },
      { name: "description", content: "Get in touch with Swat's Stock through Discord or TikTok. 24/7 support for all Robux orders." },
      { property: "og:title", content: "Contact — Swat's Stock" },
      { property: "og:description", content: "Reach Swat's Stock on Discord or TikTok." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    icon: MessageCircle,
    name: "Discord",
    handle: "discord.gg/UYV6YJCeet",
    desc: "Primary channel. Place orders, ask questions, get support 24/7.",
    href: DISCORD,
    cta: "Join Server",
  },
  {
    icon: Music2,
    name: "TikTok",
    desc: "Follow for drops, reviews, and live stock updates.",
    href: TIKTOK,
    cta: "Follow",
  },
];

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Contact</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Talk to us directly.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We don't hide behind email forms. Reach us where we actually live.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="glass group flex flex-col rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-[var(--neon)]/40"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--neon)]/10 text-neon ring-1 ring-[var(--neon)]/30">
                <c.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-neon">{c.handle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <span className="btn btn-secondary btn-sm mt-6 w-fit group-hover:border-[var(--neon)]/40 group-hover:text-neon">
                {c.cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="glass mx-auto mt-10 max-w-2xl rounded-2xl p-6 text-center">
          <h3 className="text-base font-semibold">Refund policy</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Refunds are available on a case-by-case basis when we cannot fulfill your order
            or there's a verified issue on our end. Open a Discord ticket and we'll handle it.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
