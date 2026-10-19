
"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 36, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const education = [
  {
    number: "01",
    period: "FOUNDATION",
    title: "Matric",
    school: "New Era Acadmey",
    note: "Equivalent to Matric",
    state: "COMPLETED",
  },
  {
    number: "02",
    period: "NEXT CHAPTER",
    title: "Inter",
    school: "College",
    note: "Equivalent to Intermediate",
    state: "COMPLETED",
  },
  {
    number: "03",
    period: "THE PRESENT",
    title: "Bachelor’s degree",
    school: "Iqra University",
    note: "Just getting started.",
    state: "IN PROGRESS",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span className="label-number">{number}</span>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = value.includes("@")
        ? `mailto:${value}`
        : `tel:${value}`;
    }
  }

  return (
    <motion.button
      className={`copy-btn ${copied ? "is-copied" : ""}`}
      onClick={copy}
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      {copied ? "COPIED ✓" : "COPY ↗"}
    </motion.button>
  );
}

function GoldButton({ href, children, secondary = false }) {
  return (
    <motion.a
      className={`lux-button ${secondary ? "lux-button-outline" : ""}`}
      href={href}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
    >
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">
        ↗
      </span>
    </motion.a>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const motionProps = reduceMotion
    ? { initial: false }
    : {};

  return (
    <main className="portfolio">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
      />

      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="topbar wrap">
        <a className="brand" href="#home" aria-label="Back to top">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span className="brand-name">
            Saad Shah
            <small>STUDENT PORTFOLIO · 2026</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#languages">Languages</a>
          <a className="nav-contact" href="#contact">
            Let’s connect <span>↗</span>
          </a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="status-dot" />
            <span>OPEN TO LEARNING</span>
            <span className="eyebrow-divider">/</span>
            <span>CLASS OF 2026</span>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="hero-title-wrap"
          >
            <motion.p variants={reveal} className="hero-kicker">
              THE NEXT CHAPTER BEGINS
            </motion.p>

            <motion.h1 variants={reveal}>
              Syed Saad
              <br />
              <span>Ahmed Shah</span>
              <b>.</b>
            </motion.h1>
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease }}
          >
            New to university. Curious about everything.
            <br className="desktop-break" /> Ready to discover what comes next.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease }}
          >
            <GoldButton href="#about">Discover my story</GoldButton>
            <a className="text-link" href="#education">
              Explore my journey <span>↗</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-footnote"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            <span>EST. 2026</span>
            <span className="foot-line" />
            <span>KARACHI, PAKISTAN</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.88, rotate: 4 }
          }
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          aria-label="Abstract gold monogram artwork"
        >
          <div className="art-outer-ring" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />
          <div className="art-glow" />

          <motion.div
            className="art-center"
            animate={
              reduceMotion
                ? {}
                : { y: [0, -8, 0], rotate: [0, 1, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="art-monogram">S</span>
            <span className="art-monogram-dot">.</span>
            <span className="art-center-line" />
            <small>THE JOURNEY</small>
            <small>STARTS HERE</small>
          </motion.div>

          <motion.div
            className="orbit-spark"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            ✳
          </motion.div>

          <span className="art-tag tag-top">A MIND IN MOTION</span>
          <span className="art-tag tag-bottom">LEARN · BUILD · GROW</span>
          <span className="art-index">FIG. 001 — SS</span>

          <motion.div
            className="floating-note"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease }}
          >
            <span className="note-icon">✳</span>
            <span>
              CURRENTLY EXPLORING
              <small>University life & new ideas</small>
            </span>
          </motion.div>
        </motion.div>

        <a href="#about" className="scroll-cue">
          <span className="scroll-wheel" />
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-cue-arrow">↓</span>
        </a>
      </section>

      <section className="intro-strip" aria-label="Personal motto">
        <div className="wrap strip-inner">
          <span>CURIOUS BY NATURE</span>
          <i>✳</i>
          <span>READY TO LEARN</span>
          <i>✳</i>
          <span>JUST GETTING STARTED</span>
          <i>✳</i>
          <span>IQRA UNIVERSITY</span>
        </div>
      </section>

      <section className="section wrap about-section" id="about">
        <Reveal className="section-heading">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <h2>
            Every expert was
            <br />
            once a <em>beginner.</em>
          </h2>
          <p className="section-description">
            A new chapter, a new perspective, and plenty left to discover.
          </p>
        </Reveal>

        <Reveal className="about-content">
          <div className="about-marker">“</div>
          <div className="about-copy">
            <p className="about-lead">
              I’m a fresh university student beginning my bachelor’s degree
              at Iqra University.
            </p>
            <p className="about-body">
              I’m at the start of a new chapter — curious, open-minded, and
              excited to learn from my classes, my teachers, and the people I
              meet along the way. I believe growth starts with asking
              questions, staying consistent, and being willing to try.
            </p>

            <div className="signature-line">
              <span className="signature">Saad Shah</span>
              <span className="signature-caption">
                A WORK IN PROGRESS, BY DESIGN
              </span>
            </div>
          </div>
        </Reveal>

        <div className="about-stats">
          {[
            ["01", "A FRESH CHAPTER"],
            ["∞", "ROOM TO GROW"],
            ["2026", "THE BEGINNING"],
          ].map(([value, label], index) => (
            <Reveal key={label} delay={index * 0.08}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="wrap section education-wrap">
          <Reveal className="section-heading">
            <SectionLabel number="02">THE ROAD SO FAR</SectionLabel>
            <h2>
              One step at a time.
              <br />
              <em>Always forward.</em>
            </h2>
            <p className="section-description">
              Every stage has taught me something different. Here’s where the
              journey has taken me — and where it’s heading.
            </p>
          </Reveal>

          <div className="timeline">
            {education.map((item, index) => (
              <motion.article
                className={`education-card ${
                  index === 2 ? "current" : ""
                }`}
                key={item.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{ delay: index * 0.13 }}
                whileHover={reduceMotion ? {} : { x: 7 }}
              >
                <div className="edu-number">{item.number}</div>

                <div className="edu-main">
                  <span className="edu-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="edu-school">{item.school}</p>
                  <p className="edu-note">{item.note}</p>
                </div>

                <div className="edu-status">
                  <span
                    className={
                      index === 2 ? "status-dot" : "status-check"
                    }
                  >
                    {index === 2 ? "" : "✓"}
                  </span>
                  {item.state}
                </div>

                <motion.span
                  className="edu-arrow"
                  whileHover={{ rotate: 45 }}
                >
                  ↗
                </motion.span>
              </motion.article>
            ))}
          </div>

          <div className="timeline-foot">
            <span>THERE’S MORE TO COME</span>
            <span className="timeline-foot-line" />
            <span>03 / 03</span>
          </div>
        </div>
      </section>

      <section className="section wrap languages-section" id="languages">
        <Reveal className="section-heading">
          <SectionLabel number="03">WORDS CONNECT US</SectionLabel>
          <h2>
            More than words.
            <br />
            <em>Ways to connect.</em>
          </h2>
          <p className="section-description">
            Language is how we share ideas, understand perspectives, and find
            common ground.
          </p>
        </Reveal>

        <div className="language-grid">
          {[
            {
              code: "UR / 01",
              glyph: "اردو",
              language: "Urdu",
              score: 9,
              rating: "CONFIDENT",
              width: "90%",
              description:
                "My first language. A natural part of how I express myself.",
              className: "",
            },
            {
              code: "EN / 02",
              glyph: "Aa",
              language: "English",
              score: 6,
              rating: "GROWING",
              width: "60%",
              description:
                "A skill I’m continuing to build with practice and everyday learning.",
              className: "language-card-alt",
            },
          ].map((item, index) => (
            <motion.article
              className={`language-card ${item.className}`}
              key={item.language}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12 }}
              whileHover={reduceMotion ? {} : { y: -7 }}
            >
              <div className="language-top">
                <span className="language-code">{item.code}</span>
                <span
                  className={`language-glyph ${
                    item.language === "Urdu" ? "urdu" : ""
                  }`}
                  lang={item.language === "Urdu" ? "ur" : "en"}
                >
                  {item.glyph}
                </span>
              </div>

              <h3>{item.language}</h3>

              <div className="language-rating">
                <strong>
                  {item.score}
                  <span>/10</span>
                </strong>
                <span>{item.rating}</span>
              </div>

              <div
                className="rating-track"
                role="progressbar"
                aria-label={`${item.language} self-assessed proficiency`}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-valuenow={item.score}
              >
                <motion.div
                  className="rating-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: item.width }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.4,
                    delay: 0.2 + index * 0.18,
                    ease,
                  }}
                />
              </div>

              <p>{item.description}</p>
              <span className="language-card-index">
                0{index + 1} / 02
              </span>
            </motion.article>
          ))}
        </div>
        <p className="language-disclaimer">
          Language ratings are personal estimates.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-aura" aria-hidden="true" />

        <div className="wrap contact-wrap">
          <Reveal className="contact-heading">
            <SectionLabel number="04">START A CONVERSATION</SectionLabel>
            <h2>
              Good things
              <br />
              start with <em>hello.</em>
            </h2>
            <p>
              Have a thought, an idea, or just want to say hi? I’d be happy to
              connect.
            </p>

            <div className="contact-mini-note">
              <span className="status-dot" />
              ALWAYS OPEN TO NEW IDEAS
            </div>
          </Reveal>

          <Reveal className="contact-panel" delay={0.12}>
            <div className="contact-panel-top">
              <span>MY CONTACT DETAILS</span>
              <span className="contact-star">✳</span>
            </div>

            <div className="contact-row">
              <div className="contact-icon">↗</div>
              <div className="contact-detail">
                <span>PHONE</span>
                <strong>03191133292</strong>
              </div>
              <CopyButton value="03161110512" />
            </div>

            <div className="contact-row">
              <div className="contact-icon">@</div>
              <div className="contact-detail">
                <span>EMAIL</span>
                <strong>saadshahpervezahmed@gmail.com.</strong>
              </div>
              <CopyButton value="saadshahpervezahmed@gmail.com." />
            </div>

            <motion.a
              className="email-cta"
              href="mailto:saadshahpervezahmed@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send me an email</span>
              <span>↗</span>
            </motion.a>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              s<span>.</span>
            </span>
            <span className="brand-name">
              SYED SAAD AHMED SHAH
              <small>STUDENT · IQRA UNIVERSITY</small>
            </span>
          </a>

          <p>Still learning. Always growing.</p>
          <a className="back-top" href="#home">
            BACK TO TOP ↑
          </a>
        </div>

        <div className="wrap footer-bottom">
          <span>© 2026 SYED SAAD AHMED SHAH</span>
          <span>
            MADE WITH CURIOSITY <b>✳</b>
          </span>
          <span>KARACHI, PAKISTAN</span>
        </div>
      </footer>
    </main>
  );
}
