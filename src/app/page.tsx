import { AboutMe, Header, ContactMe, Project } from "@/components/";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 pb-24 sm:px-8">
      <Header />
      <AboutMe />
      <Background />
      <Project />
      <ContactMe />
    </main>
  );
}
