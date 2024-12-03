import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-md text-md border border-neutral-800 p-6 max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start mb-4">
              <img
                className="w-12 h-12 mr-4 rounded-full border border-neutral-300"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <p className="text-orange-500 font-medium">{testimonial.user}</p>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-neutral-400">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
