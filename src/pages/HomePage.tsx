import { Hero } from "../components/home/Hero";
import { ScrollStorySection } from "../components/home/ScrollStorySection";
import { SelectedWorks } from "../components/home/SelectedWorks";
import { HomePreview } from "../components/home/HomePreview";
import { Seo } from "../components/layout/Seo";
import { site } from "../data/site";

export function HomePage() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <ScrollStorySection statement={site.scrollStatement} marquee={site.scrollMarquee} />
      <SelectedWorks />
      <HomePreview />
    </>
  );
}
