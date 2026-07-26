import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SocialIcon, type SocialIconName } from "../icons/SocialIcons";
import { site } from "../../data/site";
import { FooterBackground } from "./FooterBackground";

type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/williammgyasii", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/williammgyasii", icon: "linkedin" },
  { label: "Email", href: `mailto:${site.email}`, icon: "email" },
];

function SocialLinkButton({ social }: { social: SocialLink }) {
  const isMail = social.href.startsWith("mailto:");

  return (
    <motion.a
      href={social.href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      aria-label={social.label}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/85 backdrop-blur-sm transition-colors hover:border-primary/60 hover:bg-primary hover:text-white"
    >
      <SocialIcon name={social.icon} />
    </motion.a>
  );
}

export function Footer() {
  return (
    <section className="px-4 pb-10 pt-2 sm:px-6 sm:pb-14">
      <motion.footer
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1d1d1f] shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
      >
        <FooterBackground />

        <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col items-center text-center">
            <p className="text-[10px] font-medium tracking-[0.2em] text-white/45">CONNECT</p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              William Gyasi
            </p>
            <p className="mt-1 text-sm text-white/55">{site.roles[0]}</p>

            <div className="mt-7 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
              {socialLinks.map((social) => (
                <SocialLinkButton key={social.label} social={social} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/40">
              <Link to="/contact" className="transition hover:text-primary">
                Get in touch
              </Link>
              <span aria-hidden="true">·</span>
              <span>{site.availability}</span>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-[11px] text-white/35">
            © {site.year} William Gyasi
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
