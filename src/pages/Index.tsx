import { motion } from "framer-motion";
import gemLogoReverse from "@/assets/gem-ventures-logo-reverse.png";
import gemLogoFull from "@/assets/gem-ventures-logo-full.png";
import iconHandshake from "@/assets/icon-handshake.png";
import iconInvest from "@/assets/icon-invest.png";
import headshotGrierAllen from "@/assets/headshot-grier-allen.png";
import headshotGregRobertson from "@/assets/headshot-greg-robertson.webp";
import headshotHeatherHarmon from "@/assets/headshot-heather-harmon.jpeg";
import headshotRyanCoon from "@/assets/headshot-ryan-coon.jpg";
import headshotDrewMeyers from "@/assets/headshot-drew-meyers.jpg";
import { Button } from "@/components/ui/button";

const APPLY_URL = "https://airtable.com/appFmnMtGPBs6uvWv/pagh5zOI1I5hzRi5L/form";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const PARTNERS = [
  { name: "Grier Allen", initials: "GA", role: "Founding Partner", desc: "Chief Strategy Officer at Inside Real Estate; founder of BoomTown (exit to Inside Real Estate).", url: "https://www.linkedin.com/in/grierallen/", photo: headshotGrierAllen },
  { name: "Heather Harmon", initials: "HH", role: "Co-Founder, Partner", desc: "Four-time founder and public company executive; co-founder of RedDoor (exit to Opendoor).", url: "https://www.linkedin.com/in/heatheraharmon/", photo: headshotHeatherHarmon },
  { name: "Greg Robertson", initials: "GR", role: "Founding Partner", desc: "30-year real estate tech builder and advisor; co-founded Cloud CMA at W+R Studios (exit to Lone Wolf).", url: "https://www.linkedin.com/in/grobertson/", photo: headshotGregRobertson },
  { name: "Ryan Coon", initials: "RC", role: "Founding Partner", desc: "Co-founder and Managing Partner at Green Street Growth; co-founder of Avail (exit to Realtor.com).", url: "https://www.linkedin.com/in/ryancoon/", photo: headshotRyanCoon },
  { name: "Drew Meyers", initials: "DM", role: "Co-Founder, Partner", desc: "Geek Estate founder; co-founder of Horizon; early Zillow team member.", url: "https://www.linkedin.com/in/drewmeyers/", photo: headshotDrewMeyers },
];

const FOCUS_AREAS = [
  { icon: "💼", title: "Wealth Management", desc: "Tools facilitating and accelerating the agent-to-wealth-manager migration, reimagining the real estate advisor of the future." },
  { icon: "🔍", title: "Consumer Search", desc: "A search experience for what could be rather than what is — transforming how people discover and evaluate property." },
  { icon: "🏗️", title: "Build More Homes", desc: "Technology innovations that accelerate the construction of new housing units in a market with millions of homes in deficit." },
  { icon: "🛡️", title: "Resilient Housing", desc: "Technologies helping homes adapt to catastrophic weather events, improve insurability, and lower environmental footprints." },
  { icon: "🏠", title: "Innovating Homeownership", desc: "Creating more accessible and affordable homeownership options to adapt to new demographics and shifting priorities." },
  { icon: "⚡", title: "Electrifying Mobile Life", desc: "As self-driving becomes reality, the open road offers limitless possibilities for proptech founders to reimagine living on the move." },
  { icon: "🚁", title: "Aerial Economy", desc: "On-the-ground solutions providing critical technology and infrastructure needed for a smooth transition to busier skies." },
  { icon: "🤖", title: "Robotics", desc: "From humanoid robots doing home chores to construction and renovation automation — huge opportunities await those with deep expertise." },
];

const HOW_STEPS = [
  { num: "01", title: "Relationship-Earned Deal Flow", desc: "Deals originate from the trusted GEM network — a community of hundreds of proptech operators, founders, and investors built over nearly a decade." },
  { num: "02", title: "Collective Due Diligence", desc: "Every deal is vetted as a group. Shared diligence leverages the collective experience of seasoned operators across all aspects of proptech." },
  { num: "03", title: "Single Cap Table Entry", desc: "We operate as a syndicate — one clean entry on your cap table, starting at $100k. We're comfortable being the first check in or leading a round." },
  { num: "04", title: "Active Post-Investment Support", desc: "Advisory input, strategic connections, and shared accountability for success. We'll feature and connect portfolio companies regularly within the Geek Estate ecosystem, and beyond." },
  { num: "05", title: "Founder-Aligned Governance", desc: "If we take a board seat, we step back by Series A — or whenever it makes sense. Our goal is to support, not control." },
];

