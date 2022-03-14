import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';


const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, 'data'))

export const getFilesBySlug = async(slug: any) => {
  const mdxSource = fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf-8');

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontmatter: {...data, slug, content}
  }
};

export const getAllFilesMedata = () => {
  const files = getFiles();

  return files.reduce( (allPosts: any, postSlug: any): any[] => {
    console.log(allPosts)
    const mdxSource = fs.readFileSync(path.join(root, 'data', postSlug))
    const { data } = matter(mdxSource)

    return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPosts]
  }, [])
}
