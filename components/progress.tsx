"use client";

import { UserDataType, clientContext } from "@/context/ClientDataContext";
import axios from "axios";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect, createContext } from "react";
export default function Progress() {
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [Keywords, setKeywords] = useState<string[]>(["", "", ""]);
  const [totalCompititors, setTotalCompititors] = useState(1);
  const [competitors, setCompetitors] = useState<string[]>([""]);
  const [selectedPlan, setSelectedPlan] = useState<
    "Value Pack" | "Micro Pack" | "Bulk Pack" | "Demo"
  >("Demo");
  const { data: session, status } = useSession();
  const [userStatus, setuserStatus] = useState<string>(status);
  const [userSession, setuserSession] = useState<Session | undefined>(
    session ?? undefined
  );
  const [PurposeOfUse, setPurposeOfUse] = useState<
    "Marketing" | "Job Hunt" | "Freelancing Leads"
  >();
  const [currentCredits, setCurrentCredits] = useState<number>(50);
  
  const ArrowRightSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );

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
    {
      name: "Demo",
      price: "$ 00",
    },
  ];

  const planFeatures = {
    "Value Pack": [
      "personalised Marketing",
      "personalised DMs",
      "Custom Keyword tracking",
      "Generated Leads details",
      "Adds 500 Credits",
      "3.0¢ per Credit (Best Value)",
    ],
    "Micro Pack": [
      "personalised Marketing",
      "personalised DMs",
      "Custom Keyword tracking",
      "Generated Leads details",
      "Adds 100 Credits",
      "4.0¢ per Credit",
    ],
    "Bulk Pack": [
      "personalised Marketing",
      "personalised DMs",
      "Custom Keyword tracking",
      "Generated Leads details",
      "Conversation Follow ups",
      "Adds 1000 Credits",
      "2.5¢ per Credit (Max Discount)",
    ],
    Demo: [
      "Free 50 credits",
      "Personalised Marketing",
      "Generated Leads details",
    ],
  };

  const clientContextContext = clientContext();

  //--------------------------------checking Is onboarded??
  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.email) {
      setIsOnboarded(null);
      return;
    }
    console.log(isOnboarded);
    setuserSession(session);
    setuserStatus(status);

    const checkOnboarding = async () => {
      try {
        const gmail = session.user?.email;
        const res = await axios.post("/api/check-onboarding", { gmail });
        const exists = res.data.response !== null;
        setIsOnboarded(exists);
        if (exists) {
          clientContextContext?.setUserData(res.data)

        }
      } catch (err) {
        console.error(err);
        setIsOnboarded(false);
      }
    };

    checkOnboarding();
  }, [status, session]);

  const updateCompetitor = (index: number, value: string) => {
    if (competitors.length === 0) return;
    const updated = [...competitors];
    updated[index] = value;
    setCompetitors(updated);
  };
  const handleFinish = async () => {
    console.log(
      userSession?.user?.email,
      PurposeOfUse,
      companyWebsite,
      companyDescription,
      Keywords,
      competitors,
      selectedPlan,
      currentCredits
    );
    if (
      userSession?.user?.email &&
      PurposeOfUse &&
      companyWebsite &&
      companyDescription &&
      Keywords &&
      competitors &&
      selectedPlan &&
      currentCredits
    ) {
      const res = await axios.post("/api/update-onboarding", {
        gmail: userSession?.user?.email,
        PurposeOfUse: PurposeOfUse,
        website: companyWebsite,
        description: companyDescription,
        keywords: Keywords,
        competitors: competitors,
        activePlan: selectedPlan,
        isDemoProvided: true,
        currentCredits: currentCredits,
      });
      if (res.status === 200) {
        setIsOnboarded(true);
      }
    } else {
      alert("Fill all details");
    }
  };

  const handleBuy = () => {
    console.log("bought");
    handleFinish();
  };
  const handleKeywordChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newKeywords = [...Keywords];
    newKeywords[index] = e.target.value;
    setKeywords(newKeywords);
  };
  const handleMoreKeyword = (keyword: "add" | "remove") => {
    if (keyword === "add") {
      if (Keywords.length < 5) {
        setKeywords([...Keywords, ""]);
      } // Add a new empty keyword field
      else return;
    } else {
      if (Keywords.length >= 1) {
        setKeywords(Keywords.slice(0, -1));
      }
    }
  };

  if (isOnboarded === null) {
    return null; // Loading state
  }
  console.log(userStatus);

  if (isOnboarded || userStatus === "unauthenticated") {
    return null; // User is already onboarded
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex backdrop-blur-sm items-center justify-center p-4">
        <div className=" p-2 fixed top-0 right-0 mt-4 mr-8 text-gray-700 rounded-lg ">
          {" "}
          {userSession?.user?.email}
        </div>
        <button
          className=" p-2 fixed bottom-0 text-xs  right-0 mt-4 mr-8 text-gray-700 rounded-lg "
          onClick={() => signOut()}
        >
          {" "}
          {<LogOut />}
          Logout
        </button>
        <div className="bg-white w-[80%] h-[90%] rounded-lg shadow-[0px_0px_10px_black] max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col h-full w-full lg:flex-row">
            {/* Left Side - Form */}
            <div className="flex-1 p-6 lg:p-6 overflow-hidden">
              {currentStep === 1 && (
                <div className="flex flex-col justify-between  h-full">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Tell us about your company
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We'll use it to learn about your product and suggest you
                      the most relevant Reddit posts to target.
                    </p>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Website
                      </label>
                      <input
                        type="text"
                        value={companyWebsite}
                        onChange={(e) => setCompanyWebsite(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                        required
                      />
                      <label htmlFor="myDropdown">Purpose of use:</label>
                      <select
                        id="myDropdown"
                        name="selectedOption"
                        onChange={(e) =>
                          setPurposeOfUse(
                            e.target.value as
                              | "Marketing"
                              | "Job Hunt"
                              | "Freelancing Leads"
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900 font-medium mt-2"
                      >
                        <option value="">Select a purpose</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Job Hunt">Job Hunt</option>
                        <option value="Freelancing Leads">
                          Freelancing Leads
                        </option>
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={!companyWebsite || !PurposeOfUse}
                    className=" bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
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
                </div>
              )}

              {currentStep === 2 && (
                <div className="bg-gray-50 h-full w-full flex justify-center items-center">
                  <div className="bg-white overflow-hidden flex flex-col justify-between h-full w-full ">
                    <div className="w-full lg:p-5  space-y-8">
                      {/* Header */}
                      <div>
                        <h1 className="text-3xl font-extrabold text-gray-900">
                          Tell us about your competitors
                        </h1>
                        <p className="mt-2 text-base text-gray-500">
                          Let's gather some info to create your personalized
                          setup.
                        </p>
                      </div>

                      {/* Form Fields */}
                      <form className="space-y-6">
                        {/* Company Website Input */}
                        <div>
                          <label
                            htmlFor="website"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Business Website{" "}
                            <span className="text-gray-500 text-xs">
                              (max 3)
                            </span>
                          </label>
                          {[...Array(Math.min(totalCompititors, 3))].map(
                            (_, index) => (
                              console.log("hi" + index),
                              (
                                <div className="mt-1">
                                  <input
                                    id={`website-${index}`}
                                    name="website"
                                    type="url"
                                    key={index}
                                    value={competitors[index] ?? ""}
                                    placeholder="https://www.company.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                    onChange={(e) =>
                                      updateCompetitor(index, e.target.value)
                                    }
                                  />
                                </div>
                              )
                            )
                          )}
                        </div>

                        {/* Addmore */}
                        <button
                          type="button"
                          className="flex items-center justify-center px-4 py-2 border border-green-600 text-green-600 text-sm font-semibold rounded-lg hover:bg-green-50 transition-colors"
                          onClick={() =>
                            setTotalCompititors((prev) => prev + 1)
                          }
                        >
                          Add more
                        </button>
                      </form>
                    </div>
                    {/* Footer/Navigation */}
                    <div className="pt-4 border-t border-gray-100 flex justify-between">
                      <div className="flex flex-col gap-1">
                        <button
                          type="button"
                          className="text-sm text-gray-500"
                          onClick={() => setCurrentStep((prev) => prev + 1)}
                        >
                          Skip
                        </button>
                        <button
                          type="button"
                          className="text-sm text-gray-500"
                          onClick={() => setCurrentStep((prev) => prev - 1)}
                        >
                          Back
                        </button>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-2 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                        // disabled={!(competitors.length > 0)}
                        onClick={() => setCurrentStep((prev) => prev + 1)}
                      >
                        Save & Next
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <>
                  <div className="h-full w-full bg-gray-50 flex flex-col justify-between">
                    <div className="bg-white rounded-xl w-full max-w-2xl space-y-8">
                      {/* Company Description Section */}
                      <div>
                        <label
                          htmlFor="company-description"
                          className="block lg:text-xl text-sm font-bold text-gray-900 mb-3"
                        >
                          Business Description:
                        </label>
                        <textarea
                          id="company-description"
                          rows={4} // Adjust rows as needed for the blueprint's large textarea
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-gray-800 text-base"
                          placeholder="Provide a detailed description of your company, its mission, and what it offers..."
                          value={companyDescription}
                          onChange={(e) =>
                            setCompanyDescription(e.target.value)
                          }
                        />
                      </div>

                      {/* Keywords Section */}
                      <div>
                        <label className="block lg:text-xl text-sm font-bold text-gray-900 mb-3">
                          Keywords{" "}
                          <span className="text-xs text-gray-400">
                            (target)
                          </span>
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {Keywords.map((keyword: string, index) => (
                            <input
                              key={index} // Using index as key is generally discouraged but acceptable for dynamic lists without reordering
                              type="text"
                              className="w-full text-xs px-3 py-1 border border-gray-300 rounded-xl shadow-sm text-gray-800 "
                              placeholder={`Keyword ${index + 1}`}
                              value={keyword}
                              onChange={(e) => handleKeywordChange(index, e)}
                            />
                          ))}
                        </div>

                        <div className="flex justify-between">
                          <button
                            type="button"
                            onClick={() => handleMoreKeyword("add")}
                            className="mt-6 inline-flex items-center p-2 border border-gray-300 rounded-xl 
                       text-gray-700 font-semibold bg-white hover:bg-gray-50 
                       transition-colors shadow-sm"
                          >
                            Add More
                          </button>
                          <button
                            type="button"
                            onClick={() => handleMoreKeyword("remove")}
                            className="mt-6 inline-flex items-center p-2 border border-gray-300 rounded-xl 
                       text-gray-700 font-semibold bg-white hover:bg-gray-50 
                       transition-colors shadow-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-gray-100 flex justify-between">
                      <button
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                        className="text-sm text-gray-500"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-2 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                        onClick={() => setCurrentStep((prev) => prev + 1)}
                      >
                        Save & Continue{" "}
                        <ArrowRightSVG className="w-6 h-6 ml-3" />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 4 && (
                <section className="w-full h-full overflow-y-auto p-4">
                  <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#fff4e8] px-3 py-1 text-sm font-medium text-orange-600">
                    <p className="text-sm font-semibold uppercase text-orange-500">
                      Choose Your Plan
                    </p>
                  </div>
                  <div className="mt-6 space-y-4">
                    {plans.map((plan, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedPlan(
                            plan.name as
                              | "Value Pack"
                              | "Micro Pack"
                              | "Bulk Pack"
                              | "Demo"
                          );
                        }}
                        className={`flex w-full items-center justify-between rounded-2xl border p-3 text-left`}
                        style={{
                          backgroundColor:
                            plan.name === selectedPlan ? "#FF6B1241" : "",
                        }}
                      >
                        <div>
                          <p className="md:text-md text-sm font-semibold">
                            {plan.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="md:text-md text-sm  font-bold">
                            {plan.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#fff4e8] p-4 text-sm text-gray-700">
                    <p className="text-sm italic text-orange-600">★★★★★</p>
                    <p className="mt-2">
                      “Thanks to Leadzup, we now get a steady stream of 300
                      daily new potential leads just from Reddit. Absolute
                      game-changer for our growth!”
                    </p>
                    <p className="mt-3 text-xs font-semibold text-gray-500">
                      Iron Brands, Co-Founder of Simple Analytics
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => handleFinish()}
                        className="text-sm text-gray-500"
                      >
                        Skip/Finish
                      </button>
                      <button
                        type="button"
                        className="text-sm text-gray-500"
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                      >
                        Back
                      </button>
                    </div>
                    <button
                      onClick={handleBuy}
                      className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow"
                    >
                      Buy/Finish
                    </button>
                  </div>
                </section>
              )}
            </div>

            {/* Right Side - Visual/Graphics (Hidden on mobile) */}
            <div className="hidden lg:flex flex-1  bg-gray-50 p-3 lg:p-6 items-center justify-center">
              {currentStep === 4 ? (
                <section className="w-full h-full">
                  <div className="rounded-3xl bg-[#fff9f4] p-6">
                    <p className="text-3xl font-bold text-orange-500">
                      {selectedPlan || "Select Best Plan"}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Convert more Reddit leads into paying customers with daily
                      insights and expanded tracking to maximize your ROI.
                    </p>
                    <div className="mt-6 space-y-4 text-sm h-full">
                      <div>
                        <p className="font-semibold text-gray-900">
                          Our Offerings
                        </p>
                        <ul className="mt-2 space-y-1">
                          {[
                            ...planFeatures[
                              selectedPlan as
                                | "Micro Pack"
                                | "Value Pack"
                                | "Bulk Pack"
                                | "Demo"
                            ],
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <div className="w-full max-w-md space-y-8">
                  {/* Central Network Diagram */}
                  <div className="relative flex items-center justify-center py-8">
                    <div className="relative w-64 h-64">
                      {/* Central Speech Bubble */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      {/* Surrounding Icons */}
                      {[
                        { top: "0%", left: "50%", icon: "person" },
                        { top: "25%", right: "0%", icon: "chat" },
                        { top: "75%", right: "0%", icon: "reddit" },
                        { bottom: "0%", left: "50%", icon: "money" },
                        { top: "75%", left: "0%", icon: "cart" },
                        { top: "25%", left: "0%", icon: "bell" },
                      ].map((pos, idx) => (
                        <div
                          key={idx}
                          className="absolute w-12 h-12 bg-white rounded-full border-2 border-gray-200 shadow-md flex items-center justify-center"
                          style={{
                            top: pos.top,
                            left: pos.left,
                            right: pos.right,
                            bottom: pos.bottom,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {pos.icon === "person" && (
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {pos.icon === "chat" && (
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {pos.icon === "reddit" && (
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                r
                              </span>
                            </div>
                          )}
                          {pos.icon === "money" && (
                            <svg
                              className="w-6 h-6 text-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.613 1.242.88 2.353.88 1.11 0 1.79-.267 2.353-.88a1 1 0 10-1.51-1.31c-.163.187-.452.377-.843.504v-1.941a4.535 4.535 0 001.676-.662C13.398 9.765 14 8.99 14 8c0-.991-.602-1.765-1.324-2.246A4.535 4.535 0 0011 5.092V4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {pos.icon === "cart" && (
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                          )}
                          {pos.icon === "bell" && (
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
