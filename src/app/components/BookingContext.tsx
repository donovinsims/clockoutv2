import { createContext, useContext, useState, ReactNode } from "react";

type Ctx = { open: boolean; openBooking: () => void; closeBooking: () => void };
const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <BookingCtx.Provider value={{ open, openBooking: () => setOpen(true), closeBooking: () => setOpen(false) }}>
      {children}
    </BookingCtx.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be inside BookingProvider");
  return ctx;
}
