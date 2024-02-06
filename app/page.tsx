import { ModeToggle } from "@/components/ui/modde-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className="font-bold text-5xl leading-10 text-primary">Starting Page</p>
      <ModeToggle />
    </main>
  );
}
