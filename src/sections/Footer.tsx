import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import Instagram from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pinterest from "@/assets/social-pin.svg";
import YouTube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="bg-black text-white/50 text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:absolute before:content-[''] before:top-2 before:inset-x-0 before:h-px before:blur-[8px] before:bg-[linear-gradient(to_right,#F87BFF_0%,#FB92CF_25%,#FFDD9B_50%,#C2F0B1_75%,#2FD8FE_100%)]">
          <Image src={Logo} alt="company logo" width={40} height={40} className="relative"></Image>
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX></SocialX>
          <Instagram></Instagram>
          <Linkedin></Linkedin>
          <Pinterest></Pinterest>
          <YouTube></YouTube>
        </div>
        <p className="mt-6">&copy; 2025 Your Company, Inc. All rights reserved.</p>
      </div>
    </section>
  );
};
