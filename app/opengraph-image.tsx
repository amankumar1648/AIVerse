import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "AIVerse - Discover the Best AI Tools";

export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          color: "white",
          fontSize: 80,
          fontWeight: 700,
        }}
      >
        <div>AIVerse 🚀</div>

        <div
          style={{
            fontSize: 40,
            marginTop: 30,
          }}
        >
          Discover the Best AI Tools
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

