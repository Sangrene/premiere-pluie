import React from "react";
import { useArticle } from "../../data/article";
import Header from "../../components/Header";
import { withQueryClient } from "../../components/QueryClientHOC";
import { StringParam, useQueryParam } from "use-query-params";

const ArticlePage = () => {
  const [articleId] = useQueryParam("article_id", StringParam);
  const { data } = useArticle(articleId!);

  return (
    <div>
      <Header />

      <img src={data?.featuredImage.node.link} className="w-full" />
      <div className="px-2">
        <h2 className="font-extrabold text-black text-3xl my-1">
          {data?.title}
        </h2>
        <span className="mb-4">par {data?.author.node.name}</span>
        <div
          className="mt-5 px-4"
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        />
      </div>
    </div>
  );
};

export default withQueryClient(ArticlePage);
