"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clientContext } from "@/context/ClientDataContext";
import axios from "axios";
import "./page.css";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Generated Leads", href: "#" },
  { label: "DMs (Reddit)", href: "#" },
  { label: "Profile", href: "#" },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [userStatus, setuserStatus] = useState<string>(status);
  const [userSession, setuserSession] = useState<Session | undefined>(
    session ?? undefined
  );
  const [active, setActive] = useState<string>("Home");
  const [leadsToday, setLeadsToday] = useState<number>(0);
  const [DMs, setDMs] = useState<number>(0);
  useEffect(() => {
    setuserStatus(status);
    setuserSession(session ?? undefined);
  }, [status, session]);

  if (userStatus === "unauthenticated") {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div>Unauthenticated</div>
        <button className="cursor-pointer" onClick={() => signIn("google")}>
          Signin
        </button>
      </div>
    );
  }

  const userDataContext = clientContext();
  const setUserData = userDataContext?.setUserData;
  const userData = userDataContext?.userData;

  if (userData === undefined || setUserData === undefined) return;

  if (userData === null && userStatus === "authenticated") {
    async function checkOnBoarding() {
      try {
        if (session === null) return;
        const gmail = session.user?.email;
        const res = await axios.post("/api/check-onboarding", { gmail });
        if (res.data) {
          setUserData!(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    checkOnBoarding();
  }

  if (userStatus === "loading" || !userData) {
    console.log(userData + "Hiiiiiiiiiiiiiiiiiiiiiiii000000000");
    return (
      <div className="heartbeat flex h-screen w-screen lg:text-9xl md:text-5xl text-3xl  text-gray-600 justify-center items-center">
        Loading...
      </div>
    );
  }

  console.log("HIiiiiiiiiiiii33333333333333" + userData);

  return (
    <div className="min-h-screen bg-[#f7f9fd] text-gray-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-56 flex-col border-r border-gray-200 bg-white px-4 py-8 lg:flex">
          <div className="mb-8 text-2xl font-bold text-orange-500">Leadzup</div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm`}
                style={{
                  backgroundColor: item.label === active ? "#FF6B1241" : "",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto flex flex-col items-center gap-3">
            <Image
              alt="User image"
              src={userSession?.user?.image || "/user.png"}
              height={10}
              width={10}
              className="h-12 w-12 rounded-full bg-gray-100"
            ></Image>{" "}
            <p className="text-sm font-medium">
              {userSession?.user?.name || "User"}
            </p>
          </div>
        </aside>

        <main className="flex-1 px-4 py-6 sm:px-8">
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">Dashboard</p>
              <h1 className="text-2xl font-semibold">
                Welcome back! Here’s your lead generation overview.
              </h1>
            </div>
            <Link
              href={"/pricing"}
              className="rounded-full border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600"
            >
              Scout Plans
            </Link>
          </header>

          {active === "Home" && (
            <>
              <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl border text-gray-500 border-gray-100 bg-white p-5 shadow-sm">
                  <span className="font-bold">Leads Today</span>{" "}
                  <p className="mt-4 text-4xl font-bold">{leadsToday}</p>
                  <p className="mt-2 text-sm text-gray-500"></p>
                </div>
                <div className="rounded-3xl border text-gray-500 border-gray-100 bg-white p-5 shadow-sm">
                  <span className="font-bold">DM (Reddit)</span>{" "}
                  <p className="mt-4 text-4xl font-bold">{DMs}</p>
                  <p className="mt-2 text-sm text-gray-500"></p>
                </div>
                <div className="rounded-3xl border text-gray-500 border-gray-100 bg-white p-5 shadow-sm">
                  <span className="font-bold">Credits</span>{" "}
                  <p className="mt-4 text-4xl font-bold">
                    {userData.currentCredits}
                  </p>
                  <p className="mt-2 text-sm text-gray-500"></p>
                </div>
                <div className="rounded-3xl border text-gray-500 border-gray-100 bg-white p-5 shadow-sm">
                  <span className="font-bold">Active Plan</span>{" "}
                  <p className="mt-4 text-4xl font-bold">
                    {userData.activePlan}
                  </p>
                  <p className="mt-2 text-sm text-gray-500"></p>
                </div>
              </section>

              <section className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col w-full h-full ">
                  <h2 className="text-lg font-semibold relative top-0">
                    Leads Generated Today
                  </h2>
                  <div className="h-full w-full"></div>
                </div>
              </section>
            </>
          )}

          {active === "Generated Leads" && (
            <section className="w-[80%] h-[80%] flex flex-col gap-1.5 mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col w-full h-full ">
                <h2 className="text-lg font-semibold relative top-0">
                  All Leads Generated
                </h2>
                <div className="h-full w-full"></div>
              </div>
            </section>
          )}
          {active === "DMs (Reddit)" && (
            <section className="w-[80%] h-[80%] flex flex-col gap-1.5 mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col w-full h-full ">
                <h2 className="text-lg font-semibold relative top-0">
                  Personalised Dms
                </h2>
                <div className="h-full w-full"></div>
              </div>
            </section>
          )}
          {active === "Profile" && (
            <>
              <section className="w-[80%]  flex flex-col gap-1.5 mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center">
                  🎯 Strategic Profile & Usage
                </h3>

                {/* 1. Core Strategic Fields (Website, Description, Keywords) */}
                <div className="space-y-4 mb-8">
                  {/* PurposeOfUse */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-xs font-semibold uppercase text-indigo-500">
                      PurposeOfUse
                    </p>
                    <p className="text-base text-gray-900 wrap-break-word pt-1">
                      {userData.PurposeOfUse}
                    </p>
                  </div>
                  {/* Website */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-xs font-semibold uppercase text-indigo-500">
                      Website
                    </p>
                    <p className="text-base text-gray-900 wrap-break-word pt-1">
                      {userData.website}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-xs font-semibold uppercase text-indigo-500">
                      Description
                    </p>
                    <p className="text-base text-gray-700 pt-1 whitespace-pre-line">
                      {userData.description}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-xs font-semibold uppercase text-indigo-500">
                      Keywords
                    </p>
                    <div className="text-base text-gray-900 pt-1 break-words flex gap-1.5">
                      {userData.keywords.map((keyword, i) => (
                        keyword.trim()?<div
                          key={i}
                          className=" text-gray-600 text-md rounded-xl border border-gray-100 bg-white p-1 shadow-sm"
                        >
                          {keyword.trim()}{" "}
                        </div>:<div key={i}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Usage & Competitor Section (Grid Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-6 border-gray-200">
                  {/* Credits Card */}
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center shadow-sm">
                    <p className="text-sm font-medium text-orange-700">
                      Available Credits
                    </p>
                    <p className="text-4xl font-extrabold text-orange-600 mt-1">
                      {userData.currentCredits}
                    </p>
                  </div>

                  {/* Plan Card */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center shadow-sm">
                    <p className="text-sm font-medium text-blue-700">
                      Current Plan
                    </p>
                    <p className="text-2xl font-bold text-blue-600 mt-2">
                      {userData.activePlan}
                    </p>
                  </div>

                  {/* Competitors List */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm md:col-span-1">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Key Competitors
                    </p>
                    <p className="text-sm text-gray-600 italic break-words">
                      {userData.competitors}
                    </p>
                  </div>
                </div>
                <br />
                <button
                  className="text-gray-400 text-sm cursor-pointer relative left-0 w-fit"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
