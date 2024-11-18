import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kyeongin.com",
      },
      {
        protocol: "https",
        hostname: "www.chosun.com",
      },
      {
        protocol: "https",
        hostname: "minio.nculture.org",
      },
      {
        protocol: "https",
        hostname: "i.namu.wiki",
      },
      {
        protocol: "https",
        hostname: "museum.seoul.go.kr",
      },
      {
        protocol: "https",
        hostname: "www.koreaimg.com",
      },
      {
        protocol: "https",
        hostname: "mblogthumb-phinf.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "test-resize-image.wishbeen.co.kr",
      },
      {
        protocol: "https",
        hostname: "hangang.seoul.go.kr",
      },
      {
        protocol: "https",
        hostname: "www.kyeongin.com",
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
