"use server";

import { cookies } from "next/headers";
import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const setCookie = (
  key: string,
  value: string,
  options: Partial<ResponseCookie>
) => {
  return cookies().set("access_token", value, options);
};

export const getCookie = (key: string) => {
  return cookies().get(key)?.value;
};

export const removeCookie = (key: string) => {
  cookies().delete(key);
};
