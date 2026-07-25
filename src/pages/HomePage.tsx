import { Hero } from "../components/home/Hero";
import { ScrollStorySection } from "../components/home/ScrollStorySection";
import { SelectedWorks } from "../components/home/SelectedWorks";
import { HomePreview } from "../components/home/HomePreview";
import { site } from "../data/site";

export function HomePage() {
  return (
    <>
      <Hero />
      <ScrollStorySection statement={site.scrollStatement} marquee={site.scrollMarquee} />
      <SelectedWorks />
      <HomePreview />
    </>
  );
}
