export default function WhyReddit() {
  const sites = [
    { name: "Reddit", points: 100000, logo: "🔴" },
    { name: "Amazon", points: 40000, logo: "📦" },
    { name: "Quora", points: 25000, logo: "❓" },
    { name: "YouTube", points: 20000, logo: "▶️" },
    { name: "The New York Times", points: 15000, logo: "📰" },
    { name: "Best Buy", points: 12000, logo: "🏷️" },
    { name: "CNET", points: 10000, logo: "💻" },
    { name: "techradar", points: 8000, logo: "📡" },
    { name: "RTINGS", points: 6000, logo: "⭐" },
    { name: "Forbes", points: 5000, logo: "📊" },
  ];

  const maxPoints = 100000;

  return (
    <section id="why-Leadzup" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Most Prominent Sites Across 10,000 'Best [Product]' Search Results
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Based on checking 10,000 'best [product]'-style keywords from the US in Google.com.
              </p>
              
              <div className="space-y-3 mb-6">
                {sites.map((site, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center text-lg">{site.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{site.name}</span>
                        <span className="text-xs text-gray-500">{site.points.toLocaleString()}</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${index === 0 ? 'bg-red-500' : 'bg-gray-400'}`}
                          style={{ width: `${(site.points / maxPoints) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-gray-500 mb-4">
                Ranked based on points. 1st organic ranking = 10 points, 2nd organic ranking = 9 points, etc. Multiple rankings means additional points.
              </p>
              
              <p className="text-xs text-gray-400">Source: Glenn Allsop (Detailed).</p>
              
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">r</span>
                  </div>
                  <span className="text-sm font-medium">Reddit</span>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">G</div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">AI</div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">★</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="inline-block mb-4 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Why Reddit?
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Reddit can be a <span className="text-orange-500 inline-flex items-center gap-2">goldmine<span className="text-2xl">💰</span></span> for your business.
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Top Google rankings are now filled with Reddit posts and AIs like ChatGPT are using these posts to influence product recommendations. By strategically placing your brand in top Reddit discussions, you're not just winning at SEO but also positioning for AI-driven search discovery like ChatGPT. Ignoring Reddit now is like turning your back on SEO a decade ago – a missed opportunity you shouldn't afford.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Get exposure for competitive terms, skip costly ads</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Minimal investment, high organic traffic from comments</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Secretly sneak into competitors search results</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Be included in AI Search responses like ChatGPT</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <svg className="w-12 h-12 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <h3 className="text-3xl font-bold text-gray-900">
            BUT... Reddit Marketing Is <span className="text-orange-500 underline">Hard</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

