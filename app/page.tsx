import type { Metadata } from 'next';
import AppCard from '../components/AppCard';
import FeatureCard from '../components/FeatureCard';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import StatCounter from '../components/StatCounter';
import SplitText from '../components/SplitText';
import MagneticButton from '../components/MagneticButton';
import { APPS, FEATURES, STEPS, STATS, STACK } from './data/homeData';

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute -top-20 -left-32 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl animate-float2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-800/12 rounded-full blur-2xl animate-float3 pointer-events-none" />

        {/* Grid */}
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(9,9,11,0.75)_100%)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-3 shimmer-badge border border-white/10 text-zinc-300 text-sm px-5 py-2.5 rounded-full mb-10">
            <span
              className="w-2 h-2 bg-emerald-400 rounded-full"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
              aria-label="Application disponible"
            />
            Sports Controls disponible sur l&apos;App Store & Play Store
          </div>

          {/* Headline — reveal mot par mot via SplitText */}
          <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-black text-white leading-[1.06] tracking-tight mb-7">
            <SplitText text="Applications mobiles & web" delay={0.25} />
            <br />
            <span className="gradient-text">
              <SplitText text="sur mesure" delay={0.55} gradient />
            </span>
            <SplitText text=" pour les professionnels" delay={0.8} />
          </h1>

          {/* Subtext */}
          <p className="hero-p text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Nous concevons des applications mobiles et web sur mesure, robustes et intuitives, pour
            répondre aux besoins métier des équipes terrain.
          </p>

          {/* CTAs — MagneticButton sur le CTA principal */}
          <div className="hero-cta flex gap-4 justify-center flex-wrap">
            <MagneticButton>
              <a
                href="#apps"
                className="btn-primary inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-bold text-lg group"
              >
                Voir nos apps
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </MagneticButton>
            <a
              href="/contact"
              className="btn-secondary bg-white/5 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent scroll-bounce" />
        </div>
      </section>

      {/* ─────────────────────────── TECH MARQUEE ─────────────────────────── */}
      <section className="bg-white/[0.03] backdrop-blur-sm border-y border-white/[0.06] py-5 overflow-hidden select-none">
        <div className="flex items-center">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap pr-16">
            {[...STACK, ...STACK].map((tech, i) => (
              <span key={i} className="text-white/45 font-bold text-xs tracking-[0.15em] uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FEATURES ─────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-4 block">
                Notre approche
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.1] tracking-tight">
                Tout ce qu&apos;il faut.
                <br />
                Rien de superflu.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                Des apps qui fonctionnent vraiment, construites avec les bons outils.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <FeatureCard
                  icon={f.icon ? <f.icon className="inline-block" /> : null}
                  title={f.title}
                  desc={f.desc}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─────────────────────────── APPS ─────────────────────────── */}
      <section id="apps" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-4 block">
                Nos applications
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.1] tracking-tight">
                Des outils prêts à l&apos;emploi
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                Déployés en production, utilisés par des équipes terrain chaque jour.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS.map((app) => {
              const { icon: Icon, ...rest } = app;
              return (
                <StaggerItem key={app.name} className="h-full">
                  <AppCard {...rest} iconEl={<Icon className="inline-block" />} />
                </StaggerItem>
              );
            })}

            {/* Coming soon placeholder */}
            <StaggerItem className="h-full">
              <div className="h-full border-2 border-dashed border-white/20 rounded-2xl p-7 flex flex-col items-center justify-center gap-3 text-center min-h-[280px] bg-white/[0.02]">
                <span className="text-4xl">✨</span>
                <p className="font-bold text-zinc-400">Prochaine app</p>
                <p className="text-zinc-500 text-sm">En développement</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-4 block">
                Process
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.1] tracking-tight">
                Comment ça marche ?
              </h2>
              <p className="text-zinc-400 text-lg">
                De l&apos;idée à la mise en production en quelques semaines.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="space-y-5">
            {STEPS.map((step) => (
              <StaggerItem key={step.number} variant="left">
                <div
                  className="card-hover-shimmer group flex gap-6 p-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm
                                hover:border-white/20 hover:shadow-xl hover:shadow-sky-500/10 hover:bg-white/[0.08]
                                transition-[color,background-color,border-color,box-shadow] duration-300"
                >
                  <div className="text-6xl font-black text-white/10 group-hover:text-sky-500/30 group-hover:scale-110 transition-[color,transform] duration-300 ease-out shrink-0 leading-none mt-1 select-none">
                    {step.number}
                  </div>
                  <div className="py-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─────────────────────────── STATS ─────────────────────────── */}
      <section className="py-28 px-6 bg-gradient-to-br from-[#020617] via-violet-900/15 to-[#020617]">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {STATS.map((stat) => (
              <ScrollReveal key={stat.label}>
                <StatCounter value={stat.value} label={stat.label} />
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─────────────────────────── CTA ─────────────────────────── */}
      <section className="py-28 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-14 text-center overflow-hidden">
              {/* Orbs inside card */}
              <div className="absolute -top-10 -left-10 w-52 h-52 bg-sky-500/20 rounded-full blur-3xl glow-pulse pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-violet-500/20 rounded-full blur-3xl glow-pulse-alt pointer-events-none" />

              <div className="relative z-10">
                <span className="text-sm font-bold text-sky-400 uppercase tracking-[0.15em] mb-4 block">
                  Parlons-en
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.1] tracking-tight">
                  Un projet en tête ?
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Décrivez-nous votre besoin, nous vous répondons sous 24 h.
                </p>
                <MagneticButton>
                  <a
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2 text-white font-bold px-9 py-4 rounded-xl text-lg group"
                  >
                    Envoyer un message
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
