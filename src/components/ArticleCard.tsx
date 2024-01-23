import React from "react";
import { formatExcerpt } from "../data/article";
interface ArticleCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  fullWidth?: boolean;
}

const ArticleCard = ({
  title,
  date,
  description,
  imageUrl,
  fullWidth,
  id,
}: ArticleCardProps) => {
  return (
    <a href={`/article?article_id=${id}`}>
      <div
        className="flex-none mx-2 bg-white rounded-lg overflow-hidden shadow-lg my-1 w-72 lg:w-1/4 h-96"
        style={{ width: fullWidth ? "100%" : undefined }}
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
          <p className="mt-2 font-light text-sm line-clamp-3">
            {formatExcerpt(description)}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
