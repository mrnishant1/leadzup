export default function ROI() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Your Return on Investment
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How <span className="text-orange-500">Leadzup</span> pays for itself in days.
            </h2>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              Only one successful customer that finds you via Reddit can already cover your entire investment. Here's the math that makes it obvious.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-green-600">50+</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Relevant posts found weekly</h3>
                  <p className="text-gray-600">AI finds highly relevant Reddit opportunities automatically.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">5%</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conversion rate to customers</h3>
                  <p className="text-gray-600">Conservative estimate from engaging with quality leads.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">$</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Your average customer value</h3>
                  <p className="text-gray-600">Most businesses have $500+ customer lifetime value.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-7xl font-bold text-orange-500 mb-4">$1,250</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Potential monthly revenue</h3>
              <p className="text-gray-600 mb-6">(50 posts x 5% conversion x $500 value)</p>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-3xl font-bold text-green-600 mb-2">ROI: 2,500%+</div>
                <p className="text-green-700 font-medium">Pays for itself in the first week.</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mb-12">Conservative estimate. You might get different results but you get the idea.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">30+ Hours Saved Weekly</h3>
              <p className="text-gray-600 text-center text-sm">Stop manually hunting through Reddit. Get curated, high-converting opportunities delivered to your inbox daily.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">5x Better Lead Quality</h3>
              <p className="text-gray-600 text-center text-sm">Target users already expressing buying intent and pain points your product solves. No cold outreach needed.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">10x Lower Customer Acquisition Cost</h3>
              <p className="text-gray-600 text-center text-sm">Organic Reddit engagement costs 90% less than paid ads while delivering higher-intent customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

