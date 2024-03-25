import React from "react";

const Extract = () => {
  const b = [
    {
      "Extract (Liquid)": [
        {
          product: "Acai berry extract",
        },
        {
          product: "Algae extract",
        },
        {
          product: "Arnica extract",
        },
        {
          product: "Bamboo extract",
        },
        {
          product: "Bisabolol extract",
        },
        {
          product: "Calendula extract",
        },
        {
          product: "Centella asiatica extract",
        },
        {
          product: "Chamomile extract",
        },
        {
          product: "Ginger root extract",
        },
        {
          product: "Ginkgo Biloba extract",
        },
        {
          product: "Goji berry extract",
        },
        {
          product: "Green Tea extract",
        },
        {
          product: "Hibiscus extract",
        },
        {
          product: "Horse Chestnut extract",
        },
        {
          product: "Immortelle extract",
        },
        {
          product: "Licorice extract",
        },
        {
          product: "Olive extract",
        },
        {
          product: "Orris root extract",
        },
        {
          product: "Papaya fruit extract",
        },
        {
          product: "Papaya leaf extract",
        },
        {
          product: "tulsi extract",
        },
        {
          product: "Watermelon extract",
        },
        {
          product: "wheat germ extract",
        },
        {
          product: "Willow bark extract",
        },
        {
          product: "Witch hazel extract",
        },
        {
          product: "Gotu kola extract",
        },
        {
          product: "Peppermint extract",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full md:flex  justify-center">
        <div className="md:w-full md:flex  ">
          <div className=" md:w-full ">
          {b.map((category, index) => {
            return (
              <div key={index} className="pl-[25px] pr-[25px] mt-4">
                <div className="text-center pb-4">
                  <span
                    id={Object.keys(category)[0]}
                    className="pl-1 border-b-2 font-semibold border-black text-4xl"
                  >
                    {Object.keys(category)[0]}
                  </span>
                </div>
                {category[Object.keys(category)[0]].map((ele, index) => {
                  return (
                    <div key={index} className="bg-green-400 hover:text-black hover:bg-green-200 mt-2">
                      <li className="flex justify-between products-center pl-1 py-2">
                        <span className="text-lg font-semibold hover:font-bold">{ele.product}</span>
                      </li>
                    </div>
                  );
                })}
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Extract;
