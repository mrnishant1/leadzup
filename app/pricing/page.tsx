export default function PricingPage() {
  const plans = [
    {
      name: "Growth",
      price: "$39/mo",
      cadence: "billed monthly",
      popular: true,
    },
    {
      name: "Startup",
      price: "$19/mo",
      cadence: "billed monthly",
    },
    {
      name: "Professional",
      price: "$79/mo",
      cadence: "billed monthly",
    },
    {
      name: "3 Day Pass",
      price: "$12",
      cadence: "One Time Payment",
    },
  ];

  const inbound = [
    "6 Tracked Competitors",
    "40 Custom Tracked Keywords",
    "300 AI-Guided Reply Suggestions",
    "Daily New Lead Opportunities",
    "Daily Competitor Tracking",
    "Monthly SEO Opportunities",
    "Analytics Insight Dashboard",
  ];

  const outbound = ["100 Daily Auto DMs", "CRM For Private DM Outreach"];

  const support = ["Notification Alerts: Email & TG (Soon)", "Priority Email Support"];

  return (
    <div className="min-h-screen bg-[#f9f4ef] px-4 py-8 text-gray-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl bg-white p-8 shadow-xl md:flex-row">
        <section className="md:w-1/2">
          <p className="text-sm font-semibold uppercase text-orange-500">Choose Your Plan</p>
          <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#fff4e8] px-3 py-1 text-sm font-medium text-orange-600">
            <button className="rounded-xl bg-white px-3 py-1 shadow">Monthly</button>
            <button className="rounded-xl px-3 py-1 text-orange-400">Yearly</button>
            <span className="rounded-xl bg-white px-2 py-0.5 text-xs font-semibold text-green-600">
              Save 20%
            </span>
          </div>
          <div className="mt-6 space-y-4">
            {plans.map((plan) => (
              <button
                key={plan.name}
                className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left ${
                  plan.popular
                    ? "border-orange-400 bg-[#fff4e8]"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div>
                  <p className="text-lg font-semibold">{plan.name}</p>
                  <p className="text-sm text-gray-500">{plan.cadence}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{plan.price}</p>
                  {plan.popular && (
                    <span className="text-xs font-semibold text-orange-500">Most Popular</span>
                  )}
                </div>
              </button>
            ))}
          </div>
          <p className="mt-4 cursor-pointer text-sm font-semibold text-orange-500">
            Show fewer options
          </p>
          <div className="mt-6 rounded-2xl bg-[#fff4e8] p-4 text-sm text-gray-700">
            <p className="text-sm italic text-orange-600">★★★★★</p>
            <p className="mt-2">
              “Thanks to Leadzup, we now get a steady stream of 300 daily new potential leads just
              from Reddit. Absolute game-changer for our growth!”
            </p>
            <p className="mt-3 text-xs font-semibold text-gray-500">
              Iron Brands, Co-Founder of Simple Analytics
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button className="text-sm text-gray-500">Back</button>
            <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow">
              Finish
            </button>
          </div>
        </section>

        <section className="md:w-1/2">
          <div className="rounded-3xl bg-[#fff9f4] p-6">
            <p className="text-3xl font-bold text-orange-500">Growth</p>
            <p className="mt-2 text-sm text-gray-600">
              Convert more Reddit leads into paying customers with daily insights and expanded
              tracking to maximize your ROI.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">Inbound</p>
                <ul className="mt-2 space-y-1">
                  {inbound.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Outbound</p>
                <ul className="mt-2 space-y-1">
                  {outbound.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Support</p>
                <ul className="mt-2 space-y-1">
                  {support.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

