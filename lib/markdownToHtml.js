import { remark } from 'remark';
import html from 'remark-html';
import gfm from "remark-gfm";
/**
 * remarkによるmarkdownの構文変換を行う
 * @param markdown markdown記法で書かれたプレーンテキスト
 * @returns 変換結果をString化したもの
 */
const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).use(gfm).process(markdown);
  return result.toString();
};

export default markdownToHtml;
