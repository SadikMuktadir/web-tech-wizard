const LeadGeneration = () => {
  return (
    <>
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            B2B Lead Generation Services
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Find highly targeted leads to grow your business efficiently.
          </p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            What We Need from You:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              ✅ <strong>Targeted Location:</strong> City, State, Country
            </li>
            <li>
              ✅ <strong>Targeted Industry:</strong> Tech, Finance, Healthcare,
              etc.
            </li>
            <li>
              ✅ <strong>Targeted Job Titles:</strong> CEO, Manager,
              Decision-Makers
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">
            What You Will Get:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>✅ Full Name</li>
            <li>✅ Job Title & Position</li>
            <li>✅ Business Email (Verified)</li>
            <li>✅ Company Website</li>
            <li>✅ Location (City/State/Country)</li>
            <li>✅ Industry Insights</li>
            <li>✅ Company Name</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">
            How We Ensure Lead Quality:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>✅ Removing fake & spam emails</li>
            <li>✅ Checking domain validity</li>
            <li>✅ Verifying leads using email validation tools</li>
            <li>✅ Implementing a double opt-in process</li>
          </ul>

          <div className="text-center mt-6">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadGeneration;
