const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Product", href: "#", active: false },
  { label: "Leads", href: "#", active: false },
  { label: "DMs (Reddit)", href: "#", active: false },
  { label: "Settings", href: "#", active: false },
  { label: "Billing", href: "#", active: false },
];

const statCards = [
  {
    label: "Total Leads",
    value: "632",
    sublabel: "0 today",
    footer: "Qualified: 17",
    progress: 0.17,
    accent: "bg-blue-100 text-blue-600",
  },
  {
    label: "Qualified Leads",
    value: "17",
    sublabel: "0 today",
    footer: "New: 17  Contacted: 0  Replied: 0",
    progress: 1,
    accent: "bg-green-100 text-green-600",
  },
  {
    label: "DMs Sent",
    value: "0",
    sublabel: "0 today",
    footer: "Active: 0  Conversations",
    progress: 0,
    accent: "bg-purple-100 text-purple-600",
  },
  {
    label: "Plan Usage",
    value: "100",
    sublabel: "leads remaining",
    footer: "0/100",
    progress: 0,
    accent: "bg-orange-100 text-orange-600",
  },
];

const quickActions = [
  { label: "Find New Leads", description: "Search for customer pain points" },
  { label: "Send DMs", description: "Message your qualified leads" },
  { label: "View All Leads", description: "Manage your lead pipeline" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fd] text-gray-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-56 flex-col border-r border-gray-200 bg-white px-4 py-8 lg:flex">
          <div className="mb-8 text-2xl font-bold text-orange-500">Leadzup</div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm ${
                  item.active
                    ? "bg-orange-50 font-semibold text-orange-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto flex flex-col items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-100" />
            <p className="text-sm font-medium">Holly Neil</p>
          </div>
        </aside>

        <main className="flex-1 px-4 py-6 sm:px-8">
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">Dashboard</p>
              <h1 className="text-2xl font-semibold">Welcome back! Here’s your lead generation overview.</h1>
            </div>
            <button className="rounded-full border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600">
              Scout Plan
            </button>
          </header>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card) => (
              <div key={card.label} className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{card.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${card.accent}`}>{card.sublabel}</span>
                </div>
                <p className="mt-4 text-4xl font-bold">{card.value}</p>
                <p className="mt-2 text-sm text-gray-500">{card.footer}</p>
                <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-orange-400"
                    style={{ width: `${Math.max(0.05, card.progress) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </section>

          <section className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Quick Actions</h2>
              <button className="text-sm font-semibold text-orange-500">See all</button>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {quickActions.map((action) => (
                <div key={action.label} className="rounded-2xl border border-gray-100 px-4 py-5">
                  <p className="text-sm font-semibold text-gray-500">{action.label}</p>
                  <p className="mt-2 text-sm text-gray-600">{action.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

