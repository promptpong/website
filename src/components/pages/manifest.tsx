import { Quote } from "lucide-react";

const Manifest = () => {
  return (
    <div className="space-y-4 text-center text-lg">
      <p>
        And if you want to weoh, weoh!
        <br />
        Just weoh, weoh hoh!
      </p>
      <p>
        If you want to tralala!
        <br />
        Just tralala!
      </p>
      <p>
        If you want to booh hooh!
        <br />
        Just booh hooh hooh!
      </p>
      <p>
        And if you want to salama, salama
        <br />
        Just salama, salama!
      </p>
      <p>
        But do it now, don&apos;t doubt
        <br />
        Timing is the answer...
      </p>
      <blockquote className="flex items-center justify-center gap-2 text-muted-foreground pl-4">
        <Quote className="w-4 h-4" />
        Kevin Johansen
      </blockquote>
    </div>
  );
};

export default Manifest;
