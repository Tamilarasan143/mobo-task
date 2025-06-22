import CTA from "@/components/CTA";
import FeaturedShows from "@/components/FeaturedShows";
import Hero from "@/components/Hero";
import JobGrid from "@/components/JobGrid";
import RoleCards from "@/components/RoleCards";
import ServiceTiles from "@/components/ServiceTiles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTiles />
      <JobGrid />
      <FeaturedShows/>
      <RoleCards/>
      <CTA/>
    </>
  );
}
