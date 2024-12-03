import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Welcome To{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Abhi's Profile
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Abhishek Nandlal Mule is an engineering student, writer, and cybersecurity enthusiast from India. 
        Author of Swaraj and a Marathi poetry collection, he explores music, web development, and women’s safety initiatives, blending creativity with innovation.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Join With Us
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-orange-700 shadow-md mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-orange-700 shadow-md mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
