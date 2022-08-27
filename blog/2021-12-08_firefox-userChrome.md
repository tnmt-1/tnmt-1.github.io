---
title: Firefoxからタブを非表示にする
summary: "`userChrome.css`を使ってタブを非表示にしました。"
date: 2021-12-08T20:03:00+09:00
categories: Tech
tags:
    - firefox
---

Firefox でタブを縦で使うために [Tree Style Tab - ツリー型タブ](https://addons.mozilla.org/ja/firefox/addon/tree-style-tab/) をインストールしています。
ただ、これを使うとタブが2箇所に表示されてて既存のタブが邪魔なので、`userChrome.css`を使って非表示にしたので、備忘録として残しておきます。

![Firefox before](https://i.gyazo.com/a2d96af44058cf7387b2deedc83b638f.png)

### userChrome.css の作成場所

アドレスバーに`about:support`を入力してトラブルシューティング情報にアクセスする。
アプリケーション基本情報に `プロファイルフォルダー` とあるので、finder や explorer で開きます。

![トラブルシューティング](https://i.gyazo.com/0c9dc6a886d7cf0184904fa9c837ca65.png)

`プロファイルフォルダー` を開いたら、 `chrome` フォルダを作成します。 `userChrome.css` の作成場所になります。

![finder](https://i.gyazo.com/4143818f4faea5deed52ab217ddce39d.png)

### コード

```css
@charset "UTF-8";
/* chrome://browser/content/browser.xhtml */

/* タブの非表示 */
#titlebar {
  display: none;
}

/* サイドバーの微調整 */
#tabbrowser-tabs {
  visibility: collapse !important;
}

#sidebar {
  min-width: 65px !important;
}
```

### 結果

保存したら、Firefox を再起動して確認します。ブラウザ上部のタブが消えてるはずです。

![Firefox after](https://i.gyazo.com/d70e01540348dd1b5ebe65835e42c519.png)

## 追記 2022-01-19

`userChrome.css` が効かない場合がある。
`about:config` を開いて、 `toolkit.legacyUserProfileCustomizations.stylesheets` を入力。
値を `true` に変更しておこう。
