import React from "react";

const Cards = () => {
  const cardsDetails = [
    {
      avatar_url: "/image/Indra-Nooyi.avif",
      name: "Indra Nooyi",
      post: "CEO: PepsiCo",
      comment: `If you want to improve the organization you have to improve yourself and the organization gets pulled up with you. That is a lesson. I cannot just expect the organization to improve if I don’t improve myself and lift the organization.`,
    },
    {
      avatar_url: "/image/Falguni-Nayar.jpg",
      name: "Falguni Nayar",
      post: "CEO: Nykaa",
      comment: `Entrepreneurship is a journey of ups and downs. The key is to remain
      resilient and adaptable, to believe in your vision, and to learn
      from every step. It’s not just about ideas, but also about how you
      bounce back from setbacks and keep moving forward.`,
    },
    {
      avatar_url: "/image/kiran.webp",
      name: "Kiran Mazumdar-Shaw",
      post: "CEO: Biocon",
      comment: `Innovation and entrepreneurship are about seeing the invisible and
      doing the impossible. At Biocon, we’ve learned to embrace
      challenges, persist in the face of setbacks, and stay committed to
      our goals, transforming obstacles into opportunities for growth and
      success.`,
    },
  ];
  return (
    <div className=" md:flex flex-1 bg-gray-100 justify-center relative pt-[4px] pb-[4px]">
      <div
        style={{ width: "90%" }}
        className="md:flex  bg-gray-100 justify-center md:px-10 md:py-4 flex-wrap "
      >
        {cardsDetails.map((ele) => {
          return (
            <div
              data-aos-offset="300"
              data-aos="flip-up"
              className="bg-white p-4   pt-6 w-full xl:flex-1  m-5"
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
              <p className="p-4">{ele.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
