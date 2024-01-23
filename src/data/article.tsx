import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { graphQLClient } from "./dataFetching";

interface Article {
  id: string;
  title: string;
  date: string;
  tags: { nodes: { name: string }[] };
  excerpt: string;
  featuredImage: {
    node: {
      link: string;
    };
  };
}

export const formatExcerpt = (excerpt: string) => {
  const pStart = excerpt.indexOf("<p>");
  const pEnd = excerpt.indexOf("</p>");
  const span = document.createElement('span');
  const slicedHtml = excerpt.slice(pStart, pEnd).replace(/(<([^>]+)>)/ig, "");
  span.innerHTML = slicedHtml;
  const formattedContent =  span.textContent || span.innerText;
  span.remove();
  return formattedContent;
};

export const useLastArticles = ({
  categoryName,
  number,
}: {
  categoryName?: string;
  number: number;
}) => {
  return useQuery([`get-last-articles`, { categoryName, number }], async () => {
    const { posts } = await graphQLClient.request<{
      posts: { nodes: Article[] };
    }>(gql`query {
          posts(first: ${number}, ${
      categoryName ? `where: {categoryName: "${categoryName}"}` : ""
    } ) {
            nodes {
              id
              title
              date
              excerpt
              featuredImage {
                node {
                  link
                }
              }
              tags {
                nodes {
                  name
                }
              }
            }
          }
        }
      `);
    return posts;
  });
};

export const useArticle = (id: string) => {
  return useQuery([`get-article`, { id }], async () => {
    const { post } = await graphQLClient.request<{
      post: Article & { content: string; author: { node: { name: string } } };
    }>(gql`
      query {
        post(id: "${id}") {
          id
          title
          excerpt
          featuredImage {
            node {
              link
            }
          }
          author {
            node {
              name
            }
          }
          content
        }
      }
    `);
    return post;
  });
};
