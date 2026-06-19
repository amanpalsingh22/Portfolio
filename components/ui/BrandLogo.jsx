import Image from "next/image";

export default function BrandLogo({
  className = "",
  decorative = false,
  priority = false,
  sizes = "44px"
}) {
  return (
    <Image
      src="/logo.png"
      alt={decorative ? "" : "Amanpal Singh logo"}
      width={477}
      height={477}
      sizes={sizes}
      priority={priority}
      unoptimized
      draggable={false}
      aria-hidden={decorative ? true : undefined}
      className={`block select-none rounded-[18%] object-contain ${className}`}
    />
  );
}
