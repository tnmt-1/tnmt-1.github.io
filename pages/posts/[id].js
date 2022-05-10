import { NextSeo } from 'next-seo'
import striptags from "striptags";
import { posts, post } from '../../lib/posts';

export default function BlogId({ blog }) {
  const description = striptags(blog.body).split("。")[0];

  return (
    <main>
      <NextSeo title={`${blog.title}`} description={description} />
      <h1>{blog.title}</h1>
      <small><time dateString={blog.publishedAt}>{blog.publishedAt}</time></small>
      <article
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await posts();
  console.log(data);
  const paths = data.map((content) => `/posts/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const data = await post(context.params.id + '.md');

  return {
    props: {
      blog: data,
    },
  };
};
