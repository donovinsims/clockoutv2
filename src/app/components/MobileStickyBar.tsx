import { CalButton } from "./CalButton";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[var(--co-bg)]/95 backdrop-blur-md border-t border-[var(--co-line)] px-4 py-3 pb-[max(env(safe-area-inset-bottom),0.75rem)]">
      <CalButton className="w-full" showArrow>
        Book Free Assessment
      </CalButton>
    </div>
  );
}
