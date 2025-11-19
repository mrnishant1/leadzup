export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#faf9f6] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-orange-500 font-medium mb-4">Here's how Leadzup works</div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Get more <span className="text-orange-500">customers</span> in
          </h2>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">3 simple steps</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tell us your company website, your top 3 competitors and Leadzup will find the most highly relevant Reddit posts for you to engage with. No keywords needed. Let us do the hard work. You focus on engaging.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200 relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-300 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">myproduct.com</span>
                  <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Add your own website</h3>
            <p className="text-gray-600">We analyze your website and identify highly relevant keywords and topics.</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 border border-gray-200 relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-300">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">competitor1.com</span>
                  <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-300">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">competitor2.com</span>
                  <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-300">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">competitor3.com</span>
                  <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Add your top 3 competitors</h3>
            <p className="text-gray-600">Your top three competitors will help us drill even deeper and identify hidden opportunities to sneak into your competitors' audience.</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 border border-gray-200 relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded border border-gray-300 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">-</span>
                      </div>
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">+</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Get highly relevant posts</h3>
            <p className="text-gray-600">Get a list of the most relevant Reddit posts where you can comment your business. These posts are actually being read by your target audience and not just random guesses.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xl text-gray-900 italic mb-2">
            "We've found Leadzup super valuable for keeping tabs and jumping into conversations early. Extremely helpful marketing tool for us."
          </p>
          <p className="text-gray-600">Sam, Product Manager at AppScreens</p>
        </div>
      </div>
    </section>
  );
}

