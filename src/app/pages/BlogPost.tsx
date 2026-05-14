import { Link, useParams } from "react-router";
import { posts } from "../data/posts";
import { CTAButton } from "../components/CTAButton";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-24">
        <h1>Not found.</h1>
        <Link to="/blog" className="mono text-sm text-accent mt-6 inline-block">← Back to Field Notes</Link>
      </main>
    );
  }

  return (
    <main>
      <article className="max-w-[68ch] mx-auto px-5 sm:px-8 pt-16 md:pt-24 pb-16">
        <Link to="/blog" className="inline-flex items-center gap-1.5 mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent mb-10">
          <ArrowLeft size={14} /> Field Notes
        </Link>

        <header className="mb-12 border-b border-border pb-10">
          <div className="mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4 flex flex-wrap gap-2">
            <span>{post.business}</span><span>·</span>
            <span>{post.city}</span><span>·</span>
            <span>{post.date}</span>
          </div>
          <h1>
            {post.leak} <span className="text-muted-foreground">→</span>{" "}
            <span className="text-accent">{post.system}</span>
          </h1>
        </header>

        <Section title="The Problem">{post.problem}</Section>

        <Section title="The Math">
          <ul className="space-y-2">
            {post.math.map((m) => (
              <li key={m} className="flex gap-3 text-foreground">
                <span className="text-accent mono">→</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="The System">
          <ul className="space-y-2">
            {post.build.map((b) => (
              <li key={b} className="flex gap-3 text-foreground">
                <span className="text-accent mono">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="The Result">{post.result}</Section>

        <div className="mt-14 border-t border-border pt-10">
          <p className="text-lg mb-6">Sound familiar?</p>
          <CTAButton>Get My Free Revenue Report →</CTAButton>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div className="mono text-[13px] uppercase tracking-[0.22em] text-accent mb-3">{title}</div>
      <div className="text-foreground leading-relaxed text-[1.0625rem]">{children}</div>
    </section>
  );
}
