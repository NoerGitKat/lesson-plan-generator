import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="py-20 md:py-28 text-center">
      <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl">
        Create <span className="text-blue-400 dark:text-yellow-400">engaging</span> lesson plans{" "}
        <i className="font-extrabold">in seconds</i>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
        Accelerate your teaching with AI-powered lesson plans tailored to your needs.
      </p>
      <aside className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Get started for free
        </Link>
        <Link href="/pricing" className={buttonVariants({ variant: "ghost" })}>
          View pricing plans
        </Link>
      </aside>
    </section>
  );
}

export default Hero;
