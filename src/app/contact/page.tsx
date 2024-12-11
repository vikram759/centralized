import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import location from "./resources/location.png";
import phone from "./resources/phone.png";
import mail from "./resources/mail.png";
import "./resources/contact.css";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="bg-transparent text-white py-16 px-8 ">
        <h2 className="text-center text-3xl font-bold mb-12">CONTACT US</h2>
        <div className="contact w-full">
          <div className="container bg-[rgba(64,30,93,0.2)] w-[80%] rounded-lg justify-self-center mx-auto flex flex-col md:flex-row md:items-center align-middle md:p-10 justify-between space-y-8 md:space-y-0 md:space-x-3">
            {/* Left Section - Contact Information */}
            <div className="flex flex-col md:p-10 space-y-8 w-full md:w-1/3">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <Image
                  src={location}
                  alt="Location Icon"
                  width={54}
                  height={54}
                />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Chandigarh, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Image src={phone} alt="Phone Icon" width={54} height={54} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>Manav Rai</p>
                  <p>+91 8054776034</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Image src={mail} alt="Email Icon" width={54} height={54} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>teamorbit@webinorbit.com</p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full md:w-1/2 bg-[rgba(255,255,255,0.6)] p-8 rounded-lg shadow-lg">
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  placeholder="Message"
                  className="bg-gray-700 text-white px-4 py-2 h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
