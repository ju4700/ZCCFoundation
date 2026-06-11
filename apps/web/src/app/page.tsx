import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-base flex flex-col">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-brand-border-light bg-brand-base/80 backdrop-blur">
        <div className="container mx-auto px-6 py-4 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand-text flex items-center justify-center text-brand-base font-display font-bold">
              Z
            </div>
            <span className="font-display text-xl font-bold text-brand-text">ZCC Foundation</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-ui text-sm font-medium text-brand-text-secondary">
            <Link href="#about" className="hover:text-brand-text transition-colors">About Us</Link>
            <Link href="#programs" className="hover:text-brand-text transition-colors">Programs</Link>
            <Link href="#scholarships" className="hover:text-brand-text transition-colors">Scholarships</Link>
            <Link href="#olympiad" className="hover:text-brand-text transition-colors">Chemistry Olympiad</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="rounded-brand-lg bg-brand-text px-5 py-2.5 font-ui text-sm text-brand-base transition-colors hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-warm py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl text-center">
          <h1 className="font-display text-5xl md:text-7xl leading-tight text-brand-text mb-6">
            Empowering the Next Generation of Chemists
          </h1>
          <p className="font-ui text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            The ZCC Foundation is dedicated to advancing chemical education, supporting bright minds through scholarships, and hosting the premier Chemistry Olympiad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#olympiad"
              className="rounded-brand-lg bg-brand-text px-8 py-4 font-ui text-base text-brand-base transition-colors hover:opacity-90"
            >
              Explore the Olympiad
            </Link>
            <Link
              href="#scholarships"
              className="rounded-brand-lg border border-brand-border bg-brand-base px-8 py-4 font-ui text-base text-brand-text transition-colors hover:bg-brand-warm-alt"
            >
              Apply for Scholarships
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-ui text-sm font-bold text-brand-text-muted tracking-widest uppercase mb-2">Who We Are</p>
              <h2 className="font-display text-3xl md:text-5xl text-brand-text mb-6">Dedicated to Chemistry Education</h2>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed mb-6">
                Founded by passionate educators and scientists, the ZCC Foundation strives to ignite curiosity and foster excellence in the chemical sciences. We believe that chemistry holds the key to solving many of the world&apos;s most pressing challenges.
              </p>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed">
                By providing resources, competitive platforms, and financial support, we aim to build a global community of young scientists ready to make a difference.
              </p>
            </div>
            <div className="bg-brand-warm rounded-brand-lg p-8 h-full flex flex-col justify-center border border-brand-border-light">
              <h3 className="font-accent text-2xl text-brand-text mb-4 italic">&quot;Chemistry is the study of matter, but I prefer to see it as the study of change.&quot;</h3>
              <p className="font-ui text-sm text-brand-text-muted">— Inspiring Future Innovators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="bg-brand-warm py-20 border-y border-brand-border-light">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-brand-text mb-4">Our Key Initiatives</h2>
            <p className="font-ui text-lg text-brand-text-secondary max-w-2xl mx-auto">
              Discover how we are making an impact through our core educational programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Olympiad Card */}
            <div id="olympiad" className="bg-brand-base rounded-brand-lg p-8 md:p-12 border border-brand-border shadow-sm">
              <div className="w-16 h-16 bg-brand-warm rounded-full flex items-center justify-center mb-6 text-2xl">
                🧪
              </div>
              <h3 className="font-display text-3xl text-brand-text mb-4">Chemistry Olympiad</h3>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed mb-8">
                Our flagship event challenges students with rigorous, thought-provoking problems that go beyond the standard curriculum. Compete with top minds, test your knowledge, and earn recognition on a global stage.
              </p>
              <ul className="space-y-3 font-ui text-sm text-brand-text-secondary mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-brand-text">✓</span> Annual competition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text">✓</span> Expert-crafted problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text">✓</span> Global leaderboard & awards
                </li>
              </ul>
              <Link
                href="#"
                className="inline-block font-ui text-sm font-bold text-brand-text border-b border-brand-text pb-1 hover:opacity-70 transition-opacity"
              >
                Learn more &rarr;
              </Link>
            </div>

            {/* Scholarships Card */}
            <div id="scholarships" className="bg-brand-base rounded-brand-lg p-8 md:p-12 border border-brand-border shadow-sm">
              <div className="w-16 h-16 bg-brand-warm rounded-full flex items-center justify-center mb-6 text-2xl">
                🎓
              </div>
              <h3 className="font-display text-3xl text-brand-text mb-4">Foundation Scholarships</h3>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed mb-8">
                We believe financial barriers should never hinder educational potential. Our scholarship programs support outstanding students pursuing degrees in chemistry and related scientific fields.
              </p>
              <ul className="space-y-3 font-ui text-sm text-brand-text-secondary mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-brand-text">✓</span> Merit-based awards
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text">✓</span> Need-based grants
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text">✓</span> Mentorship opportunities
                </li>
              </ul>
              <Link
                href="#"
                className="inline-block font-ui text-sm font-bold text-brand-text border-b border-brand-text pb-1 hover:opacity-70 transition-opacity"
              >
                View requirements &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-base py-12 mt-auto">
        <div className="container mx-auto px-6 md:px-10 border-t border-brand-border-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-brand-text flex items-center justify-center text-brand-base font-display text-xs font-bold">
                Z
              </div>
              <span className="font-display text-lg font-bold text-brand-text">ZCC Foundation</span>
            </div>
            <div className="flex gap-6 font-ui text-sm text-brand-text-secondary">
              <Link href="#" className="hover:text-brand-text transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-brand-text transition-colors">Terms of Service</Link>
              <a href="mailto:contact@zccfoundation.org" className="hover:text-brand-text transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center md:text-left mt-8 font-ui text-xs text-brand-text-muted">
            &copy; {new Date().getFullYear()} ZCC Foundation. All rights reserved. Empowering education in chemistry.
          </div>
        </div>
      </footer>
    </main>
  );
}
