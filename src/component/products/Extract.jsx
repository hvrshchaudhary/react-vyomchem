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
                <div key={index} className="pl-[25px] pr-[25px] md:mt-[24px] mt-10 m-5 pb-5 pt-2 border-2 rounded-md border-black   bg-gray-50 " data-aos="fade-up-left" style={{
                  // boxShadow:"10px 10px lightblue"
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",


                }} >
                  <div className="text-center md:pt-3 md:pb-4 pb-2 ">
                    <span
                      id={Object.keys(category)[0]}
                      className="pl-1  font-semibold text-green-800 font-fira-neue  md:text-4xl"
                    >
                      {Object.keys(category)[0]}
                    </span>
                  </div>
                  {category[Object.keys(category)[0]].map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className={` border rounded-sm border-black mt-2 ${
                          index % 2 === 0 ? 'bg-green-300 hover:bg-green-200 text-black' : 'bg-yellow-200 hover:bg-yellow-100'
                        }`}
                      >
                        <li className="flex justify-between products-center pl-3 md:py-2 py-1">
                          <span className="md:text-lg text-sm md:font-semibold hover:font-bold">
                            {ele.product}
                          </span>
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
