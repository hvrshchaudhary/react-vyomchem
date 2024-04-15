import React from "react";

const Cards = () => {
  const cardsDetails = [
    {
      avatar_url: "/image/Indra-Nooyi.avif",
      name: "Indra Nooyi",
      post: "CEO: PepsiCo",
      comment: `Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are great leader`,
    },
    {
      avatar_url: "/image/ratan-tata-sir.jpeg",
      name: "Ratan Tata",
      post: "CEO: Tata",
      comment: `Ups and downs in life are very important to keep us going, because a staight line even in an E.C.G means we are not alive.`,
    },
    {
      avatar_url: "/image/A.p.j.abdul-kalam.jpg",
      name: "A.P.J.Abdul Kalam",
      post: "President of India",
      comment: `Your best teacher is your last mistake.`,
    },
  ];
  return (
    <div className=" flex flex-1 bg-gray-100 justify-center relative pt-[4px] pb-[4px]">
      <div
        style={{ width: "80%" }}
        className="md:flex  bg-gray-100 justify-center md:px-10 md:py-4 flex-wrap "
      >
        {cardsDetails.map((ele) => {
          return (
            <div
              data-aos-offset="300"
              data-aos="flip-up"
              className="bg-white p-4   pt-6 w-full xl:flex-1 mt-2 md:m-5"
              style={{
                borderRadius: "10px",
                // width: "auto",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex pl-4 mb-1">
                <div>
                  <img
                    src={ele.avatar_url}
                    alt=""
                    className="w-16 h-16 mr-4 object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col mt-1">
                  <h1 className="font-bold">{ele.name}</h1>
                  <p>{ele.post}</p>
                </div>
              </div>
              <p className="p-4 text-sm">{ele.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
