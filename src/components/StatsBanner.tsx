interface StatsBannerProps {
  totalCount?: number;
}

export default function StatsBanner({ totalCount }: StatsBannerProps) {
  return (
    <div className="bg-linear-to-b from-background-light to-white px-4 py-8 lg:px-20 lg:py-10 dark:from-background-dark dark:to-surface-dark">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-text-main sm:text-4xl lg:text-5xl dark:text-white">
              Explore Investment Opportunities
            </h1>
            <p className="text-base font-normal leading-normal text-text-muted lg:text-lg">
              Grow your portfolio with high-yield agricultural assets. Secure
              your future with nature's bounty.
            </p>
          </div>

          <div className="flex gap-6 rounded-2xl bg-primary/10 p-4 backdrop-blur-sm border border-primary/20">
            <div>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                Avg ROI
              </p>
              <p className="text-xl font-bold text-primary dark:text-green-400">
                22%
              </p>
            </div>
            <div className="w-px bg-primary/20"></div>
            <div>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                Active
              </p>
              <p className="text-xl font-bold text-text-main dark:text-white">
                142
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
