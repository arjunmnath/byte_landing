"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  User,
  Mail,
  Smartphone,
  Send,
  Check,
  Star,
  Zap,
  Gift,
  Loader2,
  Apple,
} from "lucide-react";

const BetaApplicationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "ios",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const clayFloat = `
    bg-white 
    shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)]
    rounded-[2rem] border border-white
  `;

  const clayInset = `
    bg-[#F5EFE8]
    shadow-[inset_4px_4px_8px_rgba(204,190,178,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
    rounded-[1rem] border-none outline-none
    text-[#5C4D45] font-bold placeholder-[#B0A69E]
  `;

  const clayBtnPrimary = `
    bg-[#FF9E75] text-white
    shadow-[6px_6px_12px_rgba(255,158,117,0.4),_-2px_-2px_6px_rgba(255,255,255,0.4)]
    active:shadow-[inset_3px_3px_6px_rgba(180,100,60,0.2)]
    active:translate-y-[2px]
    transition-all duration-200
  `;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfjvawKPlOFQeSie-WUW5kiqp6Q0zqMlzQA-OM-K5WX8dSjpw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.1032559442": formData.name,
          "entry.1724046578": formData.email,
          "entry.1532332021": formData.platform,
          "entry.1861519418": formData.reason,
        }),
      }
    )
      .then(() => {
        setIsSuccess(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] font-sans text-[#5C4D45] flex justify-center p-6 lg:p-12 selection:bg-orange-200">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="flex flex-col items-start animate-in slide-in-from-bottom-10 duration-700">
          {/* Back Button */}
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#9C8C84] hover:text-[#FF9E75] transition-colors mb-8">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>

          <div className="inline-block px-4 py-2 bg-[#FFF0E6] rounded-full text-[#FF9E75] font-black text-xs uppercase tracking-wider mb-6 shadow-sm">
            Early Access Program
          </div>

          <h1 className="text-5xl font-black mb-6 tracking-tight leading-tight">
            Shape the future of <span className="text-[#FF9E75]">Byte.</span>
          </h1>

          <p className="text-lg font-bold text-[#9C8C84] mb-10 leading-relaxed max-w-md">
            We're looking for 100 foodies to break our app (gently). Join the
            beta, get free food credits, and help us squash bugs.
          </p>

          {/* Benefits List */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: Zap,
                title: "Early Access",
                desc: "Try features before anyone else.",
              },
              {
                icon: Gift,
                title: "Free Credits",
                desc: "₹2,000 in food credits for feedback.",
              },
              {
                icon: Star,
                title: "Founder Badge",
                desc: "Exclusive profile badge forever.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[1rem] bg-white flex items-center justify-center text-[#FF9E75] shadow-sm">
                  <item.icon size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-black text-sm">{item.title}</h3>
                  <p className="text-xs font-bold text-[#9C8C84]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE FORM CARD --- */}
        <div className="relative">
          {/* Decorative blob behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFE4D6] rounded-full blur-3xl opacity-40 -z-10"></div>

          <div
            className={`${clayFloat} p-8 lg:p-10 relative overflow-hidden transition-all duration-500`}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-in zoom-in duration-300">
                <div className="w-24 h-24 bg-[#EAF8E6] rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <Check size={48} className="text-[#4CAF50]" strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-black mb-3">
                  You're on the list!
                </h2>
                <p className="text-[#9C8C84] font-bold max-w-xs mb-8">
                  Keep an eye on your inbox. We'll send you a TestFlight or Play
                  Store link soon.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-[#FF9E75] font-black text-sm uppercase hover:underline"
                >
                  Start Over
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="text-2xl font-black">Application</h2>

                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wide ml-1 text-[#9C8C84]">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6C6BA]"
                      size={20}
                    />
                    <input
                      required
                      type="text"
                      className={`${clayInset} w-full pl-12 pr-4 py-4`}
                      placeholder="Gordon Ramsay"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wide ml-1 text-[#9C8C84]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6C6BA]"
                      size={20}
                    />
                    <input
                      required
                      type="email"
                      className={`${clayInset} w-full pl-12 pr-4 py-4`}
                      placeholder="gordon@kitchen.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Platform Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wide ml-1 text-[#9C8C84]">
                    Device
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, platform: "ios" })
                      }
                      className={`py-4 rounded-[1rem] flex items-center justify-center gap-2 font-black transition-all ${
                        formData.platform === "ios"
                          ? "bg-[#5C4D45] text-white shadow-lg scale-[0.98]"
                          : "bg-white text-[#9C8C84] shadow-md hover:bg-gray-50"
                      }`}
                    >
                      <Apple size={20} /> iOS
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, platform: "android" })
                      }
                      className={`py-4 rounded-[1rem] flex items-center justify-center gap-2 font-black transition-all ${
                        formData.platform === "android"
                          ? "bg-[#5C4D45] text-white shadow-lg scale-[0.98]"
                          : "bg-white text-[#9C8C84] shadow-md hover:bg-gray-50"
                      }`}
                    >
                      <Smartphone size={20} /> Android
                    </button>
                  </div>
                </div>

                {/* Reason Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wide ml-1 text-[#9C8C84]">
                    Why you?
                  </label>
                  <textarea
                    className={`${clayInset} w-full p-4 h-32 resize-none`}
                    placeholder="I order food 5 times a week..."
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${clayBtnPrimary} w-full py-5 rounded-[1.5rem] font-black text-lg uppercase tracking-wide flex items-center justify-center gap-2 mt-2 group`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={24} className="animate-spin" /> Processing
                    </>
                  ) : (
                    <>
                      Apply Now{" "}
                      <Send
                        size={20}
                        strokeWidth={3}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaApplicationPage;
