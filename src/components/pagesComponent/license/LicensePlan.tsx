import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const LicensePlan = ({ detailPage, extendedLicensePrice, extendedLicenseLink, regularLicensePrice, checkoutUrl }: { detailPage: boolean, extendedLicensePrice?: number, extendedLicenseLink?: string, regularLicensePrice?: number, checkoutUrl?: string }) => {

  const regularLicenseData = [
    { id: 0, detail: "Lifetime License Validity", add: true },
    { id: 1, detail: "Permitted for 1 Domain", add: true },
    { id: 2, detail: "6 months of general and technical support", otherText: "As per Envato support policy", add: true },
    { id: 3, detail: "All Premium Features", add: true },
    { id: 4, detail: "Lifetime FREE Update", add: true },
    { id: 5, detail: "For Personal Project", add: true },
    { id: 6, detail: "For Commercial Projects", otherText: "If the end project is paid for using or sell", add: false },
    { id: 7, detail: "Postman Collection for REST API Documentation", add: false },
    { id: 8, detail: "Admin Panel FREE Installation in cPanel", otherText: "One Time", add: false },
    { id: 9, detail: "1 Year Priority Support", add: false },
    { id: 10, detail: "AnyDesk Support", add: false },
    { id: 11, detail: "FREE Website Setup", add: false },
  ];

  const extendedLicenseData = regularLicenseData.map((item, index) => ({
    ...item,
    add: index >= 6 ? true : item.add,
  }));

  return (
    <section className="container mx-auto p-2 md:p-4">
      <Table className="w-full border bg-white">
        <TableHeader className="">
          <TableRow className="font-semibold text-xl md:text-2xl">
            <TableHead className="text-left font-semibold p-4 border-r text-black">Product Plans</TableHead>
            <TableHead className="text-center font-semibold p-4 text-lg md:text-xl textSecondary border-r">
              <div className="flex flex-col gap-3 lg:pt-6 lg:pb-3">
                {
                  detailPage &&
                  <span className="productPrimaryColor text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold">${regularLicensePrice}</span>
                }
                <span className="text-sm sm:text-base md:text-lg ">Regular License</span>
                {
                  detailPage &&
                  <Link href={checkoutUrl || ''} target="_blank" className="text-sm md:text-base border productDetailPrimaryBorder rounded-[6px] p-1 productPrimaryColor flexCenter gap-1" title="Buy Now">
                    Buy Now
                    <FaArrowRight />
                  </Link>
                }
              </div>
            </TableHead>
            <TableHead className="text-center font-semibold p-4 text-lg md:text-xl textSecondary relative overflow-hidden">
              <span className={`hidden lg:block absolute top-[16px] left-[-60px] ${detailPage ? 'productPrimaryBg' : 'primaryBg'} text-white text-[12px] py-[0px] px-[18px] w-[220px] -rotate-[27deg]`}>
                Recommended
              </span>

              <div className="flex flex-col gap-3 lg:pt-6 lg:pb-3">
                {
                  detailPage &&
                <span className="productPrimaryColor text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold">${extendedLicensePrice}</span>
                }
                <span className="text-sm sm:text-base md:text-lg ">Extended License</span>
                {
                  detailPage &&
                  <Link href={extendedLicenseLink || ''} target="_blank" className="text-sm md:text-base border productDetailPrimaryBorder rounded-[6px] p-1 productPrimaryBg text-white flexCenter gap-1" title="Buy Now">
                    Buy Now
                    <FaArrowRight />
                  </Link>
                }
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {regularLicenseData.map((item, index) => (
            <TableRow key={item.id} className="border-t">
              <TableCell className="p-4 border-r flex flex-wrap gap-1 font-semibold flex-col">
                <span className="md:text-base">{item.detail}</span>
                {item.otherText && <span className="textSecondary text-sm"> ({item.otherText})</span>}
              </TableCell>
              <TableCell className="text-center m-auto border-r">
                {item.add ? <FaCheckCircle className="text-green-500 m-auto" size={18} /> : <RiCloseCircleFill className="text-[#ff0018e8] m-auto" size={20} />}
              </TableCell>
              <TableCell className="text-center m-auto">
                {extendedLicenseData[index].add ? <FaCheckCircle className="text-green-500 m-auto" size={18} /> : <RiCloseCircleFill className="text-[#ff0018e8] m-auto" size={20} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default LicensePlan;
