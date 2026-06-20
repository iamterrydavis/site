import { SiBitcoin, SiEthereum, SiLitecoin, SiMonero, SiPaypal } from "react-icons/si";
import type { IconType } from "react-icons";

const payments: { name: string; Icon: IconType; color: string }[] = [
  { name: "Bitcoin", Icon: SiBitcoin, color: "#F7931A" },
  { name: "Ethereum", Icon: SiEthereum, color: "#8A92B2" },
  { name: "Litecoin", Icon: SiLitecoin, color: "#A6A9AA" },
  { name: "Monero", Icon: SiMonero, color: "#FF6600" },
  { name: "PayPal", Icon: SiPaypal, color: "#00457C" },
];

export function PaymentBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {payments.map((p) => (
        <div
          key={p.name}
          className="glass flex items-center gap-2.5 rounded-lg px-3.5 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--neon)]/30"
        >
          <p.Icon className="size-5" style={{ color: p.color }} />
          <span className="font-medium text-foreground/90">{p.name}</span>
        </div>
      ))}
    </div>
  );
}
