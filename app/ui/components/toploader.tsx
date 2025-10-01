"use client";
import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#06A35A"
      height={3}
      crawl={true}
      crawlSpeed={200}
      showSpinner={false}
      shadow="0 0 10px #06A35A, 0 0 5px #06A35A"
      easing="ease"
      speed={400}
    />
  );
}
