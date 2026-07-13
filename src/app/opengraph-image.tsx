import { ImageResponse } from "next/og";

export const alt = "Rozhan Ahmadifar — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fcfbf8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "#04342c",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "#e1f5ee",
                color: "#04342c",
                fontSize: 96,
                fontWeight: 700,
              }}
            >
              RA
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 700, color: "#14201c" }}>
              Rozhan Ahmadifar
            </div>
            <div style={{ fontSize: 32, color: "#0f6e56", marginTop: 12 }}>
              Product Designer · UX Design
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
