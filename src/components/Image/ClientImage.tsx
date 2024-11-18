"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ClientImageProps extends ImageProps {
  fallback: string;
}

const ClientImage = ({ src, alt, fallback, ...props }: ClientImageProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? fallback : src}
      {...props}
    />
  );
};
export default ClientImage;
