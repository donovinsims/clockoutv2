import { Link } from "react-router";
import { posts } from "../data/posts";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "../components/CTAButton";

export default function Blog() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="mono text-[13px] uppercase tracking-[0.22em] text-accent mb-7">Field Notes</div>
          <h1 className="max-w-3xl">
            Real businesses. <span className="text-accent">Real math.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            One post per workflow installed. Here's what I found, what I built, and what it returned.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border overflow-hidden">
            {posts.map((p) => (
              <li key={p.slug} className="bg-background hover:bg-surface transition-colors">
                <Link to={`/blog/${p.slug}`} className="block p-7 md:p-9 group">
                  <div className="flex items-center justify-between mb-5">
                    <span className="mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {p.business} · {p.city}
                    </span>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </div>
                  <h2 className="text-2xl md:text-[1.75rem] leading-[1.15] tracking-tight">
                    {p.leak}
                    <span className="text-muted-foreground"> · </span>
                    <span className="text-accent">{p.system}</span>
                  </h2>
                  <p className="mt-5 text-sm text-muted-foreground line-clamp-2">{p.problem}</p>
                  <div className="mt-6 mono text-[13px] uppercase tracking-wider text-muted-foreground">{p.date}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <h2 className="mb-4">See if your business has the same leaks.</h2>
            <p className="text-muted-foreground mb-8">
              Free 20-minute assessment. I map your operation, show you the dollar math, and hand you
              a written report — whether you hire me or not.
            </p>
            <CTAButton>See Where You're Losing Money →</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
