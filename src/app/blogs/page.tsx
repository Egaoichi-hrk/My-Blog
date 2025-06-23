'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'first-blog',
    title: '初めてのブログ投稿',
    date: '2025-06-01',
    excerpt: 'こんにちは！これは私の最初のブログ投稿です。このブログでは、技術的な話題や日々の開発で学んだことについて書いていきます。',
    imageUrl: '/cute.jpg',
    author: 'Haruki'
  },
  {
    slug: 'development',
    title: 'これまでの大学生活を振り返る',
    date: '2025-06-02',
    excerpt: '私は現在、データサイエンス学部に通っている大学三年生です。大学生になってからこれまでにしてきたことをまとめました。',
    imageUrl: '/studyimage.jpg',
    author: 'Haruki'
  }
  ,
  {
    slug: 'future',
    title: 'データ活用に関する課題とデータ活用の民主化で社会の未来をよりよくための提案、Society5.0',
    date: '2025-06-05',
    excerpt: 'データ活用を社会に浸透させるにあたっての課題を考えました。',
    imageUrl: '/FutureAI.png',
    author: 'Haruki'
  }
  ,
  {
    slug: 'analysisMemories',
    title: 'データ分析のためのPythonコードシート',
    date: '2025-06-10',
    excerpt: '私がデータ分析の際に使用するPythonコードをまとめました。(Pandas,Numpy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, PyTorch, etc.)',
    imageUrl: '/progamingtimage.png',
    author: 'Haruki'
  }
  

];

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="text-sm text-gray-600 mb-2">
                <span className="mr-4">投稿日: {post.date}</span>
                <span>著者: {post.author}</span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link
                href={`/blogs/${post.slug}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                続きを読む
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 