const MobileAndApp = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <div className="flex flex-col items-center">
            <div className="text-teal-500 text-6xl mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Custom Web & App Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Scalable, user-friendly solutions tailored to your business needs.
              We specialize in websites, mobile apps, and custom software
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                Web Development – Fast, responsive, SEO-friendly websites.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                Mobile App Development – Scalable apps for iOS & Android.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                E-Commerce – Secure online stores with payment integration.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                API Integration – Seamless connectivity between platforms.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAndApp;
