import { siteConfig } from "@/config";
import { Icon } from "@/components/ui";

export function FloatingActions() {
  return (
    <>
      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-[#052e16] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300"
        href={siteConfig.contact.whatsappUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon name="chat" className="text-xl sm:text-2xl" />
        <span className="hidden sm:inline font-headline-sm text-xs font-bold uppercase tracking-wider">
          Chat on WhatsApp
        </span>
      </a>

      <div className="fixed bottom-5 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col items-end gap-3">
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-surface-container-high/90 backdrop-blur-md border border-outline-variant px-3 py-1.5 rounded-full shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary-fixed-dim">
              Live Consultation Available
            </span>
          </div>
          <a
            aria-label="Open live consultation"
            href="#quote"
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-container-high hover:bg-surface-container-highest border border-primary-container/40 hover:border-primary-container text-primary-fixed-dim shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8),0_0_16px_-2px_rgba(69,223,166,0.2)] transition-all duration-300"
          >
            <Icon name="chat" className="text-2xl" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed-dim opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-container" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
