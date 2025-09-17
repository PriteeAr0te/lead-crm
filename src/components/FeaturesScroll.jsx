import React from "react";
import Feature1 from "../assets/img/feature-1.png";
import Feature2 from "../assets/img/feature-2.png";
import Feature3 from "../assets/img/feature-3.png";
import Feature4 from "../assets/img/feature-4.png";

const features = [
  { img: Feature1, text: <>Access to <strong className="text-black font-medium">700M+ Contacts</strong></> },
  { img: Feature2, text: <><strong className="text-black font-medium">One click push</strong> to CRM</> },
  { img: Feature3, text: <>Custom <strong className="text-black font-medium">Field Mapping</strong></> },
  { img: Feature4, text: <>Advanced <strong className="text-black font-medium">Waterfall Enrichment</strong></> },
];

const FeaturesScroll = () => {
  return (
    <section className="overflow-hidden bg-white py-14">
      <div className="scroll-animation">
        {[...features, ...features].map((item, idx) => (
          <div key={idx} className="py-4 px-8 flex gap-2 items-center">
            <img src={item.img} alt={`feature-${idx}`} />
            <p className="font-normal text-black/75 whitespace-nowrap">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesScroll;
