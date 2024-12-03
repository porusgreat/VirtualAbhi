import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}your website
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center bg-neutral-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex mx-6 h-16 w-16 p-2 bg-neutral-800 text-orange-500 justify-center items-center rounded-full">
                {feature.icon}  {/* Assuming feature.icon is a component */}
              </div>
              <h5 className="mt-6 text-xl text-orange-500">{feature.text}</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p> {/* Added description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
