import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useLastArticles } from "../data/article";

const HeaderCarousel = () => {
  const { data } = useLastArticles({ categoryName: "Actualités", number: 5 });

  return (
    <Carousel showThumbs={false} showStatus={false}>
      {data?.nodes.map((article, index) => (
        <div key={index} style={{ height: "512px" }}>
          <img
            className="h-full object-cover"
            src={article.featuredImage.node.link}
          />
          <div
            className="legend bg-transparent"
            style={{
              marginLeft: "-50%",
              opacity: 1,
              background: "unset",
              textAlign: "start",
            }}
          >
            <h2 className="text-white font-extrabold text-3xl">
              {article.title}
            </h2>
            <span className="text-primary font-thin text-xl">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeaderCarousel;
