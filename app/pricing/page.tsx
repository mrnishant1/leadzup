"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react"; // Importing an icon for the checkmark
import Link from "next/link";

// Define the vibrant orange color for consistency
const VIBRANT_orange = "#FF6B35";
const LIGHT_orange_BG = "bg-orange-50"; // A very light orange for the selected plan background
const LEADZUP_SUBTEXT = {
  "Micro Pack": "Ideal for testing the waters.",
  "Value Pack": "The best choice for steady growth.",
  "Bulk Pack": "Maximum savings for power users.",
};

export default function PricingPage() {
  // Set default active plan to "Value Pack" as per the design
  const [active, setActive] = useState<string>("Value Pack");
  
  const plans = [
    {
      name: "Micro Pack",
      price: "$4.00",
    },
    {
      name: "Value Pack",
      price: "$15.00",
    },
    {
      name: "Bulk Pack",
      price: "$25.00",
    },
  ];

  const planFeatures = {
    "Value Pack": [
      "personalised Marketing",
      "personalised DMs",
      "Custom Keyword tracking","Generated Leads details",
      "Adds 500 Credits",
      "3.0¢ per Credit (Best Value)",
    ],
    "Micro Pack": [ "personalised Marketing","personalised DMs","Custom Keyword tracking","Generated Leads details","Adds 100 Credits", "4.0¢ per Credit"],
    "Bulk Pack": [ "personalised Marketing","personalised DMs","Custom Keyword tracking","Generated Leads details","Conversation Follow ups","Adds 1000 Credits", "2.5¢ per Credit (Max Discount)"],
  };

  return (
    <div className="h-screen w-full bg-gray-100 px-4 py-8 text-gray-900 flex justify-center items-start pt-16">
      {/* Outer title as per design */}
      <h1 className="absolute top-8 text-3xl md:text-4xl font-extrabold text-gray-700">
        Leadzup Pricing Plans
      </h1>

      <div className="mx-auto flex w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden md:flex-row">
        
        {/* Left Panel: Plan Selector and Branding */}
        <section className="md:w-5/12 p-8 bg-gray-50 border-r border-gray-100 space-y-6">
          
          {/* Brand/Logo Section */}
          <div className="flex items-center gap-2">
             {/* Simple Logo Placeholder (N in a circle) */}
            <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">L</div>
            <Link href={'/'} className="font-bold text-lg text-gray-800">Leadzup</Link>
          </div>
          
          <p className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4">
            Choose Your Plan
          </p>
          
          {/* Plan Selection List */}
          <div className="space-y-4">
            {plans.map((plan, i) => {
              const isActive = plan.name === active;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActive(plan.name);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl p-4 text-left transition-all duration-200 border-2 ${
                    isActive
                      ? `border-orange-500 ${LIGHT_orange_BG}` // Vibrant orange border/light orange background when active
                      : "border-gray-200 hover:border-orange-300" // Subtle hover effect when inactive
                  }`}
                  style={{}}
                >
                  <div>
                    <p className="text-base font-semibold text-gray-800">
                      {plan.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {LEADZUP_SUBTEXT[plan.name as keyof typeof LEADZUP_SUBTEXT]}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-gray-800">
                      {plan.price}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Testimonial Section (Moved to the bottom of the left panel) */}
          <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-700">
            <p className="text-lg text-yellow-500">★★★★★</p>
            <p className="mt-2 italic">
               <span className="font-semibold text-gray-800">Leadzup</span>, we now get a steady stream 300 daily new potential leads just from Reddit. Absolute game-changer for our growth!
            </p>
             {/* Small Logo Placeholder in the corner */}
             <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm opacity-50">N</div>
          </div>
          
        </section>

        {/* Right Panel: Plan Details and CTA */}
        <section className="md:w-7/12 p-8 space-y-6">
          
          {/* Plan Name and Description */}
          <p className="text-4xl font-bold" style={{ color: VIBRANT_orange }}>
            {active || "Select Best Plan"}
          </p>
          <p className="mt-2 text-md text-gray-600">
            Convert more Reddit leads into paying customers with daily insights and expanded tracking to maximize your ROI.
          </p>
          
          <hr className="border-gray-200" /> {/* Separator line */}

          {/* Features */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-900">Our Offerings</p>
            <ul className="space-y-3">
              {[
                ...planFeatures[
                  active as "Micro Pack" | "Value Pack" | "Bulk Pack"
                ],
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0" style={{ color: VIBRANT_orange }} />
                  <span className={`text-base text-gray-700 ${index === 1 && item.includes('(Best Value)') ? 'font-bold' : ''}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA Button */}
          <button 
            className="cursor-pointer w-full py-3 mt-6 text-white text-lg font-bold rounded-xl shadow-lg transition-transform duration-150 hover:scale-[1.01]"
            style={{ backgroundColor: VIBRANT_orange }}
          >
            Start Growing Now
          </button>
          
        </section>
      </div>
    </div>
  );
}