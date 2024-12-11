"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const TermsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-transparent text-white min-h-screen p-8 flex items-center justify-center text-justify">
        <div className="max-w-4xl text-left border p-8 border-white rounded-lg shadow-lg" style={{boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)"}}>
          <h1 className="text-4xl font-bold text-center mb-8 neon-effect">
            TERMS AND CONDITIONS
          </h1>

          {/* Section 1 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              1. Platform Usage
            </h2>
            <p className="ml-4 text-gray-300 mb-2">
              <span className="font-bold">1.1.</span> WebInOrbit serves as a
              virtual gateway for college students to showcase their skills and
              connect with companies globally. Companies benefit from affordable
              design packages, personalized consultations, and high standards of
              service.
            </p>
            <p className="ml-4 text-gray-300">
              <span className="font-bold">1.2.</span> By using our platform, you
              acknowledge and agree that WebInOrbit is not responsible for the
              content posted by users. We encourage all users to maintain
              professionalism and adhere to ethical standards in their
              interactions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              2. Account Registration
            </h2>
            <p className="ml-4 text-gray-300 mb-2">
              <span className="font-bold">2.1.</span> To access certain features
              of WebInOrbit, you may be required to register for an account. You
              agree to provide accurate and complete information during the
              registration process and to keep your account credentials secure.
            </p>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">2.2.</span> As a user of WebInOrbit,
              you are responsible for maintaining the confidentiality of your
              account and password and for restricting access to your account.
              You agree to accept responsibility for all activities that occur
              under your account.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              3. Privacy and Security
            </h2>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">3.1.</span> WebInOrbit prioritizes the
              privacy and security of its users. We implement robust
              communication tools and privacy measures to ensure a secure
              environment for our community.
            </p>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">3.2.</span> By using our platform, you consent to the collection, use and disclosure of your personal information in accordance with our Privacy Policy.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              4. Intellectual Property Rights
            </h2>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">4.1.</span> All Content and materials available on WebInOrbit, including but not limited to text, graphics, logos, images, and software, are the property of Stubic Solutions Pvt Limited or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">4.2.</span> You may not reproduce, modify, distribute, display, or transmit any content or materials from WebInOrbit without prior written consent from Stubic Solutions Pvt Limited
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              5. Termination
            </h2>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">5.1.</span> Stubic Solutions Pvt Limited reserves the right to suspend or terminate your access to WebInOrbit at any time and for any reason without prior notice.
            </p>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">5.2.</span> Upon termination, you agree to cease all use of WebInOrbit and to delete any content or materials obtained from the platform.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              6. Amendments
            </h2>
            <p className="ml-4 text-gray-300  mb-2">
              <span className="font-bold">6.1.</span> Stubic Solutions Pvt Limited reserves the right to modify or amend these terms and conditions at any time without prior notice. Your continued use of WebInOrbit after any changes indicates your acceptance of the modified terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
