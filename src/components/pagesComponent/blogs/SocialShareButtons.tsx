"use client";

import React from "react";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const SocialShareButtons = () => {
  return (
    <div className="flex items-center gap-3 secondaryColor mt-8">
      <h3 className="seondaryColor font-extrabold text-lg">Follow Us : </h3>
      <div className="flex items-center gap-3">
        <Link
          href={process.env.NEXT_PUBLIC_FACEBOOK || "https://facebook.com"}
          title="Facebook"
          target="_blank"
        >
          <span className="facebook">
            <BsFacebook size={30} />
          </span>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_TWITTER || "https://twitter.com"}
          title="Twitter"
          target="_blank"
        >
          <span className="twitter">
            <FaSquareXTwitter size={30} />
          </span>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_YOUTUBE || "https://youtube.com"}
          title="Youtube"
          target="_blank"
        >
          <span className="pintrest">
            <TbBrandYoutubeFilled size={34} />
          </span>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_LINKEDIN || "https://linkedin.com"}
          title="Linkedin"
          target="_blank"
        >
          <span className="linkedin">
            <BsLinkedin size={30} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialShareButtons;
