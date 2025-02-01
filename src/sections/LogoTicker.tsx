import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import PulseLogo from "@/assets/logo-pulse.png";
import EchoLogo from "@/assets/logo-echo.png";
import ApexLogo from "@/assets/logo-apex.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="container">
      <div>
        <Image src={AcmeLogo} alt="Acme"></Image>
        <Image src={QuantumLogo} alt="Quantum"></Image>
        <Image src={PulseLogo} alt="Pulse"></Image>
        <Image src={EchoLogo} alt="Echo"></Image>
        <Image src={ApexLogo} alt="Apex"></Image>
        <Image src={CelestialLogo} alt="Celestial"></Image>
      </div>
    </div>
  );
};
