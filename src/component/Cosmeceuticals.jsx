import React from "react";
import { NavLink } from "react-router-dom";

const Cosmeceuticals = () => {
  const products = [
    {
      image: "./image/WAX.jpg",
      image2: "./image/pearlising.jpg",
      text: "WAX AND BUTTER",
      text2: "Pearlising Agents",
    
    },
    {
      image: "./image/extract.jpg",
      image2: "./image/extract.jpg",
      text: "Extract (Liquid)",
      text2: "Extract (Liquid)",
      
    },
    {
      image: "./image/algae-extract-3.jpg",
      image2: "./image/algae-extract-3.jpg",
      text: "Alcohol Sulphate",
      text2: "Alcohol Sulphate",
    },
    {
      image: "./image/melligolubous.jpg",
      image2: "./image/melligolubous.jpg",
      text: "Milliglobules /Microbeads",
      text2: "Milliglobules ",
      text3:"/Microbeads"
    },
    {
      image: "./image/Bambooextract.jpg",
      image2: "./image/Bambooextract.jpg",
      text: "Active & Miscellaneous",
      text2: "Active & Miscellaneous",
    },
    {
      image: "./image/more.jpg",
      image2: "./image/more.jpg",
      text: "Pearlising Agent ",
      text2: "Pearlising Agent",

      URL: "",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className="md:py-10 md:px-10 pl-1 md:pl-0 md:h-screen "
    >
      <div className="md:flex" style={{ width: "90%", alignSelf: "center" }}>
        <div
          className="flex flex-1 flex-col justify-between  "
          style={{ flex: 2 }}
          data-aos="fade-right"
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flex: 1,
              padding: 15,
              marginTop: 20,
            }}
            className=""
          >
            <div className="forline and span flex flex-row  md:mt-0 ">
              <div
                className="forline relative  rounded mr-1 md:p-1 md:-mt-2 md:h-16 w-2 "
                style={{
                  backgroundColor: "#7CE6B3",
                }}
              ></div>
              <span
                className="font-bold md:font-mono text-3xl md:text-5xl"
                style={{ fontFamily: "monospace" }}
              >
                Cosmeceuticals
              </span>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
            }}
          >
            <div
              style={{
                position: "relative",
                alignSelf: "end",
                margin: 15,
                borderRadius: 15,
              }}
            >
              <span
                className="md:block hidden font-bold text-white text-2xl"
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 10,
                  zIndex: 1,
                }}
              >
                Wax and butter
              </span>
              {/* image for display view  */}
              <img
                src="./image/WAX.jpg"
                className="md:block hidden"
                alt=""
                style={{
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: 10,
                  filter: "brightness(60%)",
                }}
              />

              {/* comsecetical section for mobile view this section is extra added for mobile view  */}
              <div className="  justify-center flex mt-4 mb-2 md:hidden  flex-wrap">
                {products.map((ele) => {
                  return (
                    <div className="md:m-4 m-2  relative md:hidden  ">
                      <a href={ele.URL}>
                        <img
                          className="rounded-2xl w-72 h-60 object-cover"
                          style={{
                            filter: "brightness(60%)",
                          }}
                          src={ele.image}
                          alt="image description"
                        />
                      </a>
                      <div className="absolute px-4 text-lg text-white font-bold bottom-6">
                        <p>{ele.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* end of the cosmeceuticals section on mob view */}
          </div>
        </div>

        <div
          style={{ flex: 4 }}
          data-aos="fade-left"
          className=" md:flex  flex-wrap justify-end mt-4 mb-2 hidden  md:mt-0 md:mb-0"
        >
          <div
            style={{
              alignContent: "end",
              flexWrap: "wrap",
              justifyContent: "end",
              display: "flex",
              alignSelf: "end",
            }}
          >
            {products.map((ele) => {
              return (
                <div className="md:m-4 m-2 relative w-48 h-52 object-cover hover:scale-125 transition-all">
                  <a href={ele.URL}>
                    <img
                      style={{
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: 10,
                        filter: "brightness(60%)",
                      }}
                      className="rounded-2xl object-cover w-full h-full"
                      src={ele.image2}
                      alt="image description"
                    />
                  </a>
                  <div className="absolute px-4 text-lg text-white font-bold bottom-6">
                    <p>{ele.text2}</p>
                    <p>{ele.text3}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmeceuticals;
