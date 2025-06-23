'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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
  },
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
  },
  {
    slug: 'analysisMemories',
    title: 'データ分析のためのPythonコードシート',
    date: '2025-06-02',
    excerpt: '私は現在、データサイエンス学部に通っている大学三年生です。大学生になってからこれまでにしてきたことをまとめました。',
    imageUrl: '/progamingtimage.png',
    author: 'Haruki',
    content: `
      目次：
      1.Pandas
      2.Numpy
      3.Matplotlib
      4.Scikit-learn
      5.FastAPI
      6.TensorFlow
      .
      .
      .
      1. Pandas
      ・Pandasをインポート
      import pandas as pd
      ・データの読み込み
      df = pd.read_csv('data.csv')
      df = pd.read_excel('data.xlsx')
      df = pd.read_sql('SELECT * FROM table', connection)
      ・データ出力（保存）
      df.to_csv('output.csv', index=False)
      df.to_excel('output.xlsx', index=False)
      ・データフレームの生成
      pd.DataFrame({'column1': [1, 2, 3], 'column2': ['a', 'b', 'c']})
      pd.DataFrame([[1, 'a'], [2, 'b'], [3, 'c']], columns=['column1', 'column2'])
      ・行名の指定
      df.index = ['row1', 'row2', 'row3']
      ・列名の指定
      df.columns = ['column1', 'column2']
      ・データフレームの表示
      df
      ・複数の列の指定
      df_subset = df[['column1', 'column2']]
      ・範囲選択
      df.iloc[0:5, 1:3] 
      (0行目から4行目、1列目から2列目までを選択）
      ・条件抽出
      df[df['column1'] > 10]   
     （column1が10より大きい行を選択）
      ・複数の条件で抽出
      df.query("A > 3 and C < 10")
     （A列が3より大きく、C列が10より小さい行を選択）
     ・列の削除
      df.drop(columns=['column1', 'column2'])
      (column1とcolumn2を削除）
     ・行の削除  
      df.drop(index=['row1', 'row2'])
      (row1とrow2を削除）
     ・列の追加
      df['new_column'] = [1, 2, 3]
      (新しい列を追加）
     ・基本的な統計量の取得
      df.describe()
     ・最大値
      df.max()
     ・最小値
      df.min()
     ・平均値
      df.mean()
     ・中央値
      df.median()
     ・標準偏差
      df.std()
     ・相関係数
      df.corr()
     ・件数
      df.count()
     ・グループバイ（オブジェクト作成）
      df.groupby('column1')
     ・行で連結
      pd.concat([df1, df2], ignore_index=True)
     ・列で連結
      pd.concat([df1, df2], axis=1, join_axes=[df.index])
     ・データ変換
      df.values
      .
      .
      .
      2. Numpy
      ・Numpyを使うメリット
      Numpyはベクトル演算をすることができる。
      ・ベクトル演算の際の注意
      ベクトルは要素のデータ型が1種類のみ,一次元。（リスト・タプル・ディクショナリは複数のデータ型の要素を入れられる）
      ・リスト
      df = [1,2,3] 
      ・タプル
      df = (1,2,3)
      ・ディクショナリ(keyとvalueをセットで格納できるデータ型)
      df = {"No1":"apple","No2":"orange","No3":"banana"}  
      ・Numpyをインポート
      import numpy as np
      ・ndarray配列を作成
      df = np.array(data)
      ・行列を作成
      df = ([1,2,3,4],[5,6,7,8],[9,10,11,12])
      ・初期化配列（一次元ベクトル）
      df = np.zeros(5)
      ・すべて1のベクトル作成
      df = np.ones((2.4))
      ・全ての要素を指定した数で行列を作る
      df = np.full(5,3)
      ・対角線上の要素を1にした行列を作る
      df = np.eye(4)
      ・等間隔の行列を作る
      df = np.arange(1,100,3)
      ・ベクトルを行列にする
      df = np.arange(1,100,3).reshape(5,3)
      ・配列の形状を調べる
      df.shape
      np.shape(df)
      ・データ型の確認
      df.dtype
      int → 整数
      unicode → 文字
      float → 少数
      ・統計量
      np.mean,np.var,np.std
      ・行列を1次元配列に直す
      np.ravel(df)
      ・ベクトルの演算

      


     

    `
  }
  
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