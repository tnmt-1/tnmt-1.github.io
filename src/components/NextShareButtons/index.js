import React, { useEffect, useState } from "react";

// cf. https://github.com/Bunlong/next-share
import {
  TwitterShareButton,
  TwitterIcon,
  PocketShareButton,
  PocketIcon,
  HatenaShareButton,
  HatenaIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

import styles from "./styles.module.css";

const HashTag = "mahlog";

const IconProps = {
  size: 32,
  round: true,
};

const Twitter = (props) => (
  <TwitterShareButton
    {...props}
    hashtags={[HashTag]}
    related={["Cristoforou", "ganrim_"]}
  >
    <TwitterIcon {...IconProps} />
  </TwitterShareButton>
);

const Pocket = (props) => (
  <PocketShareButton {...props}>
    <PocketIcon {...IconProps} />
  </PocketShareButton>
);

const Hatena = (props) => (
  <HatenaShareButton {...props}>
    <HatenaIcon {...IconProps} />
  </HatenaShareButton>
);

const Reddit = (props) => (
  <RedditShareButton {...props}>
    <RedditIcon {...IconProps} />
  </RedditShareButton>
);

const MomoizedSocialButtons = React.memo(function SocialButtons({
  href,
  title,
  handleEvent,
}) {
  const common = { url: href, title };

  return (
    <div
      className={styles.SocialButtons}
      onMouseOver={handleEvent}
      onTouchStart={handleEvent}
    >
      <Twitter {...common} />
      <Pocket {...common} />
      <Hatena {...common} />
      <Reddit {...common} />
    </div>
  );
});

const NextShareButtons = ({ href = "", title = "" }) => {
  const [url, setUrl] = useState(href);
  const [subject, setSubject] = useState(title);
  const handleEvent = () => {
    const { origin, pathname, search } = window.location;
    const newUrl = [origin, pathname, search].join("");
    if (newUrl !== url) {
      setUrl(newUrl);
    }
  };

  useEffect(() => {
    // title が指定されていないとき， document からページタイトルを持ってくる
    if (document && !title.length) {
      setSubject(document.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <MomoizedSocialButtons href={url} title={subject} onHover={handleEvent} />
  );
};

export default NextShareButtons;
