import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container">
      <p className="font-bold text-5xl leading-10 text-primary">Starting Page</p>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modal Example</DialogTitle>
            <DialogDescription>Here goes modal descriprion</DialogDescription>
          </DialogHeader>

          <DialogFooter>Here goes modal footer</DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
