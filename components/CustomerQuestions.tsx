export default function CustomerQuestions() {
  return (
    <section className="bg-[#faf9f6] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">Trusted by 100+ growing companies from every industry</p>
          <div className="flex items-center justify-center gap-8 flex-wrap mb-12">
            <span className="text-2xl font-bold text-gray-700">VEED.IO</span>
            <span className="text-2xl font-bold text-gray-700">appwrite</span>
            <span className="text-2xl font-bold text-gray-700">apify</span>
            <span className="text-2xl font-bold text-gray-700">maybe</span>
            <span className="text-2xl font-bold text-gray-700">Opus Clip</span>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Thousands of <span className="text-orange-500">ideal customers</span> are asking for help on Reddit every day
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          <div className="flex items-center gap-4 mb-6 overflow-x-auto">
            {["SaaS", "Consumer Apps", "E-Commerce", "Consulting", "Local Biz"].map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  index === 4
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                subreddit: "r/nyc",
                question: "Looking for high-quality carpenter in NYC",
                keywords: "high-quality carpenter",
                relevance: 85,
                upvotes: 18
              },
              {
                subreddit: "r/miami",
                question: "Do you know a good car dealer in Miami Beach?",
                keywords: "good car dealer",
                relevance: 88,
                upvotes: 19
              },
              {
                subreddit: "r/LosAngeles",
                question: "Any recommendations for a house cleaner in Malibu?",
                keywords: "house cleaner",
                relevance: 80,
                upvotes: 14
              }
            ].map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">r</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{post.subreddit}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {post.question.split(post.keywords)[0]}
                  <span className="text-orange-500">{post.keywords}</span>
                  {post.question.split(post.keywords)[1]}
                </h4>
                <div className="flex items-center justify-between mt-4">
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    Relevance: {post.relevance}/100
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span>{post.upvotes}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-orange-500 mb-2">Each question is a buying signal. Each thread is an opportunity.</p>
          <p className="text-2xl font-bold text-gray-900">
            <span className="text-orange-500 inline-flex items-center gap-2">
              red<span className="inline-flex items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>reach
            </span> finds them for you. <span className="text-orange-500">automatically.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

