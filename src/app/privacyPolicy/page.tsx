"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Link from "next/link";

const TermsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-transparent text-white min-h-screen p-8 flex items-center justify-center">
        <div
          className="max-w-4xl text-left p-8 border border-white rounded-lg shadow-lg"
          style={{ boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)" }}
        >
          <h1 className="text-4xl font-bold text-center mb-4 neon-effect">
            PRIVACY POLICY
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Effective Date: 20-05-2024
          </p>

          <p className="mb-8 text-gray-300 text-justify">
            Stubic Solutions Pvt Limited ("WebInOrbit," "we," "us," or "our") is
            committed to protecting your privacy. This Privacy Policy outlines
            how we collect, use, and disclose information when you visit our
            website and use our services.
          </p>

          {/* Section 1 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              1. Information We Collect
            </h2>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">1.1.</span>{" "}
              <span className="text-[#00BFFF] font-semibold">
                Personal Information:
              </span>
              When you register on our platform or engage with our services, we
              may collect personal information such as your name, email address,
              contact details, and academic or professional background.
            </p>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">1.2.</span>{" "}
              <span className="text-[#00BFFF] font-semibold">Usage Data:</span>
              We automatically collect information about how you interact with
              our website and platform, including your IP address, browser type,
              device identifiers, and pages visited.
            </p>
            <p className="ml-4 text-gray-300 text-justify">
              <span className="font-bold">1.3.</span>{" "}
              <span className="text-[#00BFFF] font-semibold">Cookies:</span>
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage patterns, and personalize content.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              2. How We Use Your Information
            </h2>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">2.1.</span>{" "}
              <span className="text-[#00BFFF] font-semibold">
                Provide and Improve Services:
              </span>
              We use your information to deliver our services, personalize your
              experience, and improve the quality of our platform.
            </p>
            <p className="ml-4 text-gray-300 text-justify">
              <span className="font-bold">2.2.</span>{" "}
              <span className="text-[#00BFFF] font-semibold">
                Communication:
              </span>
              We may send you promotional and informational emails about our
              services, updates, and relevant opportunities.
            </p>
            <p className="ml-4 text-gray-300 text-justify">
              <span className="font-bold">2.3.</span>{" "}
              <span className="text-[#00BFFF] font-semibold">
                Analytics:
              </span>
              We analyze usage data to understand trends, monitor the effectiveness of our marketing efforts, and optimize user experience
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              3. Information Sharing
            </h2>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">3.1.</span>{" "}
               We may share your information with trusted thirdparty service providers who assist us in operating our website and delivering our services. We do not sell or rent your personal information to third parties for marketing purposes.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              4. Data Security
            </h2>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">4.1.</span>{" "}
               We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              5. Your Choices
            </h2>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">5.1.</span>{" "}
               You can opt-out of receiving promotional emails from us by following the instructions provided in this email. You may also control cookies preferences through your browser settings.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              6. Updates to this Privacy Policy
            </h2>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">6.1.</span>{" "}
               We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this Privacy Policy regularly for any updates.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#ff7f50] mb-2">
              7. Contact Us
            </h2>
            <p className="ml-4 text-gray-300 mb-2 text-justify">
              <span className="font-bold">7.1.</span>{" "}
               If you have any questions or concerns about this Privacy policy on our data practices, please contact us at <Link href='mailto:contact@webinorbit.com'>contact@webinorbit.com</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
