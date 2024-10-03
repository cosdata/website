'use client'

export default function NewsletterSignup() {
    return (
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Sign up for Cosdata updates</h2>
        <p className="text-gray-600 mb-6">
          We'll occasionally send you best practices for using vector data and similarity search, as well as product news.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          By submitting, you agree to subscribe to Cosdata's updates. You can withdraw your consent anytime. More details are in the Privacy Policy.
        </p>
      </div>
    )
  }