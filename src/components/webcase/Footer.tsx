export function Footer() {
  return (
    <footer className="bg-secondary px-5 py-10 text-center text-secondary-foreground sm:px-8">
      <div className="mx-auto max-w-6xl space-y-3 pb-16 md:pb-3">
        <div className="font-display text-sm font-bold tracking-wide">Webcase © 2026</div>
        <div className="space-y-1 text-sm text-secondary-foreground/75">
          <div>📧 hello@webcase.com</div>
          <div>📱 Telegram: @webcase</div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs text-secondary-foreground/60">
          <a href="#" className="hover:text-secondary-foreground">Termeni</a>
          <span>|</span>
          <a href="#" className="hover:text-secondary-foreground">Confidențialitate</a>
          <span>|</span>
          <a href="#" className="hover:text-secondary-foreground">GDPR</a>
        </div>
      </div>
    </footer>
  );
}
