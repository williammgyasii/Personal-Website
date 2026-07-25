import { Hero } from "../components/home/Hero";
import { SelectedWorks } from "../components/home/SelectedWorks";
import { HomePreview } from "../components/home/HomePreview";

export function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <HomePreview />
    </>
  );
}
