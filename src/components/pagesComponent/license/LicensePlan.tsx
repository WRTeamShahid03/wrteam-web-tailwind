import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LicensePlan = () => {

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
            <TableHead className="text-center font-semibold p-4 text-lg md:text-xl textSecondary border-r">Regular License</TableHead>
            <TableHead className="text-center font-semibold p-4 text-lg md:text-xl textSecondary">Extended License</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {regularLicenseData.map((item, index) => (
            <TableRow key={item.id} className="border-t">
              <TableCell className="p-4 border-r flex flex-wrap items-center gap-1 font-semibold">
                <span className="md:text-base">{item.detail}</span>
                {item.otherText && <span className="textSecondary text-sm"> ({item.otherText})</span>}
              </TableCell>
              <TableCell className="text-center m-auto border-r">
                {item.add ? <FaCheckCircle className="text-green-500 m-auto" size={18}/> : <RiCloseCircleFill className="text-[#ff0018e8] m-auto" size={20}/>}
              </TableCell>
              <TableCell className="text-center m-auto">
                {extendedLicenseData[index].add ? <FaCheckCircle className="text-green-500 m-auto" size={18}/> : <RiCloseCircleFill className="text-[#ff0018e8] m-auto" size={20}/>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default LicensePlan;
