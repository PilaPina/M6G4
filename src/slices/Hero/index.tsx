import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import styles from "./Hero.module.css";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.bounded}
    >
      <div
        className={`
          ${styles.heroContent}
            ${
              slice.variation === "imageRight"
                ? styles.heroContentRight
                : styles.heroContentLeft
            }
        `}
      >
        <div>
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              className={styles.heroImage}
            />
          )}
        </div>
        <div className={styles.contentRight}>
          <div className={styles.contentIntro}>
            {isFilled.keyText(slice.primary.eyebrowHeadline) && (
              <p className={styles.contentIntroEyebrow}>
                {slice.primary.eyebrowHeadline}
              </p>
            )}
            {isFilled.richText(slice.primary.title) && (
              <div className={styles.contentIntroHeadline}>
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            {isFilled.richText(slice.primary.description) && (
              <div className={styles.contentIntroDescription}>
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
            {isFilled.link(slice.primary.callToActionLink) && (
              <PrismicNextLink
                className={styles.callToActionLink}
                field={slice.primary.callToActionLink}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
