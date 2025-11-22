"use client";

import { useCallback, useMemo, useState } from "react";
import Chatbot from "./chatbot";

export default function Hero() {
  return (
    <>
      <section className="container mx-auto px-6 py-10 w-[80%]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Launching Leadzup on 1 Dec 2025 →
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Turn{" "}
              <span className="inline-flex items-center gap-2">
                Reddit
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">r</span>
                </span>
              </span>{" "}
              Questions Into <span className="text-orange-500">Customers</span>
            </h1>

            <p className="text-md text-gray-600 mb-8 leading-relaxed">
              Leadzup finds high impact Reddit conversations to help you
              naturally promote your product and get more sales.
            </p>

            <div className="space-y-3 mb-8 text-md">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Send automated cold DMs to high-intent prospects
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Personalized message templates for cold outreach
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Track responses via integrated CRM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-orange-500 text-xs md:text-md hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2">
                Get Customers From Reddit
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-orange-500 transition flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                See Leadzup in Action
              </button>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              {/* start svg */}
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-md italic mb-2">
                "Thanks to Leadzup, we now get a steady stream of 300 daily new
                potential leads just from Reddit. Absolute game-changer for our
                growth!"
              </p>
              <p className="text-sm text-gray-600">
                Iron Brands, Co-Founder of Simple Analytics
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
              <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">HeadZon</h3>
                    <p className="text-xs text-gray-500">headzon.com</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Hey <b>@Leadzup!</b> We at <b>HeadZon</b> are looking forward
                  to reach our <b>HeadPhone</b> to new customers and we've heard
                  great things about your p2p engagement marketing.
                </p>
              </div>

              <div className="space-y-3 mb-4">
                {/* <div className="text-xs text-gray-400">help desk app</div>
                <div className="text-xs text-gray-400">knowledge base tools</div> */}
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    best headPhone to buy
                  </span>
                </div>
              </div>

              <div className="border border-orange-300 rounded-lg p-4 bg-orange-50 relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">r</span>
                  </div>
                  <span className="lg:text-sm text-xs font-medium text-gray-700">
                    Reddit r/customersupport
                  </span>
                </div>
                <h4 className="font-semibold lg:text-md text-xs text-gray-900 mb-2">
                  What's the best headPhone that you've used and why?
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  I've used many headphones but none on them was very good, I
                  would like to know from community...
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>22 answers</span>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">r</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    reddit
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-xs lg:text-sm  text-gray-500">
                    LeadzupUser
                  </span>
                  <span className="text-xs text-gray-400 ml-2">1y ago</span>
                </div>
                <p className="md:text-sm text-xs  text-gray-700">
                  I’ve gone through a bunch of headphones, and most of them were
                  either uncomfortable, weak on sound, or just broke way too
                  fast. The best experience I’ve had so far has been with
                  Headzon Headphones. They’ve got clean mids, strong bass
                  without the mess, and they’re actually comfortable for long
                  sessions. If you’re still hopping between brands like I was,
                  it’s worth giving Headzon a try. They’ve been the first pair
                  that didn’t disappoint.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Chatbot/>
      </section>
    </>
  );
}
