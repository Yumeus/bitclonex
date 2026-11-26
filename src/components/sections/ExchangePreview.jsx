import { asks, bids } from "@/data";

export function ExchangePreview() {
  return (
    <div className="w-full rounded-xl bg-surface-container-low border border-outline-variant/60 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-3 lg:p-4 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-outline-variant/40">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-headline-sm text-headline-sm font-bold text-on-surface">
            <span className="text-primary-container">BTC</span>/USDT
            <span className="text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-code-md">
              Spot 10x
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-label-code-lg text-label-code-lg font-bold text-primary-container">
              $68,420.50
            </span>
            <span className="font-label-code-md text-label-code-md text-primary-container bg-primary-container/10 px-1.5 py-0.5 rounded">
              +4.32%
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 font-label-code-md text-label-code-md text-on-surface-variant">
          <div>
            <span className="text-outline">24h High:</span>{" "}
            <span className="text-on-surface">$69,140.00</span>
          </div>
          <div>
            <span className="text-outline">24h Low:</span>{" "}
            <span className="text-on-surface">$65,890.10</span>
          </div>
          <div>
            <span className="text-outline">24h Vol(BTC):</span>{" "}
            <span className="text-on-surface">42,912.45</span>
          </div>
          <div>
            <span className="text-outline">24h Turnover(USDT):</span>{" "}
            <span className="text-on-surface">$2.94B</span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-label-code-md text-label-code-md">
          <span className="px-2 py-1 rounded bg-primary-container/10 text-primary-fixed-dim">
            Engine: Online
          </span>
          <span className="px-2 py-1 rounded bg-surface-container text-outline">
            Latency: 0.38ms
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-3">
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-lg p-3 flex flex-col justify-between h-[260px] sm:h-[320px] lg:h-[360px]">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-on-surface-variant font-label-code-md pb-2 border-b border-outline-variant/30">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-primary-container font-semibold">Time</span>
              <span className="cursor-pointer hover:text-on-surface">15m</span>
              <span className="cursor-pointer text-on-surface bg-surface-container px-1.5 py-0.5 rounded">
                1H
              </span>
              <span className="cursor-pointer hover:text-on-surface">4H</span>
              <span className="cursor-pointer hover:text-on-surface">1D</span>
              <span className="hidden sm:inline text-outline">|</span>
              <span className="hidden sm:inline cursor-pointer hover:text-on-surface">
                Indicators (MA, EMA, RSI)
              </span>
            </div>
            <span className="text-primary-fixed-dim text-[11px] sm:text-xs">
              Depth Spread 0.01 USDT
            </span>
          </div>
          <div className="w-full flex-1 py-2 flex items-end">
            <svg
              className="w-full h-full text-primary-container"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 600 220"
            >
              <defs>
                <linearGradient id="chartGlow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#45dfa6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#45dfa6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0 180 L40 160 L80 175 L120 130 L160 145 L200 110 L240 120 L280 90 L320 105 L360 70 L400 85 L440 50 L480 65 L520 30 L560 45 L600 20 L600 220 L0 220 Z"
                fill="url(#chartGlow)"
              />
              <path
                d="M0 180 L40 160 L80 175 L120 130 L160 145 L200 110 L240 120 L280 90 L320 105 L360 70 L400 85 L440 50 L480 65 L520 30 L560 45 L600 20"
                stroke="#45dfa6"
                strokeWidth="2.5"
              />
              <line stroke="#242628" strokeDasharray="4 4" x1="0" x2="600" y1="50" y2="50" />
              <line stroke="#242628" strokeDasharray="4 4" x1="0" x2="600" y1="110" y2="110" />
              <line stroke="#242628" strokeDasharray="4 4" x1="0" x2="600" y1="170" y2="170" />
            </svg>
          </div>
          <div className="flex justify-between text-[10px] sm:text-xs text-outline font-label-code-md pt-2 border-t border-outline-variant/30">
            {["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "Current (Active)"].map(
              (t, idx) => (
                <span key={t} className={idx % 2 === 1 ? "hidden sm:inline" : undefined}>
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div className="lg:col-span-3 bg-surface-container-lowest rounded-lg p-3 font-label-code-md flex flex-col justify-between h-[360px]">
          <div className="flex justify-between text-xs text-outline pb-1 font-semibold">
            <span>Price (USDT)</span>
            <span>Size (BTC)</span>
            <span>Total</span>
          </div>
          <div className="flex flex-col gap-1 text-[11px]">
            {asks.map(([p, s, t]) => (
              <div
                key={p}
                className="flex justify-between text-error bg-error/5 px-1 py-0.5 rounded"
              >
                <span>{p}</span>
                <span>{s}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="py-1 px-2 rounded bg-surface-container flex items-center justify-between text-xs font-bold">
            <span className="text-primary-container">68,420.50</span>
            <span className="text-outline text-[10px]">Spread: 0.10</span>
          </div>
          <div className="flex flex-col gap-1 text-[11px]">
            {bids.map(([p, s, t]) => (
              <div
                key={p}
                className="flex justify-between text-primary-fixed-dim bg-primary-container/5 px-1 py-0.5 rounded"
              >
                <span>{p}</span>
                <span>{s}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-3 flex flex-col justify-between font-body-sm h-[360px]">
          <div className="flex items-center gap-1 bg-surface-container p-1 rounded text-xs font-label-code-md">
            <button className="flex-1 py-1 text-center bg-primary-container text-on-primary rounded font-bold">
              Buy
            </button>
            <button className="flex-1 py-1 text-center text-outline hover:text-on-surface">
              Sell
            </button>
          </div>
          <div className="flex justify-between text-[11px] text-outline pt-2 font-label-code-md">
            <span className="text-primary-container font-medium">Limit</span>
            <span>Market</span>
            <span>Stop-Limit</span>
          </div>
          <div className="flex flex-col gap-2 my-auto">
            <div className="bg-surface-container px-2 py-1.5 rounded">
              <span className="text-[10px] text-outline block">Price</span>
              <span className="font-label-code-md text-xs text-on-surface">68,420.50 USDT</span>
            </div>
            <div className="bg-surface-container px-2 py-1.5 rounded">
              <span className="text-[10px] text-outline block">Amount</span>
              <span className="font-label-code-md text-xs text-on-surface">0.5000 BTC</span>
            </div>
            <div className="flex justify-between text-[10px] text-outline">
              <span>Avail: 45,210.00 USDT</span>
              <span className="text-primary-container cursor-pointer">MAX</span>
            </div>
          </div>
          <button className="w-full py-2 bg-primary-container hover:bg-secondary-fixed text-on-primary font-headline-sm text-xs font-bold rounded shadow-[0_0_12px_rgba(69,223,166,0.25)] transition-all">
            Buy BTC
          </button>
        </div>
      </div>
    </div>
  );
}
