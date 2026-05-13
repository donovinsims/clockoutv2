import { useBooking } from "./BookingContext";

export function StickyMobileBar() {
  const { openBooking } = useBooking();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-background/95 backdrop-blur border-t border-border-strong px-4 pt-2.5 pb-[max(env(safe-area-inset-bottom),0.75rem)]">
      <p className="mono text-[10px] text-center text-muted-foreground mb-2">
        12+ local businesses · 20 min · no pitch · written report either way
      </p>
      <button
        onClick={openBooking}
        className="w-full bg-accent text-accent-foreground min-h-12 rounded mono text-sm font-semibold tracking-wide"
      >
        Get My Free Revenue Report →
      </button>
    </div>
  );
}
