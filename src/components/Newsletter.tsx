"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../assets/images/homePage/newsLetterImg.png";
import toast from "react-hot-toast";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const brevoApiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY!;

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            FIRSTNAME: name,
          },
          listIds: [84],
          updateEnabled: true, // Updates the contact if it already exists
        }),
      });

      console.log("response", response);

      if (response.ok) {
        toast.success(`Great, We've Sent You Source Code In Mail!`);
        setName("");
        setEmail("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="primaryBg p-4 rounded-[30px] -mt-36 z-[1] shadow-[0_16px_46px_#2e71fe29] m-auto left-0 right-0">
      <div className="grid grid-cols-12 gap-y-6">
        <div className="col-span-12 lg:col-span-9 flexCenter flex-wrap sm:flex-nowrap">
          <div>
            <Image src={img} height={0} width={0} alt="" />
          </div>
          <div className="xl:w-[70%]">
            <h6 className="sectionTitle !text-white">
              Grab Free Source Code of Quiz Online iOS
            </h6>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 flexCenter">
          <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-[8px] p-2 focus:outline-none w-full textSecondary"
                onChange={(e) => setName(e.target.value)}
                required
                value={name}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="rounded-[8px] p-2 focus:outline-none w-full textSecondary"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
            </div>
            <div>
              <button
                className="commonBtn !w-full transition-all duration-300 hover:primaryColor"
                type="submit"
                value="Send"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
