import Link from "next/link";
import { X } from "lucide-react";

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm p-8">
      <Link
        href="/"
        className="absolute top-4 right-4 text-muted-foreground hover:text-white"
      >
        <X className="w-6 h-6" />
      </Link>
      {children}
    </div>
  );
}
