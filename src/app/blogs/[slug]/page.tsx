'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blog1Post } from '@/data/blog1';
import { blog2Post } from '@/data/blog2';


interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'first-blog',
    title: '初めてのブログ投稿',
    date: '2025-06-01',
    excerpt: 'こんにちは！これは私の最初のブログ投稿です。このブログでは、技術的な話題や日々の開発で学んだことについて書いていきます。',
    imageUrl: '/cute.jpg',
    author: 'Haruki',
    content: `
      こんにちは！これは私の最初のブログ投稿です。

      私は大学でデータサイエンスを学んでいる大学生です。このブログでは、主に以下のような内容について書いていく予定です：

      1. プログラミングの学習記録
      2. 興味深い技術の紹介
      3. 大学生活での経験
      4. 個人開発プロジェクトの進捗
      など

      最近は特に、Web開発に興味を持っています。ReactやNext.jsなどのモダンな技術を使って、
      このブログサイトを一から作ってみました。

      考えたこと、学んだこと、成果を定期的に更新していきますので、よろしくお願いします！

      今年の目標：
      - TypeScript、Next.jsの知識理解
      - SQLによるデータベーススキルの取得
      - Pythonのスキルアップ(特にFastAPIとscikit-learn)
      - 応用情報技術者試験、統計検定準１級の合格
      - 技術記事の定期的な投稿
      - インターンシップの参加
    `
  }
  ,
  {
    slug: 'development',
    title: 'これまでの大学生活を振り返る',
    date: '2025-06-02',
    excerpt: '私は現在、データサイエンス学部に通っている大学三年生です。大学生になってからこれまでにしてきたことをまとめました。',
    imageUrl: '/studyimage.jpg',
    author: 'Haruki',
    content: `
      大学生活も残りわずかとなり、これまでの3年間を振り返ってみたいと思います。


      ーー1年生ーー
      

      ・サークルに5個入り、コミュニティを広げる（バレーサークルに２つ、テーマパークライブ同好会、バトミントンサークル、バスケサークル）。
      ・大学の授業で、線形代数や微積分を学ぶ。




      ーー2年生ーー
      ・5月    基本情報技術者試験に合格。→ITに興味を持つ。
      ・7月    PythonのStreamlitをさわりWeb開発の楽しさに気づく。
      ・8月    HTMLとCSSによる静的なサイトを自分で作れるようになる。
      ・10月   統計検定２級に合格。
      ・11月   PythonのWebフレームワークFlaskによる、GETやPOST、APIキーを使う。
      ・1月    応用情報技術者試験の勉強開始。
      ・2月    新歓委員会に入り、会計を務める。（2月～6月）
      ・3月    新歓委員会の仕事。サークルの追い出しコンパに使う動画の作成を頼まれ、一人で作成。（過去に動画作成を何度かしたことがあったため。）
      




      ーー3年生ーー
      ・4月   応用情報技術者試験を受験する。企業研究、自己分析を始める。
      ・5月   React/Next.js、TailwindCSSでフロントエンドフレームワークを使い、自分の中でWeb開発に革命が起きる。企業説明会（WEB or 合同説明会)に参加し始める。
      ・6月   CursorとSupabase、TypeScript、Next.js、TailwindCSSを使って、AI駆動開発をしてみて圧巻。(このブログサイトの軸もAIを使用。)  インターンシップのエントリーシートを随時作成。  統計検定準一級の勉強開始。企業面談を何度か行う。
      

      これからの目標：
      就職活動を控え、より実践的なスキルを身につけていきたいと考えています。
      特に、実際のプロダクト開発に関わる経験を積みたいですね。

      大学生活で学んだ最も大切なことは、常に新しいことにチャレンジする姿勢です。
      技術の世界は日々進化していくので、学び続けることが重要だと実感しています。
    `
  }
  ,
  {
    slug: 'future',
    title: 'データ活用に関する課題とデータ活用の民主化で社会の未来をよりよくための提案、Society5.0',
    date: '2025-06-05',
    excerpt: 'データサイエンスを学んできて、データ活用を社会に浸透させるにあたっての課題、これまでに気づいてことをまとめました。',
    imageUrl: '/FutureAI.png',
    author: 'Haruki',
    content: `
    データサイエンスを学んできて、データ活用を社会に浸透させるにあたっての課題、これまでに気づいてことをまとめます。

    ・提案   
    誰でもデータ活用ができるプラットフォームをつくることでデータ活用の民主化を図る。分析はAIが行う。さらに、産業間のデータを共有できるプラットフォームでもあるため、Society5.0の促進を図る。



    `
  }
  ,
  blog2Post
  ,
  blog1Post

];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-block mb-6 text-blue-500 hover:text-blue-600"
        >
          ← ブログ一覧に戻る
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <div className="mr-6">
                <span className="mr-2">投稿日:</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div>
                <span className="mr-2">著者:</span>
                <span>{post.author}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>
        < br/>
        <Link
          href="/blogs"
          className="inline-block mb-6 text-blue-500 hover:text-blue-600"
        >
          ← ブログ一覧に戻る
        </Link>
      </div>
    </div>
  );
} 





