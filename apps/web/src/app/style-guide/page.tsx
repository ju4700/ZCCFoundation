import Link from "next/link";

const colorTokens = [
  { label: "Background Base", value: "#FFFFFF", cssVar: "var(--color-background-base)" },
  { label: "Background Warm", value: "#FFF9F8", cssVar: "var(--color-background-warm)" },
  { label: "Background Warm Alt", value: "#FFF1EE", cssVar: "var(--color-background-warm-alt)" },
  { label: "Text Primary", value: "#202E3F", cssVar: "var(--color-text-primary)" },
  { label: "Text Strong", value: "#0F0F0F", cssVar: "var(--color-text-strong)" },
  { label: "Text Secondary", value: "#4D5561", cssVar: "var(--color-text-secondary)" },
  { label: "Text Muted", value: "#6F6F6F", cssVar: "var(--color-text-muted)" },
  { label: "Border Soft", value: "#C5C6C6", cssVar: "var(--color-border-soft)" },
  { label: "Border Light", value: "#F0F0F0", cssVar: "var(--color-border-light)" },
];

const spacingTokens = [
  "--space-1",
  "--space-2",
  "--space-3",
  "--space-4",
  "--space-5",
  "--space-6",
  "--space-7",
  "--space-8",
  "--space-10",
  "--space-11",
  "--space-13",
];

const radiusTokens = ["--radius-sm", "--radius-md", "--radius-lg", "--radius-full"];

