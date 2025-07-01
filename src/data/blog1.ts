


export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  content: string;
}


export const blog1Post: BlogPost = 
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
;