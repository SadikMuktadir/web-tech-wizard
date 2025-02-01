const Services = () => {
  return (
    <div>
      <section
        id="features"
        className="container mx-auto max-w-7xl py-8 md:py-12 lg:py-20 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(6,81,237,0.8)]"
      >
        <div className="mb-10 mx-auto flex max-w-7xl flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-blue-600">
            Services
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-gray-600 dark:text-gray-300">
            At Web Tech Wizard, we provide top-tier solutions tailored to your
            business needs. Our services include:
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-[#5C7285] select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div>
                <img
                  className="h-12 w-12 fill-current"
                  src="https://i.ibb.co.com/4nMd6nTh/app-development.png"
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Custom Web & App Development</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable, user-friendly solutions for all platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-[#5C7285] select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div>
                <img
                  className="h-12 w-12 fill-current"
                  src="https://i.ibb.co.com/5WyFNYMs/seo.png"
                  alt="Custom Web & App Development"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">SEO Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Improve rankings and drive targeted traffic.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-[#5C7285] select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div>
                <img
                  className="h-12 w-12 fill-current"
                  src="https://i.ibb.co.com/N2Byk85G/idea-1.png"
                  alt="Custom Web & App Development"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Creative Graphics Design</h3>
                <p className="text-sm text-muted-foreground">
                  Eye-catching visuals that strengthen your brand.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-[#5C7285] select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div>
                <img
                  className="h-12 w-12 fill-current"
                  src="https://i.ibb.co.com/GQS8M0nS/intelligence.png"
                  alt="Custom Web & App Development"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Business Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Streamline operations with smart automation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-[#5C7285] select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div>
                <img
                  className="h-12 w-12 fill-current"
                  src="https://i.ibb.co.com/HL4bPy3k/deadline.png"
                  alt="Custom Web & App Development"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Fast & Secure Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for speed, security, and reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white dark:bg-[#5C7285] select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div>
                <img
                  className="h-12 w-12 fill-current"
                  src="https://i.ibb.co.com/LhtGTJm2/support.png"
                  alt="Custom Web & App Development"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">End-to-End Support</h3>
                <p className="text-sm text-muted-foreground">
                  From planning to launch, we’ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
