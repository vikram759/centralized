import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import webdev from './resources/webdev.png';
import appdev from './resources/appdev.png';
import softwaredev from './resources/softwaredev.png';
import customdev from './resources/customdev.png';
import mlmodels from './resources/mlmodels.png';
import placementbridge from './resources/placementbridge.png';
import './resources/service.css';

const services = [
  {
    title: "Web Development",
    description:
      "Designing cutting-edge, scalable web solutions uniquely tailored to your needs.",
    image: webdev,
  },
  {
    title: "App Development",
    description:
      "Developing groundbreaking mobile applications that boost user engagement.",
    image: appdev,
  },
  {
    title: "Software Development",
    description:
      "Creating tailored software solutions to optimize and simplify your business operations.",
    image: softwaredev,
  },
  {
    title: "Customization in Web and App",
    description:
      "Transforming existing web and app solutions to seamlessly align with your unique vision and requirements.",
    image: customdev,
  },
  {
    title: "Expertise in ML Models",
    description:
      "Leveraging advanced machine learning models such as LLMs, NLP, and others to deliver intelligent solutions.",
    image: mlmodels,
  },
  {
    title: "Placement Bridge",
    description:
      "Connecting talent with opportunities for career advancement by offering recruitment services that help companies find skilled professionals.",
    image: placementbridge,
  },
];

const testimonials = [
    {
        name:'',
        feedback:''
    }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="service bg-transparent text-white py-16 px-8">
        <h2 className="text-center text-3xl font-bold mb-12">OUR SERVICES</h2>
        <div className="container md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 flex flex-col items-center text-center"
            >
              {/* Image or Icon */}
              {service.image && (
                <Image
                  src={service.image}
                  alt={`${service.title} Icon`}
                  width={90}
                  height={70}
                  className="mb-4"
                />
              )}
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="text-white py-10 px-8">
        <h2 className="text-center text-3xl font-bold mb-8">
          EXPLORE OUR CUSTOMER TESTIMONIALS
        </h2>

        {/* Testimonials container */}
        <div className="bg-[#0A0A23] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg text-gray-300">"{testimonial.feedback}"</p>
              <p className="mt-2 font-semibold text-gray-500">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
