import Image from "next/image";

export default function Home() {
  return (
    <figure className="max-w-2xl xl:max-w-3xl mx-auto font-mono flex flex-col items-center gap-8 p-6">
      <Image src="/not-a-crime.png" alt="PromptPong" width={400} height={400} />
      <figcaption className="text-muted-foreground text-center">
        Foolish magic tricks with AI and code
      </figcaption>
    </figure>
  );
}
