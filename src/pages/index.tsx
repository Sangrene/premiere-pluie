import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import HeaderCarousel from "../components/HeaderCarousel";
import ArticleList from "../components/ArticleList";
import Button from "../ui/Button";
import AboutSection from "../components/AboutSection";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../data/dataFetching";
import { withQueryClient } from "../components/QueryClientHOC";

const IndexPage: React.FC<PageProps> = () => {
  return (
      <main className="font-unbounded transition-all">
        <Header />
        <HeaderCarousel />
        <h2 className="font-extrabold text-black text-3xl p-5 m-2">
          NOS DERNIERS ARTICLES
        </h2>
        <ArticleList categoryName="Actualités" number={5} />
        <a
          href="/articles"
          className="border-2 rounded-full border-primary py-1 flex justify-center m-2 hover:bg-primary hover:bg-opacity-10"
        >
          TOUS LES ARTICLES
        </a>
        <h2 className="font-extrabold text-black text-3xl p-5 m-2">EDITOS</h2>
        <ArticleList categoryName="Éditos" number={5} />
        <a className="border-2 rounded-full border-primary py-1 flex justify-center m-2 hover:bg-primary hover:bg-opacity-10">
          TOUS LES VAPLM
        </a>
        <h2 className="font-extrabold text-black text-3xl p-5 m-2">À PROPOS</h2>
        <AboutSection />
        <a className="border-2 rounded-full border-primary py-1 flex justify-center m-2 hover:bg-primary hover:bg-opacity-10">
          EN SAVOIR PLUS
        </a>
      </main>
  );
};

export default withQueryClient(IndexPage);

export const Head: HeadFC = () => <title>Home Page</title>;
