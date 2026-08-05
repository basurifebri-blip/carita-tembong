import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} - ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded Open Graph card: deep pine ground, gold accent, editorial wordmark. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #20423a 0%, #2f5a4c 62%, #274c40 100%)",
          color: "#f7f4ec",
          fontFamily: "sans-serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c6a35f",
          }}
        >
          Wilujeng Sumping di Tembong
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            marginTop: 22,
            letterSpacing: 3,
          }}
        >
          CARITA TEMBONG
        </div>
        <div
          style={{
            width: 132,
            height: 4,
            background: "#c6a35f",
            borderRadius: 2,
            marginTop: 30,
          }}
        />
        <div style={{ fontSize: 46, marginTop: 30 }}>
          Setiap Sudut Punya Cerita
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 46,
            color: "rgba(247, 244, 236, 0.72)",
          }}
        >
          Desa Tembong · Kecamatan Carita · Pandeglang, Banten
        </div>
      </div>
    ),
    { ...size },
  );
}
