import React from "react";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Oils = () => {
  const b = [
    {
        "OILS": [
          {
            product: "Anise oil",
            comment : "Derived from Anise seed, have antioxidant properties, a sweet and herbal fragrance,"

          },
          {
            product: "Argan Oil",
            comment : "It protect, soothe and treat a whole host of skin conditions, antibacterial properties"
          },
          {
            product: "Black cumin seed oil (kalonji)",
            comment : "It is non-comedogenic in nature, it strengthen and treat skin and hair"
          },
          {
            product: "Borage Oil",
            comment : "It decreases inflammation, hydrate, and restore dry skin, reduce eczema, rich in fatty acids and vitamin E"
          },
          {
            product: "Carrot Seed oil",
            comment : "It has high  antioxidants and protect the skin from free radical damage"
          },
          {
            product: "Coconut oil",
            comment : "It is a vegetable oil rich in nutritious lipids,used in cosmetics for its moisturising and nourishing properties"
          },
          {
            product: "Dill seed oil",
            comment : "A naturally occurring insecticides, fight free radicals and smoothening skin wrinkles."
          },
          {
            product: "Eucalyptus oil",
            comment :"It can help clean the skin and hair and reduce excess oiliness. Renowned for its natural antiseptic and anti-inflammatory properties"
          },
          {
            product: "Evening Primrose Oil",
            comment : "It Helps Maintain Skin Hydration, prevent acne, fight inflammation,"
          },
          {
            product: "Garlic oil",
            comment :"Garlic oil is an essential oil and has antibacterial and antifungal properties, it contains sulfur, vitamin E, and vitamin C "
          },
          {
            product: "Hempseed oil",
            comment :"It soothe eczema, acne and skin after shaving,help repair sun damage,rich in omega-6 and omega-3 fatty acids"
          },
          {
            product: "Lavender oil",
            comment :"It works to kill bacteria, has antiseptic and antifungal properties"
          },
          {
            product : "Lemon oil",
            comment : "It has antibacterial, antiviral, anti-fungal, and astringent properties,smooth the skin and refine its texture"
          }, {
            product : "Linalool",
            comment : "It is used as a scent,colorless to very pale yellow liquid with a floral smell"
          }, {
            product : "Linseed / Flaxseed oil",
            comment : "It has soothing, softening and calming properties.reduce redness and even out skin tone."
          }, {
            product : "Neem oil",
            comment : "Neem oil is rich in fatty acids and other nutrients,treat acne, fungal infections, warts,nourishing skin and hair moisturiser"
          }, {
            product : "Peppermint Oil",
            comment : "It provides a cooling sensation,reduce any redness or irritation,acts as a mild conditioner for your hair"
          }, {
            product : "Spearmint oil",
            comment : "Spearmint oil minimise the appearance of wrinkles and discolouration.Act as antioxidant, antiseptic, anti-bacterial, anti-inflammator"
          }, {
            product : "Sunflower oil",
            comment : "It improvs skin hydration and provids antioxidant protection, presence of linoleic acid reinforce the skin barrier."
          }, {
            product : "Turmeric oil",
            comment : " It has antioxidants and anti-inflammatory properties, provide glow and luster to the skin"
          }, {
            product : "Turpentine oil",
            comment : "It  has anti-fungal properties,used in soap and cosmetics and also as a paint solvent"
          }, {
            product : "Wheatgerm oil",
            comment : "It keeps the skin soft, supple, and moisturized, contains vitamins A, D and E"
          },
        ],
      },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const toggleComment = (index) => {
    setIsOpen(!isOpen), setSelectedIndex(index);
  };
  const handleMouseEnter = (index) => {
    setSelectedIndex(index);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(null);
  };

  return (
    <>
    {b.map((categories, _index) => {
      return (
        <div key={_index} className="w-full md:flex">
          <div className="flex-col container md:w-full md:flex mt-5 mb-5">
            <div className="flex justify-center" >
              <span className="md:text-4xl text-sm  md:mt-0 font-bold text-black">
                {Object.keys(categories)[0]}
              </span>
            </div>
            <div className="flex w-full justify-center">
            <div className="flex justify-center xl:w-full w-4/5 ">
            <div className="md:w-full  rounded-md  w-full   mt-5"  style={{ backgroundImage: "url('/image/Ayurvedic-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <main className="mx-auto px-4 md:pt-6 pb-6 flex flex-wrap justify-center">
                {/* Map through and render content */}
                {categories[Object.keys(categories)[0]].map((ele, index) => {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      className="relative text-center rounded-lg m-4 opacity-90 bg-white shadow-md w-64"
                      // style={{ filter: selectedIndex === index ? "none" : "brightness(90%)" }}
                    >
                      <div className="w-64 h-56 bg-white justify-center flex object-cover rounded-lg">
                        <span className="w-full h-full text-xl font-bold items-center justify-center flex">
                          {ele.product}
                        </span>
                      </div>
                      {/* Additional content */}
                      {selectedIndex === index && (
                        <div
                          className="absolute z-10 opacity-100 bg-green-100 top-0 bottom-0 left-0 right-0 hover:scale-110 transition-all"
                          style={{
                            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div className="flex w-full h-2/6 justify-center text-center items-center">
                            <span className="text-lg p-1 font-semibold text-wrap">
                              {ele.product}
                            </span>
                          </div>
                          <div className="w-full h-1/2 flex i">
                            <span className="p-1 absolute item-center text-center text-sm font-mono flex m-2 text-black">
                              {ele.comment}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </main>
            </div>
            </div>
            </div>
          </div>
        </div>
      );
    })}
</> 
  );
};

export default Oils;
