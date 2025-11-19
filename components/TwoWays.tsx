export default function TwoWays() {
  return (
    <section className="bg-[#faf9f6] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            From Threads to DMs End-to-End.
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-orange-500">Two Ways</span> to Win Reddit
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Public replies build your authority and rank on Google and ChatGPT. Private DMs convert that authority into actual conversations with buyers. Leadzup handles both.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Inbound Card */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 relative">
            <div className="absolute top-4 left-4 px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Inbound
            </div>
            
            <div className="mt-8 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">r</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Public Reddit Posts</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Engage in Reddit threads and mention your product to build brand authority and drive organic traffic.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex-shrink-0"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-2 bg-orange-300 rounded w-full"></div>
                  <div className="h-2 bg-orange-300 rounded w-3/4"></div>
                  <div className="h-2 bg-orange-400 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">AI finds relevant discussions to join</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Get helpful AI-assisted replies</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Creates brand awareness, SEO/GEO and trust</span>
              </div>
            </div>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2">
              Learn More About Leadzup Inbound
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Outbound Card */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 relative">
            <div className="absolute top-4 right-4 px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Outbound
            </div>
            
            <div className="mt-8 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Private Reddit DMs</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Automatically send targeted messages to dozens of Reddit users at once and close deals.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-200 rounded-full flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-purple-300 rounded w-3/4"></div>
                  <div className="h-2 bg-purple-300 rounded w-full"></div>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-3">
                <div className="flex-1"></div>
                <div className="flex-1 space-y-2">
                  <div className="bg-purple-400 rounded-lg p-2">
                    <div className="h-2 bg-purple-500 rounded w-full mb-1"></div>
                    <div className="h-2 bg-purple-500 rounded w-2/3"></div>
                  </div>
                  <div className="bg-purple-400 rounded-lg p-2">
                    <div className="h-2 bg-purple-500 rounded w-full mb-1"></div>
                    <div className="h-2 bg-purple-500 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-purple-600 font-medium">AUTOMATED*</div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Bulk automate DMs without detection</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Track responses via integrated CRM</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Find leads via targeting specific threads or subreddits</span>
              </div>
            </div>
            
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2">
              Learn More About Leadzup Outbound
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

