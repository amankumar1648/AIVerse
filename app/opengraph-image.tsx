import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "70px",
          fontWeight: "bold",
        }}
      >
        <div>AIVerse</div>
        <div
          style={{
            fontSize: "40px",
            marginTop: "20px",
          }}
        >
          Discover The Best AI Tools
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

