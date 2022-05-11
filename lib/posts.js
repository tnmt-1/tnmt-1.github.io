import fs, { promises } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import markdownToHtml from './markdownToHtml.js';

export const posts = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = await promises.readdir(postsDirectory);

  return fileNames.sort((a, b) => {
    // ファイル名の降順にする
    // publishedAtでソートするのがめんどくさいので
    return a > b ? -1 : 1;
  }).map(fileName => {
    const fileContents = fs.readFileSync(path.join(process.cwd(), 'posts', fileName), 'utf-8');
    const { data } = matter(fileContents);

    const dateString = fileName.split('_')[0];
    const slug = path.basename(fileName.split('_')[1], path.extname(fileName.split('_')[1]));

    return {
      id: path.basename(fileName, path.extname(fileName)),
      title: data.title ?? slug,
      publishedAt: data.date ? format(data.date, 'yyyy-MM-dd') : dateString,
    };
  });
}

export const post = async (fileName) => {
  const postPath = path.join(process.cwd(), 'posts', fileName);
  console.log(postPath);
  const fileContents = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(fileContents);

  const dateString = fileName.split('_')[0];

  return {
    title: data.title ?? fileName,
    publishedAt: data.date ? format(data.date, 'yyyy-MM-dd') : dateString,
    body: await markdownToHtml(content)
  };
};
