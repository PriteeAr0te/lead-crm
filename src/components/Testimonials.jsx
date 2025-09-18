import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import Share from "../assets/img/share.png";
import Person1 from "../assets/img/person-1.png";
import Person2 from "../assets/img/person-2.png";
import Person3 from "../assets/img/person-3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    shareImg: Share,
    rating: 5,
    personImg: Person1,
    name: "David Fincher",
    source: "On Capterra",
  },
  {
    id: 2,
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    shareImg: Share,
    rating: 5,
    personImg: Person2,
    name: "Lillian Williams",
    source: "On Capterra",
  },
  {
    id: 3,
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    shareImg: Share,
    rating: 4,
    personImg: Person3,
    name: "Michael",
    source: "On Capterra",
  },
  {
    id: 4,
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    shareImg: Share,
    rating: 5,
    personImg: Person2,
    name: "John Doe",
    source: "On Capterra",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-3 sm:px-5 md:px-10">
      <div className="flex justify-between items-center gap-4 my-6">
        <h2 className="text-accent text-3xl sm:text-4xl font-bold mb-2">
          What people are saying about LeadCRM
        </h2>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[32px] h-[32px] flex items-center justify-center text-gray-800 rounded-full border border-[#090F4E] hover:bg-[#090F4E] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="w-[32px] h-[32px] flex items-center justify-center text-gray-800 rounded-full border border-[#090F4E] hover:bg-[#090F4E] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className=" h-full min-h-[100%]">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-3 h-[100%] min-h-[100%] max-h-[100%]">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
