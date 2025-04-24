'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';   // ← `next/navigation` for App Router
import noDataImg from '@/assets/images/404_Image.svg';

const Custom404 = () => {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  /* -------------------------------------------------- */
  /* detect browser history so we can enable “Go Back”  */
  /* -------------------------------------------------- */
  useEffect(() => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      setCanGoBack(true);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5 px-6 pt-8 pb-16 font-montserrat text-center h-screen">
      <h1 className='text-[#031C49] font-extrabold sectionTitle'>OPPS...</h1>
      <Image
        src={noDataImg}
        alt="Data not found illustration"
        className="my-8 w-auto h-auto max-w-full max-h-full object-contain"
        priority={false}
      />

      <div className="flex flex-col items-center justify-center gap-5">

        <h2 className="font-extrabold text-[#031C49] sectionTitle">
          Page Not Found!
        </h2>

        <span className="font-semibold text-[#545A68]">
          Looks like you stumbled onto a broken path. Try heading back to the Home.
        </span>

        {canGoBack ? (
          <button
            onClick={router.back}
            className="commonBtn mt-3 max-[479px]:text-sm max-[479px]:py-1"
          >
            Go Back
          </button>
        ) : (
          <Link href='/' title='Home'><button className='commonBtn'>Go To Home</button></Link>
        )}
      </div>
    </div>
  );
};

export default Custom404;
