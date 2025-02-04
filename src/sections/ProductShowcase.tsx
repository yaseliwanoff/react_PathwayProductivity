"use client";
import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
    const translateYSecond = useTransform(scrollYProgress, [0, 1], [-150, 150])

  return (
    <section ref={heroRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl font-bold md:text-[54px] md:leading-[60px] tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-3 lg:mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] mt-5 tracking-tight text-[#010D3E]">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <div className="relative flex justify-center mt-10">
            <Image draggable={false} className="w-full h-full" src={ProductImage} alt="product image" />
            <motion.img
              className="hidden md:block absolute -right-36 -top-32"
              width={262}
              height={262}
              draggable={false}
              src={PyramidImage.src}
              alt="pyramid image"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              className="hidden md:block absolute bottom-24 -left-36"
              draggable={false}
              width={248}
              height={248}
              src={TubeImage.src}
              alt="tube image"
              style={{
                translateY: translateYSecond,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
