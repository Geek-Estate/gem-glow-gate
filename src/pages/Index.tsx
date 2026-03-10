import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gemLogo from "@/assets/gem-ventures-logo.png";
import gemHorizontal from "@/assets/gem-horizontal-reverse.png";
import gemIcon from "@/assets/gem-icon.png";

const RefractionText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blur = useTransform(scrollYProgress, [0.2, 0.45, 0.5, 0.55, 0.8], [0, 0, 1.2, 0, 0]);
  const x = useTransform(scrollYProgress, [0.2, 0.45, 0.5, 0.55, 0.8], [0, 0, 1, 0, 0]);

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

const PARTNERS = [
  {
    name: "Grier Allen",
    role: "CSO, Inside Real Estate",
    note: "Prior BoomTown founder (exit to Inside Real Estate)",
    url: "https://www.linkedin.com/in/grierallen/",
  },
  {
    name: "Heather Harmon",
    role: "Four-time founder & public company executive",
    note: "Prior co-founder of RedDoor (exit to Opendoor)",
    url: "https://www.linkedin.com/in/heatheraharmon/",
  },
  {
    name: "Greg Robertson",
    role: "30-year real estate tech builder & advisor",
    note: "Co-founded Cloud CMA at W+R Studios (exit to Lone Wolf)",
    url: "https://www.linkedin.com/in/grobertson/",
  },
  {
    name: "Ryan Coon",
    role: "Co-founder & Managing Partner, Green Street Growth",
    note: "Prior co-founder of Avail (exit to Realtor.com)",
    url: "https://www.linkedin.com/in/ryancoon/",
  },
  {
    name: "Drew Meyers",
    role: "Geek Estate founder",
    note: "Prior Horizon co-founder; early Zillow team member",
    url: "https://www.linkedin.com/in/drewmeyers/",
  },
];

const FOCUS_AREAS = [
  { title: "Wealth Management", desc: "Tools accelerating the agent-to-wealth-manager migration" },
  { title: "Consumer Search", desc: "A search experience for what could be, rather than what is" },
  { title: "Build More Homes", desc: "Technology innovations accelerating new housing construction" },
  { title: "Resilient Housing", desc: "Adapting homes to catastrophic weather, improving insurability" },
  { title: "Innovating Homeownership", desc: "Accessible, affordable options for new demographics" },
  { title: "Electrifying Mobile Life", desc: "Self-driving meets the open road — limitless possibilities" },
  { title: "Aerial Economy", desc: "On-the-ground solutions for the coming skyward infrastructure" },
  { title: "Robotics", desc: "From humanoid home assistants to construction automation" },
];

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-8">
        <span className="label-text text-foreground tracking-[0.2em]">
          <img src={gemIcon} alt="GEM" className="h-6 inline-block" />
        </span>
        <span className="label-text text-foreground tracking-[0.2em]">Ventures</span>
      </nav>

      {/* Hero — anchored bottom-left */}
      <section className="min-h-screen relative flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[420px]">
          <p className="label-text mb-6">Proptech Operative-Investor Collective</p>
          <h1 className="serif-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground">
            Strategic capital
            <br />
            from builders.
          </h1>
        </div>
      </section>

      <div className="h-[var(--section-gap)]" />

      {/* Thesis */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-2 md:col-span-4">
            <RefractionText>
              <p className="label-text mb-8">What We Are</p>
              <p className="serif-light text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-foreground">
                A highly curated angel group built around shared conviction, not sponsorship. Seasoned proptech operators deploying strategic, collaborative capital.
              </p>
            </RefractionText>
          </div>
        </div>
      </section>

      <div className="h-[var(--section-gap)]" />

      {/* Differentiation */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-7 md:col-span-4">
            <RefractionText>
              <p className="label-text mb-8">Differentiation</p>
              <p className="serif-light text-xl md:text-2xl leading-[1.4] text-foreground mb-12">
                This isn't passive capital. If you want a silent check, we're not for you. We bring connections, mentorship, and hard-won insight to the table.
              </p>
              <div className="border-t border-seam pt-8">
                <p className="serif-light text-xl md:text-2xl leading-[1.4] text-foreground">
                  Deals are sourced and vetted as a group. Shared diligence, diversified perspectives, reduced risk.
                </p>
              </div>
            </RefractionText>
          </div>
        </div>
      </section>

      <div className="h-[var(--section-gap)]" />

      {/* Focus Areas */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-2 md:col-span-5">
            <RefractionText>
              <p className="label-text mb-8">Investment Focus</p>
              <p className="serif-light text-xl md:text-2xl leading-[1.4] text-foreground mb-16">
                Long on real estate and the Built World. Areas where we're seeking bold ideas:
              </p>
              <div className="space-y-8">
                {FOCUS_AREAS.map((area) => (
                  <div key={area.title} className="border-t border-seam pt-6">
                    <p className="serif-regular text-lg text-foreground mb-1">{area.title}</p>
                    <p className="label-text text-muted-foreground leading-relaxed" style={{ textTransform: "none", letterSpacing: "0.02em" }}>
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </RefractionText>
          </div>
        </div>
      </section>

      <div className="h-[var(--section-gap)]" />

      {/* Structure */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-8 md:col-span-3">
            <RefractionText>
              <p className="label-text mb-8">Structure</p>
              <div className="space-y-10">
                {[
                  { label: "Stage", value: "Pre-Seed — Seed" },
                  { label: "Check Size", value: "$100K+" },
                  { label: "Sectors", value: "Proptech & Built World" },
                  { label: "Model", value: "Syndicate — one cap table entry" },
                  { label: "Board", value: "Available through Series A" },
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
      </section>

      <div className="h-[var(--section-gap)]" />

      {/* Partners */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-2 md:col-span-4">
            <RefractionText>
              <p className="label-text mb-8">Investment Partners</p>
              <div className="space-y-10">
                {PARTNERS.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover-fade"
                  >
                    <p className="serif-regular text-xl text-foreground mb-1">{partner.name}</p>
                    <p className="label-text text-muted-foreground mb-1" style={{ textTransform: "none", letterSpacing: "0.02em" }}>
                      {partner.role}
                    </p>
                    <p className="label-text text-accent/60" style={{ textTransform: "none", letterSpacing: "0.02em" }}>
                      {partner.note}
                    </p>
                  </a>
                ))}
              </div>
            </RefractionText>
          </div>
        </div>
      </section>

      <div className="h-[var(--section-gap)]" />

      {/* Ethos */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-start-5 md:col-span-5">
            <RefractionText>
              <p className="serif-light text-2xl md:text-3xl leading-[1.3] text-foreground">
                At its core, GEM Ventures isn't about money — it's about alignment. Builders helping builders, investing in a community that grows stronger by backing its own.
              </p>
            </RefractionText>
          </div>
        </div>
      </section>

      <div className="h-[var(--section-gap)]" />

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-8">
              <div>
                <img src={gemLogo} alt="GEM Ventures" className="h-10 mb-4 opacity-80" />
                <p className="label-text text-muted-foreground">© {new Date().getFullYear()} GEM Ventures</p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 flex gap-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSETGM3bcPOCm4Iyq5YyKEvi1ev2ZFrw2B3pkuhOw8vYBGPQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="label-text text-accent hover-fade border-b border-accent/30 pb-1"
              >
                Apply
              </a>
              <a
                href="https://geekestate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-text text-muted-foreground hover-fade border-b border-muted-foreground/30 pb-1"
              >
                Geek Estate
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
