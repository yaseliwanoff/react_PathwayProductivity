import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 backdrop-blur-xl z-20">
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
          <div className="inline-flex gap-1 items-center">
            <p style={{opacity: 0.6}} className="hidden md:block mr-2">Streamline your workflow and boost your productivity.</p>
            <p>Get started for free</p>
            <ArrowRight className="w-4 h-4 inline-flex justify-center inline-center"></ArrowRight>
          </div>
        </div>
        <div>
          <div className="container py-5">
            <div className="flex justify-between items-center">
              <Image src={Logo} alt="Company logo" width={40} height={40}></Image>
              <MenuIcon className="w-5 h-5 md:hidden"></MenuIcon>
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Customers</a>
                <a href="#">Updates</a>
                <a href="#">Help</a>
                <button className="btn">Get for free</button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};
