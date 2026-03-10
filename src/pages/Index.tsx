import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`min-h-screen px-6 md:px-12 lg:px-20 ${className}`}>
    {children}
  </section>
);

const RefractionText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blur = useTransform(scrollYProgress, [0.2, 0.45, 0.5, 0.55, 0.8], [0, 0, 1.5, 0, 0]);
  const x = useTransform(scrollYProgress, [0.2, 0.45, 0.5, 0.55, 0.8], [0, 0, 1.5, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        x,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation — minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-8">
        <span className="label-text text-foreground tracking-[0.2em]">GEM</span>
        <span className="label-text hover-fade cursor-pointer">Ventures</span>
      </nav>

      {/* Hero — anchored bottom-left, 80% void */}
      <Section className="relative flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-[33%] min-w-[280px]">
          <p className="label-text mb-6">Est. MMXXIV</p>
          <h1 className="serif-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground">
            Capital for the
            <br />
            inevitable.
          </h1>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-[var(--section-gap)]" />

      {/* Thesis */}
      <Section className="flex items-start min-h-0">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-2 md:col-span-4">
            <RefractionText>
              <p className="label-text mb-8">Thesis</p>
              <p className="serif-light text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-foreground">
                We invest exclusively through the GEM community — a closed network of operators, founders, and allocators who have already proven their conviction.
              </p>
            </RefractionText>
          </div>
        </div>
      </Section>

      <div className="h-[var(--section-gap)]" />

      {/* Approach */}
      <Section className="flex items-start min-h-0">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-7 md:col-span-4">
            <RefractionText>
              <p className="label-text mb-8">Approach</p>
              <p className="serif-light text-xl md:text-2xl leading-[1.4] text-foreground mb-12">
                No thesis decks. No public portfolios. Every allocation is sourced, vetted, and committed within the community before it reaches the outside world.
              </p>
              <div className="border-t border-seam pt-8">
                <p className="serif-light text-xl md:text-2xl leading-[1.4] text-foreground">
                  We do not seek deal flow.
                  <br />
                  Deal flow seeks us.
                </p>
              </div>
            </RefractionText>
          </div>
        </div>
      </Section>

      <div className="h-[var(--section-gap)]" />

      {/* Structure */}
      <Section className="flex items-start min-h-0">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-2 md:col-span-3">
            <RefractionText>
              <p className="label-text mb-8">Structure</p>
              <div className="space-y-10">
                {[
                  { label: "Stage", value: "Pre-Seed — Series A" },
                  { label: "Check Size", value: "$50K — $500K" },
                  { label: "Sectors", value: "Sector Agnostic" },
                  { label: "Geography", value: "Global" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="label-text mb-2">{item.label}</p>
                    <p className="serif-regular text-lg text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </RefractionText>
          </div>
        </div>
      </Section>

      <div className="h-[var(--section-gap)]" />

      {/* Membership */}
      <Section className="flex items-start min-h-0">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-6 md:col-span-4">
            <RefractionText>
              <p className="label-text mb-8">Membership</p>
              <p className="serif-light text-xl md:text-2xl leading-[1.4] text-foreground mb-12">
                GEM Ventures is not accepting open applications. Access is extended by existing members through invitation only.
              </p>
              <p className="serif-light text-lg leading-[1.5] text-muted-foreground">
                If you are already part of the GEM community, you know how to reach us.
              </p>
            </RefractionText>
          </div>
        </div>
      </Section>

      <div className="h-[var(--section-gap)]" />

      {/* Footer — quiet application link */}
      <footer className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-text mb-3">GEM Ventures</p>
              <p className="label-text text-muted-foreground">© {new Date().getFullYear()}</p>
            </div>
            <div className="mt-8 md:mt-0">
              <a
                href="mailto:ventures@gem.community"
                className="label-text text-accent hover-fade border-b border-accent/30 pb-1"
              >
                Inquiries
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
