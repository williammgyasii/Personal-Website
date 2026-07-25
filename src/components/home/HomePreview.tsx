import { Link } from "react-router-dom";
import { ExperienceSection } from "./ExperienceSection";
import { WhatIOfferSection } from "./WhatIOfferSection";

export function HomePreview() {
  return (
    <>
      <ExperienceSection />
      <WhatIOfferSection />

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a product to ship?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-muted">
            Full time, contract, or co build. Open to conversations with teams that care about shipping, not just planning.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center rounded-full border border-primary bg-primary/10 px-8 text-xs font-medium text-primary transition hover:bg-primary hover:text-black"
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </>
  );
}
