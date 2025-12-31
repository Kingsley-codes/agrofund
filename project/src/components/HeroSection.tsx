export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-left">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-text-main dark:text-white w-fit">
              <span className="mr-1 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Verified Sustainable Farms
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl xl:text-6xl text-text-main dark:text-white">
              Grow Your Wealth <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-green-600">
                with Nature
              </span>
            </h1>

            <p className="text-lg font-normal leading-relaxed text-text-muted dark:text-gray-300 max-w-lg">
              Invest in verified farms and livestock projects. Secure your
              future with sustainable agricultural assets offering competitive
              ROI up to 35%.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex h-12 min-w-[140px] items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-[#111b0d] hover:bg-[#3cd610] shadow-lg shadow-primary/25 transition-all">
                Start Investing
              </button>
              <button className="flex h-12 min-w-[140px] items-center justify-center rounded-xl border-2 border-[#eaf3e7] dark:border-white/10 bg-transparent px-6 text-base font-bold text-text-main dark:text-white hover:bg-[#eaf3e7] dark:hover:bg-white/5 transition-all">
                Learn More
              </button>
            </div>

            {/* Mini Social Proof */}
            <div className="mt-4 flex items-center gap-4 text-sm text-text-muted dark:text-gray-400">
              <div className="flex -space-x-2">
                <div
                  className="h-8 w-8 rounded-full border-2 border-background-light bg-gray-300 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/a/ACg8ocK7_placeholder1')",
                  }}
                ></div>
                <div
                  className="h-8 w-8 rounded-full border-2 border-background-light bg-gray-300 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/a/ACg8ocK7_placeholder2')",
                  }}
                ></div>
                <div
                  className="h-8 w-8 rounded-full border-2 border-background-light bg-gray-300 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/a/ACg8ocK7_placeholder3')",
                  }}
                ></div>
              </div>
              <p>
                Trusted by{" "}
                <span className="font-bold text-text-main dark:text-white">
                  10,000+
                </span>{" "}
                investors
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-4/3 lg:aspect-square">
            {/* Abstract Growth/Farm UI Composition */}
            <div
              className="absolute inset-0 rounded-2xl bg-center bg-cover shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQwAydN5iRcEYo3OvxfH1YQUZb17C9oWtcbpExLoY2JV4w2VKY1ttezydpVsYcA1K679VXhPZ0QRVAHR8KAZfS_mqTy2IcfWnqF3t-C4-qVWsdJa_XuhSCQuWEfSDdEAzhuILvf48ys3ouSobnmEqfndFYRFV3Ey6vjpnqwd25G_leBI4jiqE4asG0dX8wRg30RkqVm8vAnHUJlO-lSuDnXYnk6tyeYg8lSWpvSxV4Ue_QtcS-YvTv5QBwH5BdHBROd6V-5TSvpAw")',
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 left-6 right-6 lg:left-5 lg:right-auto lg:bottom-12 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-xl border border-primary/20 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-700 dark:text-green-400">
                  <span className="material-symbols-outlined text-xl">
                    trending_up
                  </span>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase font-bold tracking-wider">
                    Average ROI
                  </p>
                  <p className="text-lg font-bold text-text-main dark:text-white">
                    +24.5%
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
