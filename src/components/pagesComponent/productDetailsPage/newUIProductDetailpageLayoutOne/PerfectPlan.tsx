import LicensePlan from "../../license/LicensePlan";

interface dataProps {
  layoutOne?: boolean;
  extendedLicensePrice?: number;
  extendedLicenseLink?: string;
  regularLicensePrice?: number;
  checkoutUrl?: string;
}

const PerfectPlan: React.FC<dataProps> = ({ layoutOne, extendedLicensePrice, extendedLicenseLink, regularLicensePrice, checkoutUrl }) => {
  return (
    <div className={`relative ${layoutOne ? 'productDetailPrimaryBg' : ''} py-6 md:py-8 lg:py-10`} id="license">
      <div className="container commonMT">
        {/* Header section */}
        <div className="flexColCenter commonTextGap text-center">
          <h5 className="sectionTitle !font-bold">
            Choose the perfect plan for your unique needs
          </h5>
          <p className="sectionPara text-sm mb-8">
            See the differences between the regular and extended licenses, and
            pick the one that fits what you need.
          </p>

        </div>

        {/* Pricing table with responsive scrolling */}
        <LicensePlan checkoutUrl={checkoutUrl} detailPage={true} extendedLicensePrice={extendedLicensePrice} extendedLicenseLink={extendedLicenseLink} regularLicensePrice={regularLicensePrice} />
      </div>
    </div>
  );
}

export default PerfectPlan
