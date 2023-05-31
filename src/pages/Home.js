import img1 from "../assets/tower_research.png";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Card from "../components/Card";
import lock from "../assets/lock.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/18915856.png";
import Companies from "./Companies";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
    <Header/>
      <Companies />

      {/* <section id="companies">
        <div className="md:w-11/12 mx-auto md:mt-16 mb-12">
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 p-2">
            #Explore top companies and their career pages.
          </h2>
          <p class="md:text-left mt-4 md:mt-0 text-lg text-gray-700 md:w-4/5">
            Find your dream job with us by browsing our list of 300+ companies
            and their career pages. Search opportunities based on industry and
            location to streamline your job search.
          </p>

          <div className="flex flex-wrap mt-12 items-center  gap-6 p-4 justify-center">
            {companies.map((company) => (
              <Card company={company} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section id="about" class="bg-white py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-12">
              About Us
            </h2>
            <p class="text-lg text-gray-700 mb-12 leading-relaxed">
              Are you tired of scouring the internet for job opportunities? Our
              CareerHub simplifies your job search by bringing together 300+ top
              companies and their career pages in one convenient place. With our
              easy-to-use interface, you can search for job openings based on
              your preferred industry and location, and easily track the status
              of your applications using the tracker.
            </p>
            <div class="text-center">
              <a
                href="#"
                class="bg-blue-500 hover:bg-blue-400 text-white py-3 px-8 rounded-lg font-bold"
              >
                Sign up now
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
