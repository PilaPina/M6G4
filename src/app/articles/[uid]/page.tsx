// Article detail page
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type ArticlePageProps = {
  params: Promise<{ uid: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { uid } = await params;

  const client = createClient();
  const article = await client.getByUID("blogpost", uid).catch(() => null);
  if (!article) return notFound();

  return (
    <main>
      <SliceZone slices={article.data.slices} components={components} />
    </main>
  );
}