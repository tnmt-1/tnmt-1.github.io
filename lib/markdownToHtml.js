import remarkBreaks from 'remark-breaks';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkSlug from "remark-slug"
import remarkToc from 'remark-toc'

/**
 * remarkによるmarkdownの構文変換を行う
 * @param markdown markdown記法で書かれたプレーンテキスト
 * @returns 変換結果をString化したもの
 */
const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkBreaks)
    .use(remarkSlug)
    .use(remarkToc, { heading: '目次', tight: true })
    .use(remarkParse)      // markdown -> mdast の変換
    .use(remark2rehype)    // mdast -> hast の変換
    .use(rehypeStringify)  // hast -> html の変換
    .process(markdown);    // 実行
  return result.toString();
};

export default markdownToHtml;
