import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import styles from "./BlogPost.module.css";
/**
 * Props for `BlogPost`.
 */
export type BlogPostProps = SliceComponentProps<Content.BlogPostSlice>;

/**
 * Component for "BlogPost" Slices.
 */
const BlogPost: FC<BlogPostProps> = ({ slice }) => {
  return (
    <section className={styles.blogPost}>
      <div className={styles.imageWrapper}>
        {isFilled.image(slice.primary.meta_image) && (
          <PrismicNextImage
            className={styles.blogPostImage}
            field={slice.primary.meta_image}
          />
        )}
        <div className={styles.overlay}>
          {isFilled.richText(slice.primary.meta_title) && (
            <div className={styles.blogPostTitle}>
              <PrismicRichText field={slice.primary.meta_title} />
            </div>
          )}
          <div className={styles.blogPostDate}>
            {isFilled.date(slice.primary.meta_date) && (
              <time dateTime={slice.primary.meta_date}>
                {new Date(slice.primary.meta_date).toLocaleDateString("en-GB")}
              </time>
            )}
          </div>
        </div>
      </div>
      {isFilled.richText(slice.primary.meta_description) && (
        <div className={styles.blogPostDescription}>
          <PrismicRichText field={slice.primary.meta_description} />
        </div>
      )}
      <PrismicNextLink
        className={styles.blogPostButton}
        field={
          Array.isArray(slice.primary.button_link)
            ? slice.primary.button_link[0]
            : slice.primary.button_link
        }
      >
        Back to all articles
      </PrismicNextLink>
    </section>
  );
};

export default BlogPost;
