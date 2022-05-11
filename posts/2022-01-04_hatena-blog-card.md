---
title: "はてなブログカードを使ってカード型のリンクを貼る"
summary: "はてなブログカードを使ってカード型リンクを生成しました。"
date: 2022-01-04T10:40:00+09:00
categories: Tech
tags:
    - html
    - javascript
---

htmlにこれを書くだけでカード型リンクになります。

```html
<iframe
  class="hatenablogcard"
  style="width:100%;height:155px;max-width:500px;"
  src="https://hatenablog-parts.com/embed?url=【ブログURL】"
  frameborder="0"
  scrolling="no">
</iframe>
```

自分のブログでも使いたいけど、いちいち書くのが面倒だったので、`<a>`に`class="blogcard"`を定義したらカード型リンクになるような JavaScript を書いた。

```html
<a class="blogcard" href="xxxx"></a>
```

```javascript
// jQueryです
$('a.blogcard').each(function () {
    const url = $(this).attr(`href`);
    const iframe = $(`<iframe>`)
        .addClass(`hatenablogcard`)
        .attr(`src`, `https://hatenablog-parts.com/embed?url=${url}`)
        .attr(`frameborder`, 0)
        .attr(`scrolling`, `no`)
    $(this)[0].outerHTML = iframe[0].outerHTML
    $(this).remove()
});
```

```css
iframe.hatenablogcard {
  width: 100%;
  height: 150px;
  max-width: 500px;
}
```


### 参考

{{< blogcard "https://dev.classmethod.jp/articles/embed-link/" >}}
