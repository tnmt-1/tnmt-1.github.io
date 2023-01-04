import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import TagsListInline from "@theme/TagsListInline";
import ReadMoreLink from "@theme/BlogPostItem/Footer/ReadMoreLink";

import styles from "./styles.module.css";

import NextShare from "@site/src/components/NextShareButtons";

export default function BlogPostItemFooter() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { tags, title, hasTruncateMarker } = metadata;

  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;

  const tagsExists = tags.length > 0;

  const renderFooter = tagsExists || truncatedPost;

  if (!renderFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(
        "row docusaurus-mt-lg",
        isBlogPostPage && styles.blogPostFooterDetailsFull
      )}
    >
      {tagsExists && (
        <div className={clsx("col", { "col--9": truncatedPost })}>
          <TagsListInline tags={tags} />
        </div>
      )}
      {/* ----------------------------------------------------------------- */}
      {/* SNS 等のシェアボタンを設置 */}
      {isBlogPostPage && (
        <div className="col col--12">
          <div className={clsx("row", styles.blogPostFooter)}>
            <div className="col col--8 margin-vert--sm">
              <NextShare />
            </div>
          </div>
        </div>
      )}
      {/* ----------------------------------------------------------------- */}
      {truncatedPost && (
        <div
          className={clsx("col text--right", {
            "col--3": tagsExists,
          })}
        >
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