export default function StyleGuidePage() {
  return (
    <main
      style={{
        background: "var(--color-background-base)",
        color: "var(--color-text-primary)",
        minHeight: "100vh",
        padding: "var(--space-8)",
        fontFamily: "var(--font-family-body)",
      }}
    >
      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gap: "var(--space-8)" }}>
        <header style={{ display: "grid", gap: "var(--space-4)" }}>
          <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-label)" }}>
            ZCC Foundation
          </p>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-family-display)",
              fontSize: "var(--font-size-display-l)",
              lineHeight: "var(--line-height-tight)",
            }}
          >
            Brand Style Preview
          </h1>
          <p style={{ margin: 0, maxWidth: 760, color: "var(--color-text-secondary)", lineHeight: "var(--line-height-body)" }}>
            Live preview of core design tokens and component styles derived from the Helpi visual language.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                borderRadius: "var(--radius-lg)",
                padding: "12px 22px",
                border: "1px solid var(--color-border-soft)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-family-ui)",
                fontSize: "var(--font-size-label)",
              }}
            >
              Back Home
            </Link>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                borderRadius: "var(--radius-lg)",
                padding: "12px 22px",
                background: "var(--color-text-primary)",
                color: "var(--color-background-base)",
                fontFamily: "var(--font-family-ui)",
                fontSize: "var(--font-size-label)",
              }}
            >
              Donate Now
            </Link>
          </div>
        </header>

        <section style={{ display: "grid", gap: "var(--space-5)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-family-display)", fontSize: "var(--font-size-h2)", lineHeight: "var(--line-height-heading)" }}>
            Color System
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "var(--space-4)" }}>
            {colorTokens.map((token) => (
              <article
                key={token.label}
                style={{
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  background: "var(--color-background-base)",
                }}
              >
                <div style={{ height: 90, background: token.cssVar, borderBottom: "1px solid var(--color-border-light)" }} />
                <div style={{ padding: "var(--space-4)", display: "grid", gap: "var(--space-1)" }}>
                  <strong style={{ fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-label)" }}>{token.label}</strong>
                  <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-label)" }}>{token.value}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ display: "grid", gap: "var(--space-5)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-family-display)", fontSize: "var(--font-size-h2)", lineHeight: "var(--line-height-heading)" }}>
            Typography
          </h2>
          <div style={{ display: "grid", gap: "var(--space-4)", background: "var(--color-background-warm)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-family-display)", fontSize: "var(--font-size-h1)", lineHeight: "var(--line-height-tight)" }}>Together in Action, Stronger in Community</p>
            <p style={{ margin: 0, fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-body-l)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-body)" }}>
              We are a community of compassionate people creating real, lasting change where it is needed most.
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-family-accent)", fontStyle: "italic", fontSize: "var(--font-size-h4)", color: "var(--color-text-primary)" }}>
              Hope grows when people move together.
            </p>
          </div>
        </section>

        <section style={{ display: "grid", gap: "var(--space-5)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-family-display)", fontSize: "var(--font-size-h2)", lineHeight: "var(--line-height-heading)" }}>
            Spacing and Radius
          </h2>
          <div style={{ display: "grid", gap: "var(--space-5)", gridTemplateColumns: "1fr 1fr" }}>
            <article style={{ border: "1px solid var(--color-border-light)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)", display: "grid", gap: "var(--space-3)" }}>
              <h3 style={{ margin: 0, fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-body-l)" }}>Spacing Tokens</h3>
              {spacingTokens.map((token) => (
                <div key={token} style={{ display: "grid", gridTemplateColumns: "140px 1fr", alignItems: "center", gap: "var(--space-4)" }}>
                  <span style={{ fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-label)", color: "var(--color-text-muted)" }}>{token}</span>
                  <div style={{ height: 10, width: `var(${token})`, background: "var(--color-text-primary)", borderRadius: "var(--radius-full)" }} />
                </div>
              ))}
            </article>
            <article style={{ border: "1px solid var(--color-border-light)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)", display: "grid", gap: "var(--space-4)" }}>
              <h3 style={{ margin: 0, fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-body-l)" }}>Radius Tokens</h3>
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                {radiusTokens.map((token) => (
                  <div key={token} style={{ display: "grid", gridTemplateColumns: "140px 1fr", alignItems: "center", gap: "var(--space-4)" }}>
                    <span style={{ fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-label)", color: "var(--color-text-muted)" }}>{token}</span>
                    <div style={{ height: 48, background: "var(--color-background-warm-alt)", border: "1px solid var(--color-border-soft)", borderRadius: `var(${token})` }} />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section style={{ display: "grid", gap: "var(--space-5)", marginBottom: "var(--space-11)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-family-display)", fontSize: "var(--font-size-h2)", lineHeight: "var(--line-height-heading)" }}>
            Component Sample
          </h2>
          <article style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-light)", background: "var(--color-background-base)", padding: "var(--space-6)", display: "grid", gap: "var(--space-4)" }}>
            <span style={{ display: "inline-block", width: "fit-content", fontFamily: "var(--font-family-ui)", fontSize: "var(--font-size-label)", color: "var(--color-text-primary)", background: "var(--color-background-warm-alt)", borderRadius: "var(--radius-full)", padding: "6px 12px" }}>
              200K+ Lives Transformed
            </span>
            <h3 style={{ margin: 0, fontFamily: "var(--font-family-display)", fontSize: "var(--font-size-h3)", lineHeight: "var(--line-height-heading)" }}>
              Emergency Fund for Assistance
            </h3>
            <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: "var(--line-height-body)" }}>
              We maintain a responsive emergency fund that provides rapid financial support during crises and natural disasters.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <button
                type="button"
                style={{
                  border: "none",
                  borderRadius: "var(--radius-lg)",
                  padding: "12px 22px",
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "var(--font-size-label)",
                  color: "var(--color-background-base)",
                  background: "var(--color-text-primary)",
                  cursor: "pointer",
                  transition: "all var(--motion-duration-base) var(--motion-ease-standard)",
                }}
              >
                Donate
              </button>
              <button
                type="button"
                style={{
                  border: "1px solid var(--color-border-soft)",
                  borderRadius: "var(--radius-lg)",
                  padding: "12px 22px",
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "var(--font-size-label)",
                  color: "var(--color-text-primary)",
                  background: "var(--color-background-base)",
                  cursor: "pointer",
                  transition: "all var(--motion-duration-base) var(--motion-ease-standard)",
                }}
              >
                Learn More
              </button>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
