import type { HTMLAttributes } from "react";
import Image from "next/image";
import clsx from "clsx";

export function Logo({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <span className={clsx("yomi-logo inline-flex items-center", className)} {...props}>
      <Image
        src={`${basePath}/yomi-studio-logo.png`}
        alt="YOMI Studio"
        width={1706}
        height={747}
        className="yomi-logo__image"
      />
    </span>
  );
}
