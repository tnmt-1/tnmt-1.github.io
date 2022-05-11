---
title: Amazon API Gatewayでバイナリデータを返す
summary: "API Gatewayを使ってバイナリデータを返却できるようにしました。"
date: 2021-10-19T20:54:00+09:00
categories: Tech
tags:
    - aws
    - apigateway
---

API Gateway を使ってバイナリデータを返却する場合、設定が必要だったのでメモしとく。

### 困ってること

画像が表示されない。

細かいこと書くのがめんどうなので図にしました。

![occurrence.png](https://dsm01pap001files.storage.live.com/y4mIv945BbjauH35T-tREJzF2lzwfmAwJ6T9kWF2ZR2DkNnxIeJl9D-8Y9qOIjSNcRf96KScFwqmbJbWBJgb6TG6J2moLi-xerMaIJv-5Cbc8oYIFoAhjlOiQrg2kaI-1KkQg-huNwgrVuJHs9a3lx17IRNzQb-I_MQLspoaAdTEhiJ_EthWUjhWkLdZZAyl3Gr?encodeFailures=1&width=589&height=211)

### やったこと

API Gatewayの設定でバイナリメディアタイプに `text/html` を設定

[Lambdaプロキシ統合を使用して、バイナリデータを処理するAPI Gateway APIを設定するにはどうすればよいですか？](https://aws.amazon.com/jp/premiumsupport/knowledge-center/api-gateway-binary-data-lambda/) によると、ブラウザから送信してるAcceptヘッダーのデフォルトが `text/html` らしいので、バイナリメディアタイプとして追加する必要があるらしい。

> 注: ウェブブラウザは複数の値を含む Accept ヘッダーを自動的に送信します。デフォルトでは、最初の値は常に html/text です。API Gateway は最初の値のみを参照するので、text/html をバイナリメディアタイプとして API に追加する必要があります。そうでないと、次のエラーメッセージが表示されます
