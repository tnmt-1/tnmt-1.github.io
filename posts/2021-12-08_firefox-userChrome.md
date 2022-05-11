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

![Firefox before](https://dsm01pap001files.storage.live.com/y4mbpROqqgKL3ktclu9FUHQLVdvavUthbF87WwX7TU5cCFIpvG55AplnBVSKLSBTCi_7pZxQAJPFrOntX0eap9wyGzDWpF5sPuN3cqEPxKx7GSDkfsspFmsomgvqyTyuwdDSDMYpm9FAobfc07vrsULWOmJ-W3xD4zrugJZ_IgzhVlZZX4NKrSOalqZc2UUhfrb?encodeFailures=1&width=998&height=660)

### userChrome.css の作成場所

アドレスバーに`about:support`を入力してトラブルシューティング情報にアクセスする。
アプリケーション基本情報に `プロファイルフォルダー` とあるので、finder や explorer で開きます。

![トラブルシューティング](https://dsm01pap001files.storage.live.com/y4mZqoiFBtC8zUSuGU09fySobNKnB0SQpt7hxLRfqMB9SnaiiHPV0et41u7m-YBENygyI_p57kcXv8e4HgtAvbUB77UgHhCTxSgifJJ_-NxvXeGVfN1g4soxZlqIxKqsa89XQ9txJt4L-ww1yy1PDtcTa8-opTe0jJyuF_EnT2ewGR_Am24bitPQEfIsJ-4XYKn?encodeFailures=1&width=745&height=858)

`プロファイルフォルダー` を開いたら、 `chrome` フォルダを作成します。 `userChrome.css` の作成場所になります。

![finder](https://dsm01pap001files.storage.live.com/y4mDrdODj5GTMr6Zuo7P8RgtvnU1_Jc7fVJFSz8R6I6ogM_dBroYCqcQdTORZU0awMMno3NlqCuKD6eJ8oyeBxcV3leApNYQHJcijGexMn7eCj5DgJ0_4vTnyOtMXV4WljyptxjnwOEN8ln_uC3BhkX3dGqT_zUZh_r65_Xc-_rCcwKeeJ0gC1WM9vWDvAEkBDp?encodeFailures=1&width=1032&height=548)

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

![Firefox after](https://dsm01pap001files.storage.live.com/y4m_-yvAOug9W2beiFpkw0KwvNKyvLquuQAdUoO42GJCzULS917E_owEt8k9Pc9cIsLyKvt1SPq9GOu2YtzMUyGN-sQ7iNGqDWZdstL0P8g-4MHlo2jv2fboF_r5aEKRcqTsfa_a3TUxIrMPcRxc4gwpPs0Ql-7e4KWbaE3cLQFZrBvE-zrNcbaNMem8TTQ4XmU?encodeFailures=1&width=998&height=660)

## 追記 2022-01-19

`userChrome.css` が効かない場合がある。
`about:config` を開いて、 `toolkit.legacyUserProfileCustomizations.stylesheets` を入力。
値を `true` に変更しておこう。
