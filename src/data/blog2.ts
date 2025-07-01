

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  content: string;
}



export const blog2Post: BlogPost = 
   {
    slug: 'analysisMesod',
    title: '機械学習の基礎',
    date: '2025-06-02',
    excerpt: '学んだ機械学習の基礎をまとめていきます。',
    imageUrl: '/progamingtimage.png',
    author: 'Haruki',
    content: `
      目次：
      1.教師あり学習
      2.教師なし学習
     

    `
  }
;