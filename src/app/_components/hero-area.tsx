// src/app/_components/hero.tsx
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import nextConfig from "../../../next.config.js";

const BASE_PATH = nextConfig.basePath || "";

export default function HeroArea() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 画像のパスを配列で管理
  const images = [
    `{${BASE_PATH}/assets/hero2.jpg}}`,
    `/assets/hero3.jpg`,
    `/assets/hero.jpg`,
  ];

  // リンクのパスを配列で管理
  const links = [
    `/link1`,  // 1つ目の画像に対応するリンク先
    `/link2`,  // 2つ目の画像に対応するリンク先
    `/link3`,  // 3つ目の画像に対応するリンク先
  ];

  // スライドのインデックスを更新するためのエフェクト
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());

    // イベントリスナーの登録
    emblaApi.on("select", onSelect);

    // クリーンアップ関数を返す
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi]);

  const goToSlide = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container max-h-[420px]">
          {images.map((src, index) => (
            <div key={index} className="embla__slide">
              <Link href={links[index]} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