const PILLARS = [
  { title: "Strategic Capital", desc: "We make early, high-conviction bets — and commit to supporting companies well beyond the initial investment." },
  { title: "Collective Intelligence", desc: "Deals are sourced and vetted as a group. Shared diligence, diversified perspectives, and experienced operators weighing in on every startup." },
  { title: "Founder-First Structure", desc: "We're comfortable being the first check in, and open to leading a round. We operate as a syndicate — one clean entry on your cap table." },
  { title: "Long-Term Partnership", desc: "Advisory input, strategic connections, and shared accountability for success. If we join a board, we step back by Series A — or whenever it makes sense." },
];

const NavLinks = () => (
  <ul className="hidden md:flex gap-9 list-none">
    {["About", "Focus", "Team", "How It Works"].map((label) => (
      <li key={label}>
        <a
          href={`#${label.toLowerCase().replace(/ /g, "")}`}
          className="text-foreground/55 text-[0.8rem] uppercase tracking-[0.1em] font-normal no-underline hover:text-accent hover:opacity-100 transition-all"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
);

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-4 bg-background/95 backdrop-blur-xl border-b border-border">
        <a href="#">
          <img src={gemLogoFull} alt="GEM Ventures" className="h-[30px]" />
        </a>
        <NavLinks />
        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="brand" size="default" className="px-6 py-2 text-[0.78rem]">Apply Now</Button>
        </a>
      </nav>

      {/* Hero */}
      <section className="hero-section min-h-screen flex flex-col justify-center items-start px-[6vw] md:px-[10vw] pt-40 pb-24 relative">
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible" className="label-text mb-6" style={{ color: 'hsl(var(--brand-green))' }}>
          Proptech Operative-Investor Collective
        </motion.p>
        <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="serif-display text-[clamp(3rem,7vw,7rem)] leading-[1.0] tracking-tight max-w-[20ch] mb-6 text-primary-foreground">
          Proptech Founders<br />Backing Proptech <em className="italic text-accent">Founders</em>
        </motion.h1>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="text-[clamp(1rem,1.4vw,1.15rem)] max-w-[52ch] text-primary-foreground/55 mb-12">
          Built on relationships earned over a decade inside proptech's most curated operator network, we're building for the long game — not rushing capital deployment.
        </motion.p>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="brand" size="xl">Apply for Funding</Button>
          </a>
          <a href="#about">
            <Button variant="brand-outline" size="xl">Learn More</Button>
          </a>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="scroll-line" />
          <span className="text-[0.68rem] uppercase tracking-[0.2em] text-primary-foreground">Scroll</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-[6vw] md:px-[10vw] py-28 border-t-4 border-accent">
        <p className="label-text mb-4">Who We Are</p>
        <h2 className="serif-bold text-[clamp(2rem,3.5vw,3rem)] leading-[1.15]">For founders who expect more<br />from their investors.</h2>
        <div className="divider" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="space-y-5 text-foreground/70 text-[1.05rem]">
            <p>We help founders build and scale companies across the housing and construction ecosystem. Born from the GEM community — active since 2017 — GEM Ventures is a seasoned group of operators who have built, scaled, and exited proptech companies, and who believe in <strong className="text-foreground font-medium">active partnership over passive capital</strong>.</p>
            <p>This model works best for founders who value collaborative, engaged investors — partners who make connections, share perspective, and stay involved.</p>
            <p>GEM Ventures builds on nearly a decade of trusted relationships within the GEM community. Access is earned through relationships, not fees.</p>
          </div>
          <div className="flex flex-col gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="pillar">
                <h4 className="serif-regular text-[1.05rem] text-foreground mb-1">{p.title}</h4>
                <p className="text-[0.92rem] text-foreground/55">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="px-[6vw] md:px-[10vw] py-28 bg-secondary">
        <p className="label-text mb-4">Investment Thesis</p>
        <h2 className="serif-bold text-[clamp(2rem,3.5vw,3rem)] leading-[1.15]">We're long on real estate<br />and the Built World.</h2>
        <div className="divider" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map((area) => (
            <div key={area.title} className="focus-card p-8">
              <div className="text-[1.6rem] mb-4">{area.icon}</div>
              <h3 className="serif-regular text-[1.05rem] text-foreground mb-2">{area.title}</h3>
              <p className="text-[0.88rem] text-foreground/55 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="px-[6vw] md:px-[10vw] py-28">
        <p className="label-text mb-4">Investor Partners</p>
        <h2 className="serif-bold text-[clamp(2rem,3.5vw,3rem)] leading-[1.15]">Experienced operators.<br />Aligned investors.</h2>
        <div className="divider" />
        <p className="max-w-[60ch] text-foreground/60 mb-14 text-[1.05rem]">
          The group will remain intentionally small — our investment partners:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="member-card p-8">
              {partner.photo ? (
                <img src={partner.photo} alt={partner.name} className="w-[50px] h-[50px] object-cover border-2 border-accent" />
              ) : (
                <div className="w-[50px] h-[50px] bg-accent/10 border-2 border-accent flex items-center justify-center serif-bold text-[1.1rem] text-brand-green-dark">
                  {partner.initials}
                </div>
              )}
              <h3 className="serif-regular text-[1.1rem] text-foreground mb-1">{partner.name}</h3>
              <p className="text-[0.72rem] text-brand-green-dark uppercase tracking-[0.1em] font-medium mb-3">{partner.role}</p>
              <p className="text-[0.87rem] text-foreground/55 leading-relaxed">{partner.desc}</p>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[0.73rem] uppercase tracking-[0.1em] font-medium text-accent no-underline border-b border-transparent hover:border-accent transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="how-section px-[6vw] md:px-[10vw] py-28">
        <p className="label-text mb-4">Our Approach</p>
        <h2 className="serif-bold text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-primary-foreground">How GEM Ventures works.</h2>
        <div className="divider" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="flex flex-col gap-8">
            {HOW_STEPS.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <span className="how-num">{step.num}</span>
                <div>
                  <h4 className="serif-regular text-[1.05rem] text-primary-foreground mb-1">{step.title}</h4>
                  <p className="text-[0.9rem] text-primary-foreground/45">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-accent/[0.07] border border-accent/[0.28] p-12">
            <p className="label-text mb-4">Goal</p>
            <h3 className="serif-bold text-[1.55rem] leading-[1.3] text-primary-foreground mb-5">
              Pre-seed or Seed checks of $100K+
            </h3>
            <p className="text-[0.95rem] text-primary-foreground/55 mb-6">
              Transparency is core to how we operate. When we invest, we'll publish our investment thesis as a GEM Transmission essay and cover the company throughout the year on the Geek Estate Blog.
            </p>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="brand" size="lg">Apply Today</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="apply-section text-center px-[6vw] md:px-[10vw] py-36 relative">
        <span className="label-text block mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>Ready to Build Together?</span>
        <h2 className="serif-bold text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-accent-foreground max-w-[18ch] mx-auto mb-4">
          The most strategic early-stage capital in proptech.
        </h2>
        <p className="max-w-[50ch] mx-auto text-accent-foreground/80 text-[1.05rem] mb-12">
          If you're building the future of housing or construction, we'd love to hear from you.
        </p>
        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="brand-white" size="xl">Apply for Funding →</Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-[6vw] md:px-[10vw] py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={gemLogoFull} alt="GEM Ventures" className="h-[22px]" />
        <p className="text-[0.77rem] text-muted-foreground">
          A proptech operative-investor collective. Part of the{" "}
          <a href="https://www.geekestate.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">Geek Estate</a> ecosystem.
        </p>
        <p className="text-[0.77rem] text-muted-foreground">© {new Date().getFullYear()} GEM Ventures</p>
      </footer>
    </div>
  );
};

export default Index;
