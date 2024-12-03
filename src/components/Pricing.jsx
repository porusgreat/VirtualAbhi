import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-8 border border-neutral-700 rounded-xl shadow-lg bg-neutral-900">
              <p className="text-4xl mb-6 font-bold text-center">
                {option.title}
                {option.title === "Pro" && (
                  <span className="ml-2 text-sm bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text font-medium">
                    (Most Popular)
                  </span>
                )}
              </p>
              <div className="mb-8 text-center">
                <span className="text-5xl font-bold text-orange-500">{option.price}</span>
                <span className="text-neutral-400 tracking-tight text-lg"> /Month</span>
              </div>
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-400">
                    <CheckCircle2 className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <button className="py-2 px-6 border border-orange-500 text-orange-500 rounded-full text-lg uppercase font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-200 "
                >Subscribe
                  {option.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
