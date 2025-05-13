import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono text-muted-foreground">
      <figure className="max-w-2xl xl:max-w-3xl mx-auto flex flex-col items-center gap-8 p-6">
        <figcaption className=" text-center">
          Foolish magic tricks with AI and code
        </figcaption>
        <Image
          src="/not-a-crime.png"
          alt="PromptPong"
          width={360}
          height={360}
        />
      </figure>
      <nav className="text-center">
        <h2 className="text-xl text-muted-foreground font-bold mb-2">
          Projects
        </h2>
        <ul className="text-sm space-y-2">
          <li>
            <a
              href="https://shadsnap.promptpong.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:underline"
            >
              ShadSnap: Generate shadcn/ui components from any GitHub file link
            </a>
          </li>
          <li>
            <a
              href="https://hardrockpaperscissors.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:underline"
            >
              Play Rock Paper Scissors interactively with your friends
            </a>
          </li>
          <li>
            <a
              href="https://moodydroid.chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:underline"
            >
              Chat with moody robots
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
