'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';   // ← `next/navigation` for App Router
import noDataImg from '@/assets/images/404_Image.svg';
import Loader from '@/components/commonComponents/Loader/Loader';

const Custom404 = () => {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);
  const pathname = usePathname();
  const [redirecting, setRedirecting] = useState(true);

  console.log(pathname);

  const salePages = [
    '/cyber-week-sale',
    '/steals-of-the-week-sale',
    '/extended-license-sale-25',
    '/new-year-sale',
    '/freedom-sale?utm_source=web&utm_medium=web_strip&utm_campaign=freedom_sale',
    '/freedom-sale',
    '/extended-license-sale-25?utm_source=website&utm_medium=strip&utm_campaign=extended_lice_sale_25',
    '/mid-year-sale'
  ];

  useEffect(() => {
    let redirected = false;

    if (salePages.includes(pathname)) {
      router.replace(`/`);
      redirected = true;
    }

    switch (pathname) {
      case '/products/edemand-multi-vendor-on-demand-home-doorstep-services-marketplace-with-flutter-app-admin-panel':
        router.replace(`/product-details/edemand-multi-vendor-on-demand-handy-services-handyman-with-flutter-app-admin-panel-web-version`);
        redirected = true;
        break;
      case '/product-detail-page/ebroker-real-estate-property-buyrentsell-flutter-app-with-laravel-admin-panel':
        router.replace(`/product-details/ebroker-real-estate-property-buy-rent-sell-flutter-app-with-laravel-admin-panel-web-version`);
        redirected = true;
        break;
      case '/product-detail-page/elite-quiz-trivia-quiz-quiz-game-web-version-2':
        router.replace(`/product-details/elite-quiz-trivia-quiz-quiz-game-web-version`);
        redirected = true;
        break;
      case '/products/app-products':
      case '/products/web-products':
      case '/product':
        router.replace(`/products`);
        redirected = true;
        break;
      case '/web-development':
        router.replace(`/services/web-development`);
        redirected = true;
        break;
      case '/app-development':
        router.replace(`/services/app-development`);
        redirected = true;
        break;
      case '/ui-ux-design':
        router.replace(`/services/ui-ux-design`);
        redirected = true;
        break;
      case '/digital-marketing':
        router.replace(`/services/digital-marketing`);
        redirected = true;
        break;
      case '/careers':
        router.replace(`/career`);
        redirected = true;
        break;
      default:
        break;
    }

    // Check product or blog redirect cases
    if (
      pathname.startsWith('/products/') ||
      pathname.startsWith('/product/') ||
      pathname.startsWith('/blogs/')
    ) {
      redirected = true;

      if (pathname.startsWith('/products/') || pathname.startsWith('/product/')) {
        const slug = pathname.replace(`${pathname.startsWith('/products/') ? '/products/' : '/product/'}`, '');
        if (slug === 'edemand-multi-vendor-on-demand-home-doorstep-services-marketplace-with-flutter-app-admin-panel') {
          router.replace(`/product-details/edemand-multi-vendor-on-demand-handy-services-handyman-with-flutter-app-admin-panel-web-version`);
        } else {
          router.replace(`/product-details/${slug}`);
        }
      }

      if (pathname.startsWith('/blogs/')) {
        const slug = pathname.replace(`/blogs/`, '');
        if (slug) {
          router.replace(`/blogs`);
        }
      }
    }

    setRedirecting(redirected);

    if (!redirected && typeof window !== 'undefined' && window.history.length > 1) {
      setCanGoBack(true);
    }
  }, [pathname, router]);


  // If we're redirecting, don't show the 404 page
  if (pathname.startsWith('/products/')) {
    return null;
  }

  return (
    redirecting ? <Loader /> :
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
