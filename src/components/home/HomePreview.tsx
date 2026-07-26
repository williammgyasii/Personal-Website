import { Link } from "react-router-dom";
import { ChevronIcon } from "../icons/ChevronIcon";
import { ExperienceSection } from "./ExperienceSection";
import { WhatIOfferSection } from "./WhatIOfferSection";

export function HomePreview() {
  return (
    <>
      <ExperienceSection />
      <WhatIOfferSection />

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a product to ship?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Full time, contract, or co build. Open to conversations with teams that care about shipping.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
            >
              Get in touch
              <ChevronIcon direction="right" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
