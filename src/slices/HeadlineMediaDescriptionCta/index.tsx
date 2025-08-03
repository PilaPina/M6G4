import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import styles from "./HeadlineMediaDescriptionCta.module.css";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `HeadlineMediaDescriptionCta`.
 */
export type HeadlineMediaDescriptionCtaProps =
  SliceComponentProps<Content.HeadlineMediaDescriptionCtaSlice>;

/**
 * Component for "HeadlineMediaDescriptionCta" Slices.
 */
const HeadlineMediaDescriptionCta: FC<HeadlineMediaDescriptionCtaProps> = ({
  slice,
}) => {
  return (
    <section className={styles.section}>
      {slice.primary.media && (
        <PrismicNextImage
          field={slice.primary.media}
          className={styles.fullWidthImage}
        />
      )}
      <div className={styles.content}>
        {slice.primary.eyebrow && (
          <div className={styles.eyebrow}>
            <p className={styles.eyebrowText}>{slice.primary.eyebrow}</p>
          </div>
        )}
        {slice.primary.title && (
          <div className={styles.headline}>
            <PrismicRichText field={slice.primary.title} />
          </div>
        )}
        {slice.primary.description && (
          <div className={styles.text}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}
        {isFilled.link(slice.primary.cta) && (
          <PrismicNextLink
            className={styles.ctaLink}
            field={slice.primary.cta}
          />
        )}
      </div>
    </section>
  );
};

export default HeadlineMediaDescriptionCta;
