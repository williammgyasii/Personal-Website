import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronIcon, ArrowUpRightIcon } from "../icons/ChevronIcon";
import { SocialIcon } from "../icons/SocialIcons";
import { contactChannels, contactInfo } from "../../data/contact";

export function Contact() {
  const emailChannel = contactChannels.find((c) => c.featured) ?? contactChannels[0];
  const socialChannels = contactChannels.filter((c) => !c.featured);

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-16 sm:py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6">
        <motion.div
          className="rounded-2xl border border-border bg-surface p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-10 md:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs font-medium tracking-[0.14em] text-muted">CONTACT</p>
          <h2 className="mb-5 max-w-2xl text-[clamp(1.75rem,6vw,4rem)] font-semibold leading-tight tracking-tighter sm:mb-6">
            Let&apos;s build something{" "}
            <span className="text-primary">real</span>.
          </h2>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted sm:mb-10 sm:text-base">
            {contactInfo.intro}
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-4">
            <motion.a
              href={emailChannel.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-center text-sm font-medium text-white transition hover:bg-[#0077ED] sm:w-auto sm:px-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SocialIcon name={emailChannel.icon} />
              <span className="break-all sm:break-normal">{emailChannel.cta}</span>
            </motion.a>

            <div className="flex flex-wrap gap-4 sm:gap-5">
              {socialChannels.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-xs font-medium tracking-tight text-muted transition hover:text-primary sm:text-sm"
                >
                  <SocialIcon name={link.icon} />
                  {link.label}
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              ))}
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center gap-1 text-xs font-medium tracking-tight text-primary sm:text-sm"
              >
                Full contact page
                <ChevronIcon direction="right" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
