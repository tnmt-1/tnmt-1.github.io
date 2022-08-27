---
title: "Firefox終了時にBookmarkをエクスポート"
summary: "Firefox終了時にBookmarkをHTML形式で任意のディレクトリにエクスポートします"
date: 2022-01-18T20:23:19+09:00
categories: Tech
tags:
    - firefox
---

Firefox 終了時に Bookmark を HTML 形式で任意のディレクトリにエクスポートします。

[xBrowserSync](https://addons.mozilla.org/en-GB/firefox/addon/xbs/) を使ってたらブックマークがたくさん消えてしまった経験があるため、定期的にバックアップをとりたいって思いました。

`about:config` の設定をすれば対応できるのがわかったので設定手順を残します。

1. [about:config](about:config) を開く
2. 以下設定をする
   | key | value |
   | -------------------------------- | -------------------------------------------- |
   | browser.bookmarks.autoExportHTML | true |
   | browser.bookmarks.file | 保存先のパス（ファイル名含む） |
3. Firefox を再起動する。

これで、Firefox 終了時に保存先パスにエクスポートされます。

## 参考

- [Firefox のブックマークを終了時に html 形式で自動保存する方法とその保存先の変更方法](http://wasure.net/autofox/)
