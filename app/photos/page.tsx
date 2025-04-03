import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section className="p-4">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Photo 1",
            href: "",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Photo 2",
            href: "",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Photo 3",
            href: "",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "Photo 4",
            href: "",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Photo 5",
            href: "",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Photo 6",
            href: "",
          },
          {
            src: "/photos/photo7.jpg",
            alt: "Photo 7",
            href: "",
          },
          {
            src: "/photos/photo8.jpg",
            alt: "Photo 8",
            href: "",
          },
          {
            src: "/photos/photo9.jpg",
            alt: "Photo 9",
            href: "",
          },
        ]}
      />
    </section>
  );
}
