import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import { getFiles, getFilesBySlug } from "../lib/mdx"
import {MDXRemote} from 'next-mdx-remote'
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import ruby from 'highlight.js/lib/languages/ruby';
import elixir from 'highlight.js/lib/languages/elixir';
import 'highlight.js/styles/github-dark-dimmed.css';

export default function Post({source, frontmatter}: {source: any, frontmatter: any}) {
  console.log('*************************************source')
  console.log(source)
  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('ruby', ruby);
    hljs.registerLanguage('elixir', elixir);
    hljs.highlightAll();
  }, []);

  return <MDXRemote {...source}/>
}

export async function getStaticProps({params}: {params: any}) {
  console.log('start')
  const { source, frontmatter } = await getFilesBySlug(params.slug)

  return {
    props: { source, frontmatter }
  }
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}
