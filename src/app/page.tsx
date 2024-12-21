import { BoxWrapper, ModeToggle } from "@/components/global";
import { Hero } from "@/components/pages/home";

export default function Home() {
  return (
    <BoxWrapper>
      <ModeToggle />
      <main className="">
        <Hero />
      </main>
    </BoxWrapper>
  );
}
