import Hero from "./pages/hero";
import Impact from "./pages/impact";
import Mission from "./pages/mission";
import Purpose from "./pages/purpose";
import Solutions from "./pages/solutions";
import Team from "./pages/team";
import Why from "./pages/why";

export default function Home() {
  return (
    <div className="relative z-20 m-auto flex min-h-[calc(100vh-var(--header-height))] w-full flex-col gap-2 overflow-x-hidden bg-background">
      <Hero />
      <Purpose />
      <Mission />
      <Solutions />
      <Why />
      <Impact />
      <Team />
    </div>
  );
}
