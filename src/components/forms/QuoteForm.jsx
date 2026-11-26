"use client";

const inputCls =
  "w-full bg-surface-container-lowest border border-outline-variant rounded p-2.5 text-on-surface font-body-sm focus:border-primary-container focus:outline-none";
const labelCls = "block text-xs font-label-code-md text-outline mb-1";

export function QuoteForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry received. A Bitclonex Solution Architect will contact you shortly.");
  };

  return (
    <div className="lg:col-span-6 bg-surface-container p-space-lg rounded-xl border border-outline-variant/60 shadow-2xl">
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
        Request Platform Demo &amp; Proposal
      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
        Complete the form below to receive immediate access to our interactive demo and pricing framework.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls} htmlFor="quote-full-name">
              Your Full Name *
            </label>
            <input
              id="quote-full-name"
              name="fullName"
              autoComplete="name"
              className={inputCls}
              placeholder="e.g. Alexander Vance"
              required
              type="text"
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="quote-email">
              Corporate Email *
            </label>
            <input
              id="quote-email"
              name="email"
              autoComplete="email"
              className={inputCls}
              placeholder="alex@institution.com"
              required
              type="email"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls} htmlFor="quote-handle">
              Telegram / WhatsApp Handle *
            </label>
            <input
              id="quote-handle"
              name="handle"
              className={inputCls}
              placeholder="@vance_crypto or +1..."
              required
              type="text"
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="quote-timeline">
              Estimated Launch Timeline
            </label>
            <select id="quote-timeline" name="timeline" className={inputCls}>
              <option>Within 2–4 Weeks (Immediate)</option>
              <option>1–3 Months</option>
              <option>Exploring / Feasibility Stage</option>
            </select>
          </div>
        </div>
        <div>
          <label className={labelCls} htmlFor="quote-requirements">
            Scope &amp; Requirements (Modules, Blockchains, Licenses)
          </label>
          <textarea
            id="quote-requirements"
            name="requirements"
            className={inputCls}
            placeholder="Tell us about required trading modules (Spot, Futures, P2P), regulatory jurisdiction, and estimated initial liquidity needs..."
            rows={3}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            className="flex-1 py-3 px-6 bg-primary-container hover:bg-secondary-fixed text-on-primary font-headline-sm text-sm font-bold rounded shadow-[0_0_20px_rgba(69,223,166,0.3)] transition-all"
            type="submit"
          >
            Get a Custom Quote
          </button>
          <button
            className="py-3 px-6 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-sm font-semibold rounded border border-outline-variant transition-all"
            onClick={() => alert("Demo access link dispatched to your registered handle.")}
            type="button"
          >
            Request a Free Demo
          </button>
        </div>
      </form>
    </div>
  );
}
