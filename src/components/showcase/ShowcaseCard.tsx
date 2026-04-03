import Link from "next/link";

type ShowcaseCardProps = {
  title: string;
  description: string;
  href: string;
  preview: React.ReactNode;
};

export function ShowcaseCard({
  title,
  description,
  href,
  preview,
}: ShowcaseCardProps) {
  return (
    <div className="w-[36rem] bg-black/80 text-gray-300 rounded-3xl p-6 hover:shadow-lg transition cursor-pointer m-2">
      {/* Title on top */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Two-column body */}
      <div className="flex gap-4">
        {/* Left: description */}
        <p className="text-sm flex-1">{description}</p>

        {/* Right: preview */}
        <div className="w-64 h-32 bg-black rounded-md overflow-hidden">
          {preview}
        </div>
      </div>

      {/* Link at bottom */}
      <Link href={href} className="block mt-4 text-blue-600 hover:underline">
        View Showcase →
      </Link>
    </div>
  );
}
