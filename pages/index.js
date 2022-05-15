import Link from "next/link";
import { posts } from "../lib/posts";

export default function Home({ blog }) {
  const listBlockStyle = {
    marginBottom: "20px"
  }

  return (
    <>
      <main>
        {blog.map((blog) => (
          <div key={blog.id} style={listBlockStyle}>
            <small><time datestring={blog.publishedAt}>{blog.publishedAt}</time></small>
            <div>
              <Link href={`/posts/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  return {
    props: {
      blog: await posts(),
    },
  };
};
