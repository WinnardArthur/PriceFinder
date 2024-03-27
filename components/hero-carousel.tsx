"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselImages = [
  {
    imageUrl: "/assets/images/hero-1.svg",
    alt: "smartwatch",
  },
  {
    imageUrl: "/assets/images/hero-2.svg",
    alt: "bag",
  },
  {
    imageUrl: "/assets/images/hero-3.svg",
    alt: "lamp",
  },
  {
    imageUrl: "/assets/images/hero-4.svg",
    alt: "air fryer",
  },
  {
    imageUrl: "/assets/images/hero-5.svg",
    alt: "chair",
  },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {carouselImages.map((item) => (
          <Image
            key={item.alt}
            src={item.imageUrl}
            alt={item.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0"
      />
    </div>
  );
};

export default HeroCarousel;
