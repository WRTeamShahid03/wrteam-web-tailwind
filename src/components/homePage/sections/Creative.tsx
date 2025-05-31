import Image from "next/image";
import teamImg from '../../../assets/images/homePage/teamImg.png'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          {/* Left box */}
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Boost Your Business Website and Mobile App with Cutting-Edge IT
              Solutions.
            </h2>
          </div>

          {/* Right box */}
          <div className="md:w-1/2 flex flex-col mt-6 md:mt-0">
            <p className="text-gray-700">
              Upgrade your business administration with WRTeam. Create a
              customized and feature-loaded website or mobile app with expert
              and experienced developers at WRTeam, providing digital solutions
              tailored to your needs.
            </p>

            {/* This div arranges button and creative minds section in one row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-4">
              <button className="primaryBg hover:bg-blue-700 text-white px-5 py-2 rounded-md flex items-center gap-2">
                Get to Know Us <span>→</span>
              </button>

              <div className="flex flex-col">
                <p className="font-medium">Meet Our Creative Minds</p>
                <p className="text-gray-700 text-sm">
                  Design. Develop. Inspire.
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex -space-x-4">
                 <Image src={teamImg} alt="teamImg" width={0} height={0} className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs" />  
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
                  50+
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-64 bg-gray-200 rounded-lg mt-8"></div>
      </div>
    </section>
  );
};

export default HeroSection;
