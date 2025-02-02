import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import PulseLogo from "@/assets/logo-pulse.png";
import EchoLogo from "@/assets/logo-echo.png";
import ApexLogo from "@/assets/logo-apex.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12 ">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image draggable={false} src={AcmeLogo} alt="Acme" width={100} height={100} className="logo-ticker-image" />
            <Image draggable={false} src={QuantumLogo} alt="Quantum" width={100} height={100} className="logo-ticker-image" />
            <Image draggable={false} src={PulseLogo} alt="Pulse" width={100} height={100} className="logo-ticker-image" />
            <Image draggable={false} src={EchoLogo} alt="Echo" width={100} height={100} className="logo-ticker-image" />
            <Image draggable={false} src={ApexLogo} alt="Apex" width={100} height={100} className="logo-ticker-image" />
            <Image draggable={false} src={CelestialLogo} alt="Celestial" width={100} height={100} className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
