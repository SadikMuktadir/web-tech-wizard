const Support = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <div className="flex flex-col items-center">
            <div className="text-teal-500 text-6xl mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              End-to-End Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Comprehensive support from project planning to post-launch
              assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                Project Planning & Strategy – Tailored roadmaps for your
                success.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                Design & Development – Custom web and app design solutions.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                Quality Assurance & Testing – Thorough testing for seamless
                performance.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                Launch Support – Smooth deployment and launch management.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-teal-500 text-xl">✅</span>
              <p className="text-gray-800 dark:text-gray-300">
                Post-Launch Support – Ongoing assistance with updates and
                troubleshooting.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition">
              Get Full Support Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
