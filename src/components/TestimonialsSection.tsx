const testimonials = [
  {
    name: "Nate Samson",
    role: "Car Owner",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "Car-diology saved me when my engine broke down on the highway at midnight. A mechanic arrived in under 10 minutes. Absolutely incredible service!",
    avatar: "NS",
  },
  {
    name: "Caroline Washington",
    role: "Certified Mechanic",
    location: "Muscat, Oman",
    rating: 5,
    text: "As a mechanic, Car-diology has transformed my business. I get consistent bookings, fair pay, and the app makes managing my schedule so easy.",
    avatar: "CW",
  },
  {
    name: "Muhammed Suhail",
    role: "Spare Parts Supplier",
    location: "Muscat, Oman",
    rating: 5,
    text: "Our parts sales tripled after joining Car-diology. The platform connects us with the right customers and the inquiry system is seamless.",
    avatar: "MS",
  },
  {
    name: "Arianna Washington",
    role: "Fleet Manager",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "Managing 20+ company vehicles used to be a nightmare. Car-diology's business plan gives us everything in one place. Game changer!",
    avatar: "AW",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest mb-4">Trusted by Thousands</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
            What our users<br />
            <span className="text-neutral-400">are saying.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-black p-8 hover:bg-neutral-950 transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white leading-relaxed mb-8 text-base font-medium">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-sm font-black">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{testimonial.name}</p>
                  <p className="text-neutral-500 text-xs">{testimonial.role} · {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators — Uber style horizontal stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-900">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "500+", label: "Certified Mechanics" },
            { value: "200+", label: "Spare Parts Suppliers" },
            { value: "4.9★", label: "Average App Rating" },
          ].map((stat) => (
            <div key={stat.label} className="bg-black p-8 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-neutral-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
