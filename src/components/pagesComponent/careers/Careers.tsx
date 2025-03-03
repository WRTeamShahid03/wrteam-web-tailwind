import Layout from "@/components/layout/Layout";

export default function Careers() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16 max-w-6xl commonMT">
        {/* Work With Us section */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-blue-50 text-blue-600 font-medium px-4 py-2 rounded-md mb-6 font-poppins">
            Work With Us
          </div>

          {/* Join Our Team heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat">
            Join Our <span className="text-blue-600">Team</span>
          </h1>

          {/* Description paragraph */}
          <p className="text-gray-500 font-medium max-w-3xl mx-auto text-center mb-16 font-poppins leading-relaxed">
            WRTeam invites all aspiring and experienced IT professionals to join
            and become a part of our family and give the right direction to
            their careers. We&apos;re a leading web & mobile app development
            company, offering the best App development solutions at reasonable
            prices. Our motto is to grow together, and we focus on the holistic
            development of your career along with the growth of the company.
          </p>

          {/* Job listings section can be added here */}
        </div>
      </section>
    </Layout>
  );
}
