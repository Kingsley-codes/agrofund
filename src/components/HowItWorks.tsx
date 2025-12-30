import { Step } from "@/types";

const steps: Step[] = [
  {
    icon: "search",
    title: "1. Browse Opportunities",
    description:
      "Explore our curated list of vetted farms and livestock projects. Filter by duration, ROI, and capital type.",
  },
  {
    icon: "verified_user",
    title: "2. Invest Securely",
    description:
      "Choose a project and invest. Your capital is backed by comprehensive agricultural insurance policies.",
  },
  {
    icon: "account_balance_wallet",
    title: "3. Earn Returns",
    description:
      "Monitor your farm's progress via your dashboard and receive your capital plus profit upon maturity.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-text-main dark:text-white md:text-4xl max-w-2xl">
            Simple Steps to Agricultural Wealth
          </h2>
          <p className="text-base text-text-muted dark:text-gray-400 max-w-2xl">
            We've simplified the process of investing in agriculture. No farming
            experience needed—just funding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 rounded-2xl border border-[#d5e7cf] dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-text-main dark:text-white group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-2xl">
                  {step.icon}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-text-main dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
