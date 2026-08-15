import Image from "next/image";

export function ImageSlot({
  src,
  alt,
  label,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  src?: string;
  alt?: string;
  label?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-2 border-current bg-white ${ratio} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover object-center grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
        />
      ) : (
        <>
          <span className="texture-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <span className="relative font-mono text-[0.7rem] tracking-widest opacity-50">
            [IMG: {label ?? "PLACEHOLDER"}]
          </span>
        </>
      )}
    </div>
  );
}