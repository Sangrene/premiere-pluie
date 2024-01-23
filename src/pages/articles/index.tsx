import React, { ChangeEvent, useState } from "react";
import { useArticle, useLastArticles } from "../../data/article";
import Header from "../../components/Header";
import { useQuery } from "react-query";
import { graphQLClient } from "../../data/dataFetching";
import { gql } from "graphql-request";
import ArticleList from "../../components/ArticleList";
import ArticleCard from "../../components/ArticleCard";

interface Category {
  id: string;
  name: string;
  children: { nodes: { id: string; name: string }[] };
}

const useGetCategories = () => {
  return useQuery("get-categories", async () => {
    const { categories } = await graphQLClient.request<{
      categories: {
        nodes: Category[];
      };
    }>(gql`
      query {
        categories {
          nodes {
            id
            name
            children {
              nodes {
                id
                name
              }
            }
          }
        }
      }
    `);
    return categories;
  });
};

interface PillCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PillCheckbox: React.FC<PillCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`rounded-full  border-2 py-2 px-4 m-1 hover:font-bold ${
          checked ? "bg-primary text-white" : "bg-white  text-black"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

const ArticlePage = () => {
  const { data } = useGetCategories();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const { data: articlesData } = useLastArticles({
    categoryName: selectedCategory?.name,
    number: 5,
  });
  return (
    <div className="font-unbounded transition-all">
      <Header />
      <div className="px-5 bg-primary py-3">
        <h1 className="font-extrabold text-3xl py-6">ARTICLES</h1>
        <div className="flex flex-wrap justify-center">
          {data?.nodes.map((node) => (
            <PillCheckbox
              label={node.name}
              onChange={(e) => {
                if (e.target.checked) setSelectedCategory(node);
              }}
              checked={node.id === selectedCategory?.id}
            />

            // <input
            //   type="checkbox"
            //   onClick={() => setSelectedCategory(node)}
            //   className="rounded-full bg-white border-2 py-2 px-4 m-1 hover:font-bold"
            //   key={node.id}
            // >
            //   {node.name}
            // </input>
          ))}
        </div>
      </div>
      <div className="px-5">
        {articlesData?.nodes.map((article, index) => (
          <div key={index} className="my-4">
            <ArticleCard
              id={article.id}
              date={article.date}
              title={article.title}
              fullWidth
              imageUrl={article.featuredImage.node.link}
              description={article.excerpt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
