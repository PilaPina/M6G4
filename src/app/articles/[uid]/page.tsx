// Article detail page
import { client } from "@/prismicio";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function ArticlePage({
  params,
}: {
  params: { uid: string };
}) {
  const article = await client
    .getByUID("blogpost", params.uid)
    .catch(() => null);
  if (!article) return notFound();

  return (
    <main>
      {/* Render all slices for this blog post */}
      <SliceZone slices={article.data.slices} components={components} />
    </main>
  );
}
