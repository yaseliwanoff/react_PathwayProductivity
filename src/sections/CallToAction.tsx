"use client";
import ArrowRight from "@/assets/arrow-right.svg"
import StarImage from "@/assets/star.png";
import SprintImage from "@/assets/spring.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="text-center text-3xl font-bold md:text-[54px] md:leading-[60px] tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <motion.img 
            src={StarImage.src} 
            alt="star image" 
            width={360} 
            className="absolute -left-[350px] -top-[137px]"
            animate={{
              translateY: [-50, 10],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 5,
              ease: "easeInOut",
            }}
          />
          <motion.img 
            src={SprintImage.src} 
            alt="spring image" 
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            animate={{
              translateY: [80, -70],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="flex gap-2 mt-5 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
