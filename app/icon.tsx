import { ImageResponse } from "next/og";

// Generated rather than a static .ico so the monogram stays in sync with the
// site's accent color. Note: `favicon` cannot be code-generated — only `icon`.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Light-mode --accent; reads clearly against both light and dark tab bars.
          background: "#4f52d9",
          // Matches the rounded-[13px] on the 56px app icons in page.tsx.
          borderRadius: 15,
          color: "#ffffff",
          // ImageResponse ships Geist Regular only, so no bold is available —
          // size and tight tracking carry the weight instead.
          fontSize: 34,
          letterSpacing: -1.5,
        }}
      >
        MG
      </div>
    ),
    size,
  );
}
