import LicensePlan from "../../license/LicensePlan";

interface dataProps {
  layoutOne?: boolean;
}

const PerfectPlan: React.FC<dataProps> = ({ layoutOne }) => {
  return (
    <div className={`relative ${layoutOne ? 'productDetailPrimaryBg' : ''} py-6 md:py-8 lg:py-10`} id="license">
      <div className="container commonMT">
        {/* Header section */}
        <div className="flexColCenter commonTextGap text-center">
          <h2 className="sectionTitle !font-bold">
            Choose the perfect plan for your unique needs
          </h2>
          <p className="sectionPara text-sm mb-8">
            See the differences between the regular and extended licenses, and
            pick the one that fits what you need.
          </p>

        </div>

        {/* Pricing table with responsive scrolling */}
        <LicensePlan />
      </div>
    </div>
  );
}

export default PerfectPlan
