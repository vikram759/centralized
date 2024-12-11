"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Card from "./resources/card";
import { useState } from "react";
import Link from "next/link";

const projects = [
    {
        id: 0,
        image: 'abc',
        role: 'xyz',
        techStack: 'Coding',
        company: 'abc',
        companyInfo: 'timeline',
        timeline: 'time',
        price: '1Lakh'
    }
];

const DashboardPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center mb-2">
        <div className="login flex w-full md:p-32 justify-center">
          <div className="bg-[rgba(255,255,255,0.4)] p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Our Galatic Projects
            </h2>
            <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] perspective"
                >
                    <Card key={project.id} id={project.id} image={project.image} role={project.role} techStack={project.techStack} company={project.company} companyInfo={project.companyInfo} timeline={project.timeline} price={project.price}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DashboardPage;
