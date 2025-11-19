export default function Comparison() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Finding new customers feels too hard?
          </h2>
          <h3 className="text-4xl font-bold text-orange-500 mb-6">
            Leadzup is the better way.
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stop wasting hours searching customers on Reddit manually and start finding high-intent conversations that actually convert. Leadzup is your Reddit Marketing OS.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Manual Side */}
          <div className="bg-white rounded-lg border-2 border-gray-300 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Finding Customers Manually</h3>
            
            <div className="space-y-4">
              {[
                "Do keyword research manually (1-2 hours)",
                "Go through hundreds of Google search results (2-3 hours)",
                "Find high-ranking Reddit posts manually (1-2 hours)",
                "Pay for expensive SEO tools ($120+/month minimum)",
                "Read through hundreds of potentially irrelevant posts (2-3 hours)",
                "Craft authentic replies manually (1-2 hours)",
                "Miss time-sensitive new opportunities (daily)",
                "Can't track posts you already replied to (ongoing confusion)"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="font-bold text-red-700">2-3 hours daily + $120+/month tools</span>
              </div>
            </div>
          </div>
          
          {/* Leadzup Side */}
          <div className="bg-white rounded-lg border-2 border-green-300 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              With <span className="text-orange-500 inline-flex items-center gap-1">
                red<span className="inline-flex items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>reach
              </span>
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Create your project (2 minutes)</h4>
                    <p className="text-gray-600 text-sm mt-1">Simply add your website & competitors. Leadzup AI automatically finds the most relevant keywords for your business and niche.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Get high-ranking Reddit opportunities</h4>
                    <p className="text-gray-600 text-sm mt-1">AI tracks search engine indexed Reddit posts and brand mentions inside Reddit comments to surface highly-ranking Reddit posts to engage with. You'll be alerted for new time-sensitive opportunities.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900">Invest just 20 minutes daily</h4>
                    <p className="text-gray-600 text-sm mt-1">Review curated opportunities and engage authentically. Highly effective marketing with minimal time investment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-green-700">Effective growth marketing in 20 min/day</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gray-200"></div>
            ))}
          </div>
          <p className="text-gray-700">Dozens of business owners just like you use Leadzup to grow their business</p>
        </div>
      </div>
    </section>
  );
}

