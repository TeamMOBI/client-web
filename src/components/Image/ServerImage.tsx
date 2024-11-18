import Image from "next/image";
import { ImageProps } from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ServerImageProps extends ImageProps {
  fallback: string;
}

export const ServerImage = async ({
  src,
  alt,
  fallback,
  ...props
}: ServerImageProps) => {
  const imgSrc = await getImageSrc(src, fallback);

  return <Image src={imgSrc} alt={alt || ""} {...props} />;
};

async function getImageSrc(src: string | StaticImport, fallback: string) {
  if (typeof src === "object") return src;
  if (!src) return fallback;

  if (src.startsWith("http") || src.startsWith("//")) {
    const isExistImg = await checkRemoteImageExist(src);
    return isExistImg ? src : fallback;
  }

  const localImgPath = path.join(process.cwd(), "public", src);
  const isExistImg = await checkLocalImageExist(localImgPath);

  return isExistImg ? src : fallback;
}

async function checkLocalImageExist(src: string) {
  try {
    await fs.access(src, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function checkRemoteImageExist(src: string) {
  try {
    const response = await fetch(src, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
