import React from "react";
import { useLastArticles } from "../data/article";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  categoryName: string;
  number: number;
}

const ArticleList = ({ categoryName, number }: ArticleListProps) => {
  const { data } = useLastArticles({ categoryName, number });

  return (
    <div className="flex overflow-x-auto space-x-4">
      {data?.nodes.map((article, index) => (
        <ArticleCard
          key={index}
          date={article.date}
          title={article.title}
          imageUrl={article.featuredImage.node.link}
          description=""
        />
      ))}
    </div>
  );
};

export default ArticleList;
