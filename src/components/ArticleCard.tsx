import React from "react";
interface ArticleCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const ArticleCard = ({
  title,
  date,
  description,
  imageUrl,
}: ArticleCardProps) => {
  return (
    <div
      className="flex-none mx-2 bg-white rounded-lg overflow-hidden shadow-lg my-1"
      style={{ width: "250px", height: "400px" }}
    >
      <img src={imageUrl} alt={title} className="w-full h-1/2 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">
          {new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
