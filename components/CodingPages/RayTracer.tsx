/* eslint-disable @next/next/no-sync-scripts */
import { Layout } from "../Layout";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";

export const RayTracer = () => {
  const [encoded, setEncoded] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_API_KEY,
      });
      try {
        const response = await octokit.request(
          "GET /repos/{owner}/{repo}/contents/{path}",
          {
            owner: "allangelman",
            repo: "ray-tracer",
            path: "README.md",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
              Accept: "application/vnd.github.html",
            },
          }
        );
        // Process the response data here
        console.log(response);
        const encoded = response.data;
        setEncoded(response.data.toString());
        // const decoded = atob(encoded);
        console.log("decoded: ", encoded);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <div
          dangerouslySetInnerHTML={{
            __html: encoded,
          }}
        ></div>
      </Layout>
    </>
  );
};

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: imageLoaderProps): string => {
  return `https://allan-gelman.imgix.net/${src}?=${width}&q=${quality || 75}`;
};
