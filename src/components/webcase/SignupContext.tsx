import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { getCourseDates, type CourseDates } from "@/lib/course-dates";

const DAILY_CAP = 70;

const ACTIVITY_POOL = [
  "Andreea din Iași",
  "Mihai din Chișinău",
  "Alexandra din Cluj",
  "Ion din Bălți",
  "Cristina din Timișoara",
  "Vlad din București",
  "Diana din Brașov",
  "Răzvan din Constanța",
  "Ioana din Sibiu",
  "Sergiu din Oradea",
  "Maria din Galați",
  "Dorin din Tiraspol",
  "Elena din Ploiești",
  "Tudor din Craiova",
  "Bianca din Suceava",
  "Adrian din Cahul",
];

function initialEnrolledToday() {
  if (typeof window === "undefined") return 6;
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60;
  // active window roughly 8h → 22h (14h)
  const t = Math.max(0, Math.min(1, (h - 8) / 14));
  const base = Math.floor(t * (DAILY_CAP - 8));
  // small random jitter so two visitors don't see identical numbers
  const jitter = Math.floor(Math.random() * 3);
  return Math.max(3, Math.min(DAILY_CAP, base + 4 + jitter));
}

type Activity = { id: number; label: string } | null;

type SignupContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openModal: () => void;
  dates: CourseDates;
  enrolledToday: number;
  remainingToday: number;
  activity: Activity;
};

const SignupContext = createContext<SignupContextValue | null>(null);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);

  const dates = useMemo(() => getCourseDates(), []);
  // Always start with a fixed value on both SSR and first client render to avoid hydration mismatch.
  const [enrolledToday, setEnrolledToday] = useState<number>(6);
  const [activity, setActivity] = useState<Activity>(null);
  const idRef = useRef(0);

  useEffect(() => {
    // Hydrate the realistic starting count after mount (client-only).
    setEnrolledToday(initialEnrolledToday());

    let timer: ReturnType<typeof setTimeout>;

    function schedule(initialDelay?: number) {
      // first event 8–18s after load, then every 25–80s
      const ms = initialDelay ?? 25000 + Math.random() * 55000;
      timer = setTimeout(() => {
        setEnrolledToday((c) => Math.min(DAILY_CAP, c + 1));
        const label = ACTIVITY_POOL[Math.floor(Math.random() * ACTIVITY_POOL.length)];
        idRef.current += 1;
        setActivity({ id: idRef.current, label });
        schedule();
      }, ms);
    }

    schedule(8000 + Math.random() * 10000);
    return () => clearTimeout(timer);
  }, []);

  const value = useMemo<SignupContextValue>(
    () => ({
      open,
      setOpen,
      openModal,
      dates,
      enrolledToday,
      remainingToday: Math.max(0, DAILY_CAP - enrolledToday),
      activity,
    }),
    [open, openModal, dates, enrolledToday, activity],
  );

  return <SignupContext.Provider value={value}>{children}</SignupContext.Provider>;
}

export function useSignup() {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("useSignup must be used within SignupProvider");
  return ctx;
}
