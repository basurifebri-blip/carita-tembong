import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/** Web app manifest — warm paper background, deep pine theme. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Tembong",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ec",
    theme_color: "#2f5a4c",
    lang: "id-ID",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
