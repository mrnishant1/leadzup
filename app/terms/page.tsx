"use client";

const sections = [
  {
    title: "Service Disclaimer",
    body: [
      "We provide digital marketing and promotional services to help increase your brand visibility. While we strive to achieve the best results possible, we do not guarantee specific outcomes, such as increased sales, engagement, or conversions. Marketing performance depends on multiple factors beyond our control, including market conditions and audience behavior.",
      "We offer our professional digital marketing services in the best of our ability. While we strive to maintain the highest quality in both our service and products, if the service causes loss of access to your website or damages your website or business in any way, the company, its owners and its officers cannot be held liable.",
    ],
  },
  {
    title: "Refund Policy",
    body: [
      "Due to the nature of digital services, all completed or in-progress work is non-refundable. Once a project has started, cancellation requests will not be eligible for refunds.",
      "Refunds may only be issued in cases of accidental duplicate payments or if a service was not delivered due to our error. Approved refunds will be processed within 7–10 business days via the original payment method.",
    ],
  },
  {
    title: "Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate information, timely feedback, and all necessary materials required for project completion. Delays or issues resulting from the client’s inaction or incomplete information do not qualify for refunds or revisions.",
    ],
  },
  {
    title: "Privacy Conditions",
    body: [
      "All data, credentials, and proprietary information you share with us remain strictly confidential. We will not sell, trade, or disclose your data to any third party without your express permission, unless required by law.",
      "We implement reasonable technical and organizational safeguards to protect your information against unauthorized access, loss, or misuse, and we limit access to only the team members who need it to deliver your project.",
    ],
  },
  {
    title: "Acceptance",
    body: [
      "By continuing to use our services, you acknowledge that you have read, understood, and agreed to these terms and conditions.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fd] px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">Legal</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Terms and Conditions</h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Welcome to our marketing agency. By engaging our services, you agree to the following terms and conditions.
          Please read them carefully before using our services.
        </p>
        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-gray-100 bg-[#fffdf8] p-6">
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className="mt-3 text-sm leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

