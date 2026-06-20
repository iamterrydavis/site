import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/swats-stock-logo.png";

const DISCORD = "https://discord.gg/UYV6YJCeet";
const TIKTOK = "https://www.tiktok.com/@swatsstock";

const nav = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const { location } = useRouterState();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Swat's Stock" className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "text-neon"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <a href={DISCORD} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Join Discord
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="relative mt-24 border-t border-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Swat's Stock" className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Premium Robux marketplace. Instant delivery, best rates, trusted seller.
              Built for serious buyers.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-foreground/80 hover:text-neon">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={DISCORD} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-neon">
                  Discord
                </a>
              </li>
              <li>
                <a href={TIKTOK} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-neon">
                  TikTok @swatsstock
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-neon">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
            <p>© {new Date().getFullYear()} Swat's Stock. All rights reserved.</p>
            <p>Not affiliated with Roblox Corporation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { DISCORD, TIKTOK };
