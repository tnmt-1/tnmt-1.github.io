import fs, { promises } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import markdownToHtml from './markdownToHtml.js';

export const postsByFile = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = await promises.readdir(postsDirectory);

  return fileNames.map(fileName => {
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
};

export const postsByGoogleDocs = async () => {
  const postsDirectory = path.join(process.cwd(), 'google_docs');
  const fileNames = await promises.readdir(postsDirectory);

  return fileNames.map(fileName => {
    const fileContents = fs.readFileSync(path.join(process.cwd(), 'google_docs', fileName), 'utf-8');
    const { data } = matter(fileContents);

    const found = fileName.match(/^(\d{4}-\d{2}-\d{2}).?(.+)$/);
    const dateString = found[1];
    const slug = path.basename(found[2], path.extname(found[2]));

    return {
      id: path.basename(fileName, path.extname(fileName)),
      title: data.title ?? slug,
      publishedAt: data.date ? format(data.date, 'yyyy-MM-dd') : dateString,
    };
  });
};

export const posts = async () => {
  const posts = [...await postsByFile(), ...await postsByGoogleDocs()];

  return posts.sort((a, b) => {
    // ファイル名の降順にする
    // publishedAtでソートするのがめんどくさいので
    return a.id > b.id ? -1 : 1;
  });
}

export const post = async (fileName) => {
  const postPath = ['posts', 'google_docs'].filter(dir => {
    const postPath = path.join(process.cwd(), dir, fileName);
    return fs.existsSync(postPath);
  }).map(dir => {
    return path.join(process.cwd(), dir, fileName);
  })[0];

  console.log(postPath);
  const fileContents = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(fileContents);

  const found = fileName.match(/^(\d{4}-\d{2}-\d{2}).?(.+)$/);
  const dateString = found[1];

  return {
    title: data.title ?? fileName,
    publishedAt: data.date ? format(data.date, 'yyyy-MM-dd') : dateString,
    body: await markdownToHtml(content)
  };
};
