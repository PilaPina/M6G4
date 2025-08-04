import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import styles from "./page.module.css";

export default async function Home() {
  // Create the Prismic client
  const client = createClient();
  // Fetch the first homepage document
  const homepages = await client.getAllByType("homepage", { pageSize: 1 });
  const homepage = homepages[0];

  if (!homepage) {
    return (
      <main className={styles.main}>
        <h1>No homepage found in Prismic</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <SliceZone slices={homepage.data.slices} components={components} />
    </main>
  );
}
