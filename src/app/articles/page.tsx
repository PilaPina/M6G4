// Articles list page
import { createClient } from "@/prismicio";
import React from "react";
import Link from "next/link";
import styles from "./articles.module.css";

export default async function ArticlesPage() {
  const client = createClient();
  const posts = await client.getAllByType("blogpost", {
    orderings: [{ field: "my.blogpost.meta_date", direction: "desc" }],
  });


  return (
    <main>
      <div className={styles.articlesContainer}>
      <h1 className={styles.articlesTitle}>Journal entries</h1>
      <ul className={styles.articlesList}>
        {posts.map((post) => (
          <li key={post.uid} className={styles.articlesItem}>
            <Link
              href={`/articles/${post.uid}`}
              className={styles.articlesItemLink}
            >
              <div className={styles.articlesContent}>
                {post.data.meta_image && (
                  <div className={styles.articlesItemImage}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.data.meta_image.url ?? ""}
                      alt={post.data.meta_image.alt ?? ""}
                      className={styles.articlesItemImage}
                    />
                  </div>
                )}
                <div className={styles.articlesText}>
                  <time
                    className={styles.articlesItemDate}
                    dateTime={post.data.meta_date ?? undefined}
                  >
                    {post.data.meta_date
                      ? new Date(post.data.meta_date).toLocaleDateString(
                          "en-GB"
                        )
                      : ""}
                  </time>
                  <h2 className={styles.articlesItemTitle}>
                    {post.data.meta_title}
                  </h2>
                  <p className={styles.articlesItemDesc}>
                    {post.data.meta_description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
}
