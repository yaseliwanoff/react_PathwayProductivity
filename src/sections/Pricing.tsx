import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
// import Image from "next/image";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="section-h2-title">Pricing</h2>
        <p className="section-description">Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>
        <div className="">
          <div className="flex flex-col gap-6 items-center mt-[30px] lg:flex-row lg:items-end lg:justify-center">
            {pricingTiers.map((pricingProduct) => (
              <div className="">
                <div className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]", pricingProduct.inverse === true && "border-black bg-black text-white")}>
                  <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-black/50">{pricingProduct.title}</h3>
                    {pricingProduct.popular === true && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/15">
                        <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-1">
                    <span className="text-4xl font-bold tracking-tighter leading-none">$ {pricingProduct.monthlyPrice}</span>
                    <span className="tracking-tight">/month</span>
                  </div>
                  <button className={twMerge("btn btn-primary w-full mt-[30px]", pricingProduct.inverse === true && "btn-light btn-primary-light")}>{pricingProduct.buttonText}</button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {pricingProduct.features.map((featuresItems) => (
                      <li className="text-sm flex items-center gap-4">
                        <CheckIcon className="h-6 w-6"></CheckIcon>
                        <span>{featuresItems}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
