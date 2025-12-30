import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Digital Marketer",
    message:
      "I've always wanted to farm but didn't have the time. Agrofund Hub bridges that gap perfectly. I've funded 3 cycles of maize and the returns have been consistent.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    name: "David Okafor",
    role: "Software Engineer",
    message:
      "The transparency is what keeps me coming back. I get weekly updates on the poultry farm I invested in. It feels good to see exactly where my money is working.",
    avatar: "/avatars/david.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Accountant",
    message:
      "A secure way to diversify my portfolio. The insurance backing gives me peace of mind that my capital is safe regardless of harvest outcomes.",
    avatar: "/avatars/elena.jpg",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-[#f6fff7]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.381-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.047 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-600 text-sm mb-6">{item.message}</p>

              {/* User */}
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
