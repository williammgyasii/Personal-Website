import { Link } from "react-router-dom";
import { stats } from "../../data/home";
import { services } from "../../data/services";
import { ExperienceSection } from "./ExperienceSection";

export function HomePreview() {
  return (
    <>
      <ExperienceSection />

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-xs text-muted">ABOUT</p>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                I build products people pay for
              </h2>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted">
                Full-stack engineer with six live products across AI SaaS, mobile, and
                marketplaces. I own the stack from PostgreSQL schema to Stripe billing
                to the deploy that puts it in users&apos; hands.
              </p>
              <Link
                to="/about"
                className="inline-flex h-10 items-center rounded-full border border-border px-5 text-xs font-medium transition hover:border-primary hover:text-primary"
              >
                READ FULL BIO →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border p-4">
                  <p className="text-3xl font-semibold text-primary">{stat.number}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <p className="mb-2 text-xs text-muted">SERVICES</p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            What I build
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="rounded-xl border border-border p-5">
                <h3 className="mb-2 font-semibold">{service.title}</h3>
                <p className="text-sm text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a product to ship?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-muted">
            Full-time, contract, or co-build—I&apos;m open to conversations with teams
            that care about shipping, not just planning.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center rounded-full border border-primary bg-primary/10 px-8 text-xs font-medium text-primary transition hover:bg-primary/20"
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </>
  );
}
