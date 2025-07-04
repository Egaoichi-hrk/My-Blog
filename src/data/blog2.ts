

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
    imageUrl: '/library.jpg',
    author: 'Haruki',
    content: `
      目次：
      1.教師あり学習
      2.教師なし学習
     .
     .
     .
     .
     1. 教師あり学習
    ・回帰分析
    ・k-近傍法（k-NN）
    K近傍法とは、未知データの分類をする方法の一つで、ｋは近くに存在する学習データの数を表す。既にクラス分けされたデータを学習させておいたうえで、未知データを分類させる方法である。ｋを変化させることで、クラスが変わる可能性があるため、最も適切なｋを選択し、効率良く分類を収束させる必要がある。
    ・線形判別分析
    ・独立成分分析


    ・サポートベクターマシン（SVM）
    2.教師なし学習
    ・k-meansクラスタリング
    k-means法は、データをk個のクラスタに分割する手法。各データポイントは、最も近いクラスタの中心に割り当てられる。重心は、各クラスタ内のデータポイントの平均位置として計算される。このプロセスは、クラスタの割り当てが変わらなくなるまで繰り返される。ｋは分けたいクループの数で最初に決める必要がある。クラスタの初期化方法（初期のクラスタ中心）によってクラスタリングの結果が変わる。そのため、初期のクラスタ中心はk-means 法は初期値依存性が高く、重心を「距離に比例して分散させて」初期値を設定すると効率的に収束する。初期値を分散させて設定しないと、偏りが発生し、効率が悪くなる。 

    ・階層的クラスタリング
    ・主成分分析（PCA）

    `
  }
;