"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

const CopyRightDisclaimer = () => {
  return (
    <Layout>
      <section className="container commonMT commonMB">
        <div className="rounded-xl shadow-[0_2px_8px_0_#63636333] py-4 md:py-8 px-1 md:px-4 space-y-6 md:space-y-12">
          <div className="flex justify-center">
            <h1 className="text-xl font-semibold text-center secondaryColor underline sm:text-3xl">
              Copyright & Disclaimer
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 px-4 sm:px-2">
              <h2 className="text-lg md:text-xl font-medium">Copyright:</h2>
              <p className="text-sm md:text-base secondaryColor">
                The WRTeam website&apos;s design, images, and content are its
                proprietary property and are protected against breach by
                copyright laws. Copyright © All rights reserved. While some of
                the graphics were made by WRTeam, some might have come from
                non-copyrighted platforms. Every written content is original by
                WRTeam. Products listed on the website are the sole property of
                WRTeam.
              </p>
            </div>

            <div className="flex flex-col gap-3 px-4 sm:px-2">
              <h3 className="text-lg md:text-xl font-medium">Disclaimer:</h3>
              <p>
                WRTeam is an expert in developing websites and applications. It
                offers customised code for multiple businesses via our{" "}
                <Link
                  className="primaryColor underline"
                  href={"https://wrteam.in/"}
                  title="WRTeam"
                >
                  website
                </Link>{" "}
                and{" "}
                <Link
                  className="primaryColor underline"
                  href={"https://1.envato.market/vNz3zy"}
                  title="envatoLink"
                >
                  envato profile.
                </Link>{" "}
                UI/UX design, digital marketing, and logo and banner creation
                are further services offered.
              </p>
            </div>

            <div className="flex flex-col gap-3 px-4 sm:px-2">
              <h4 className="text-lg md:text-xl font-medium">
                Copyright Ownership:
              </h4>
              <p className="text-sm md:text-base secondaryColor">
                WRTeam asserts its exclusive ownership over all graphics,
                content, and design displayed on the website. Some graphics are
                sourced from non-copyrighted platforms, while others are
                personally created by WRTeam. All written content is original
                and created by WRTeam. Products listed on the website are the
                sole property of WRTeam.
              </p>
            </div>

            <div className="flex flex-col gap-3 px-4 sm:px-2">
              <h5 className="text-lg md:text-xl font-medium">
                Disclaimer Points:
              </h5>
              <ul className="flex flex-col gap-1 list-disc pl-5 secondaryColor">
                <li>
                  WRTeam sells its products only through its{" "}
                  <Link
                    className="primaryColor underline"
                    href={"https://wrteam.in/"}
                    title="WRTeam"
                  >
                    website
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="primaryColor underline"
                    href={"https://1.envato.market/vNz3zy"}
                    title="envatoLink"
                  >
                    envato profile.
                  </Link>
                </li>
                <li>Products are not sold on any other platforms.</li>
                <li>
                  The refund policy for products purchased on Envato applies,
                  and users are encouraged to read and review the documentation
                  before seeking support.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 px-4 sm:px-2">
              <h6 className="text-lg md:text-xl font-medium">
                User Agreement:
              </h6>
              <p className="text-sm md:text-base secondaryColor">
                The terms and conditions listed in the Copyright & Disclaimer
                section will be followed by users. Any use, reproduction, or
                distribution of content without written permission from WRTeam
                is strictly prohibited.
              </p>
            </div>
            <div className="flex flex-col gap-3 px-4 sm:px-2">
              <h6 className="text-lg md:text-xl font-medium">
                Contact Information:
              </h6>
              <p className="text-sm md:text-base secondaryColor">
                For any inquiries, support, or feedback, please contact us at:
              </p>
              <ul className="flex flex-col gap-1 list-disc pl-5 secondaryColor">
                <li>
                  Email:{" "}
                  <Link
                    className="primaryColor underline"
                    href={"mailto:support@wrteam.in"}
                    title="support@wrteam.in"
                  >
                    support@wrteam.in
                  </Link>
                </li>
                <li>
                  Contact Number:{" "}
                  <Link
                    className="primaryColor underline"
                    href={"tel:+919797945459"}
                    title="+919797945459"
                  >
                    +919797945459
                  </Link>
                </li>
              </ul>
            </div>

            <div className="px-4 sm:px-2">
              <p className="text-sm md:text-base secondaryColor">
                By using this website, you agree to the terms of this Copyright
                & Disclaimer. If you do not agree with these terms, please
                refrain from using our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CopyRightDisclaimer;
