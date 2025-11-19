export default function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Boost Your Visibility",
      description: "Get Reddit posts that actually show up in your audience's search results, driving more organic traffic to your content.",
      color: "gray"
    },
    {
      icon: "🧠",
      title: "AI Relevance Filter",
      description: "Our AI helps you focus on what matters by filtering out irrelevant content and surfacing only high-quality opportunities.",
      color: "pink"
    },
    {
      icon: "📝",
      title: "Post Management",
      description: "Manage and keep track of your posts. Mark posts as replied, archive them, and never miss an opportunity.",
      color: "yellow"
    },
    {
      icon: "💬",
      title: "AI Guided Replies",
      description: "Leverage AI to generate thoughtful replies, saving you time while maintaining authenticity and value.",
      color: "purple"
    },
    {
      icon: "👁️",
      title: "Track Mentions",
      description: "Keep track of mentions of you and your competitors 24/7 to stay ahead of the conversation.",
      color: "blue"
    },
    {
      icon: "📨",
      title: "Auto DM Outreach",
      description: "Send personalized automated DMs to targeted Reddit users based on their activity and interests.",
      color: "red",
      badge: "New"
    }
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium text-gray-600">Our Features</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Reddit Marketing never felt so <span className="text-orange-500">easy</span> and <span className="text-orange-500">powerful</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Find hidden opportunities on Reddit, monitor conversations, and turn Reddit traffic into customers with the only Reddit marketing tool you'll ever need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        {feature.badge && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded">New</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2 mb-6">
              Get Customers From Reddit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-6 text-green-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Super Affordable</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Cancel Anytime</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
            <div className="mb-4 flex items-center justify-between">
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg text-sm">Reject Post</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm">Mark as Replied</button>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-4">
                The following Reddit posts are showing up when people google for keywords related to you or your competitors. Commenting on these posts will guarantee more eyeballs on your product and if done right more sales.
              </p>
              
              <div className="bg-orange-100 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="font-semibold text-orange-900">Aggregated Total Search Volume: 870</span>
                </div>
                <p className="text-xs text-orange-700">Search Keyword Appearance</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="text-sm font-medium text-gray-700 mb-3">28 posts found</div>
                
                {[
                  { subreddit: "r/technicalwriting", comments: 19, title: "Knowledge base software recommendations needed", relevance: 95 },
                  { subreddit: "r/startups", comments: 25, title: "Has anyone recently built out a company wiki/knowledge base?", relevance: 90 },
                  { subreddit: "r/saas", comments: 12, title: "Best knowledge base tools for SaaS companies", relevance: 85 }
                ].map((post, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:border-orange-300 transition">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">r</span>
                      </div>
                      <span className="text-xs font-medium text-gray-700">{post.subreddit}</span>
                      <span className="text-xs text-gray-500">• {post.comments} Comments</span>
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">{post.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600">View Post</span>
                      <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        Relevance: {post.relevance}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Knowledge base software recommendations needed</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Hi, Seeking recommendations for knowledge base software (for a SaaS company). Wish list: User friendly, visual text editor, advanced user comments feature, reusable content (ability to update one source on a particular topic and embed it into multiple articles). We currently use Zendesk, but wondering if there's anything that can fulfill our whole wish list :-) Any recommendations much appreciated. Thanks!
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span>14 ↑</span>
                  <span>0 💬</span>
                  <span>19 🔗</span>
                </div>
                
                <a href="#" className="text-sm text-blue-600 mb-4 block">View Post as Reddit</a>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Write a comment:</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-2"
                    rows={4}
                    placeholder="Reply with a genuine and informative response subtly mentioning your product..."
                  />
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium text-sm">
                    Generate Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

