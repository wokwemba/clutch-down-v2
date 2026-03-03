const testimonials = [
  {
    name: "Nate Samson",
    role: "Car Owner",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "Car-diology saved me when my engine broke down on the highway at midnight. A mechanic arrived in under 10 minutes. Absolutely incredible service!",
    avatar: "NS",
    color: "bg-red-500",
  },
  {
    name: "Caroline Washington",
    role: "Certified Mechanic",
    location: "Muscat, Oman",
    rating: 5,
    text: "As a mechanic, Car-diology has transformed my business. I get consistent bookings, fair pay, and the app makes managing my schedule so easy.",
    avatar: "CW",
    color: "bg-blue-500",
  },
  {
    name: "Muhammed Suhail",
    role: "Spare Parts Supplier",
    location: "Muscat, Oman",
    rating: 5,
    text: "Our parts sales tripled after joining Car-diology. The platform connects us with the right customers and the inquiry system is seamless.",
    avatar: "MS",
    color: "bg-green-500",
  },
  {
    name: "Arianna Washington",
    role: "Fleet Manager",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "Managing 20+ company vehicles used to be a nightmare. Car-diology's business plan gives us everything in one place. Game changer!",
    avatar: "AW",
    color: "bg-purple-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-red-400 text-sm font-medium">Trusted by Thousands</span>
          </div>
          <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From car owners to mechanics and suppliers — everyone loves Car-diology.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-neutral-300 leading-relaxed mb-6 text-sm sm:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-neutral-500 text-xs">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "500+", label: "Certified Mechanics" },
            { value: "200+", label: "Spare Parts Suppliers" },
            { value: "4.9★", label: "Average App Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-neutral-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
