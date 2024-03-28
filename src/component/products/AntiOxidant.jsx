import React from "react";

const AntiOxidant = () => {
  const b = [
    {
        "Anti-Oxidants/ Parabens Free Preservatives": [
          {
            product: "Ascorbyl Palmitate",
          },
          {
            product: "Benzoic acid",
          },
          {
            product: "Benzyl Alcohol",
          },
          {
            product: "Butylated Hydroxy Anisole (BHA)",
          },
          {
            product: "Butyl Hydroxy Toluene (BHT)",
          },
          {
            product: "Calcium Gluconate",
          },
          {
            product: "Caprylyl Glycol",
          },
          {
            product: "Cetyl Pyridinium Chloride (CPC)",
          },
          {
            product: "Chlorophenesin",
          },
          {
            product: "Dehydroacetic acid",
          },
          {
            product: "Imidazolidinyl Urea",
          },
          {
            product: "Iodopropyl Butyl Carbamate (IPBC)",
          },
          {
            product: "Lodopropyl Butyl Carbamate",
          },
          {
            product: "Phenoxyethanol",
          },
          {
            product: "Potassium Sorbate",
          },
          {
            product: "Propylene Glycol",
          },
          {
            product: "Sodium Benzoate",
          },
          {
            product: "Tertiary Butyl Hydroquinone (TBHQ)",
          },
          {
            product: "Vitamin E Acetate",
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
                      className="pl-1  font-semibold font-fira-neue  md:text-4xl"
                    >
                      {Object.keys(category)[0]}
                    </span>
                  </div>
                  {category[Object.keys(category)[0]].map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white hover:text-white border rounded-sm border-black hover:bg-black mt-2"
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

export default AntiOxidant;
