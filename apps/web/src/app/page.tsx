import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-warm px-6 py-12 md:px-10">
      <section className="mx-auto grid max-w-5xl gap-8 rounded-brand-lg border border-brand-border bg-brand-base p-8 md:p-12">
        <p className="font-ui text-sm text-brand-text-muted">ZCC Foundation Design System</p>
        <h1 className="font-display text-4xl leading-tight text-brand-text md:text-6xl">
          Design language is now wired into tokens, theme aliases, and a live preview page.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-brand-text-secondary md:text-lg">
          Use the style guide route to inspect colors, typography, spacing, radius, motion, and component patterns before implementing pages.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/style-guide"
            className="rounded-brand-lg bg-brand-text px-6 py-3 font-ui text-sm text-brand-base transition-colors hover:opacity-90"
          >
            Open Style Guide
          </Link>
          <Link
            href="/style-guide"
            className="rounded-brand-lg border border-brand-border px-6 py-3 font-ui text-sm text-brand-text transition-colors hover:bg-brand-warm-alt"
          >
            Open Token Preview
          </Link>
        </div>
      </section>
    </main>
  );
}
