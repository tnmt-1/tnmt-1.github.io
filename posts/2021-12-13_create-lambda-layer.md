---
title: "Amazon Lambda Layer の作成"
summary: "`Amazon Lambda Layer`の使い方についてまとめました。"
date: 2021-12-13T21:37:00+09:00
categories: Tech
tags:
    - aws
    - lambda
---

まず、`Amazon Lambda Layer` とは下記のものです。

> 一言で言えば、複数のLambda関数でライブラリを共有できる仕組みです。

Lambda の Python は標準である程度ライブラリが利用できるようになってますが、 pandas や numpy 、 requests など利用できないライブラリもあります。
「ライブラリを追加したい + 複数のLambdaで共有したい」ときに `Amazon Lambda Layer` を活用すると便利になります。
また、既存のライブラリ以外にも独自で作成したライブラリもLayer化すれば共有できるのでいい感じです。

### 手順

1. ライブラリを ZIP にまとめる
2. AWS Lambda から レイヤーの作成を行う
3. Lambda関数からレイヤーを選択する

以下、 requests を例に説明します。

#### 1. ライブラリを ZIP にまとめる

ターミナル等から任意のディレクトリで以下を実行する。

```sh
mkdir python
pip install -t python requests
zip -r9 layer.zip python
```

#### 2. AWS Lambda から レイヤーの作成を行う

1. [AWS Lambdaのコンソール](https://ap-northeast-1.console.aws.amazon.com/lambda/home)から 2. `その他リリース > レイヤー` を選択する。
3. 画面右上の `レイヤーの作成` ボタンからレイヤーの作成を行う。
4. 各項目を適当に入力して、さっき作成したZIPファイルをアップロードし、`作成`ボタンを押す。これでレイヤーの作成は完了です。

#### 3. Lambda関数からレイヤーを選択する

1. requests を使いたいLambda関数を開き、`関数の概要` のところにある Layers を選択する。
2. `レイヤーの追加` ボタンからさっき作成したレイヤーを選択する。
3. `import requests` を定義すれば、利用できます。

# 参考

- [Lambda Layerの基本的な仕組みを確認する #reinvent](https://dev.classmethod.jp/articles/lambda-layer-basics-how-it-works/)
- [【AWS】LambdaにrequestsライブラリをLayerで追加する](https://sebenkyo.com/2021/05/21/post-1979/)
