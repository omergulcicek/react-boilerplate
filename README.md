# React Boilerplate

`React`, `Router`, `Helmet` ve `Styled Component` kullanılarak geliştirilen bir proje taslağıdır.

## Bileşenler

`Header`, `Footer`, `Seo`, `Styled` (Css Kodları), `Layout` bileşenleri `src/components` klasörü içerisinde bulunmaktadır.

`Layout.jsx` componenti içerisine yazacağınız her hangi bir içerik ile **header + içerik + footer** yapısını oluşturmuş olursunuz.

Örneğin;

```js
import React from "react"
import { Layout } from "./../components"

const App = () => {
  return (
      <Layout>
        <p>Ömer Gülçiçek</p>
      </Layout>
  )
}
```

Yukarıda ki kod HTML çıktısı olarak şu DOM yapısında çıktı verecektir.

```html
<header></header>

<main>
  <p>Ömer Gülçiçek</p>
</main>

<footer></footer>
```

## Sayfalar

Sitede ki sayfaları `pages` klasörü içerisinde oluşturabilir ve şu şekilde çağırabilirsiniz.

```js
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
```

Fakat bu projede hem satır fazlalığını azaltmak hemde sayfaları daha kolay çağırılabilmek için `src/pages/index.js` klasörü içerisinden sayfaları export ederek tek yerden çağrılması sağlandı.

Yani üstteki 3 sayfayı şu şekilde çağırabilirsiniz.

```js
import { Home, About, Contact } from "./pages"
```

`src/pages/index.js` klasörü içerisinde 2 örnek bulunmakta, aynı yapıda sayfalarınızı ekleyerek, geliştirme yaptığınız asıl ekranda daha temiz bir kod görünümü sağlayabilirsiniz.

---

## Biraz daha detay

### Seo

Seo için `Helmet` componenti kullanıldı. Detaylar için [react-helmet](https://www.npmjs.com/package/react-helmet) sayfasını inceleyebilirsiniz.

### CSS

CSS'ler Styled-Component ile hazırlandı (*İsteğe bağlı normal css klasör yapısına geçirilebilir*).

`src/components/Styled.jsx` componenti içerisine örneklerdeki gibi kodları export edip `import { Title } from "./Styled"` şeklinde sayfaya dahil edip kullanabilirsiniz.

Detaylar için [styled-components](https://styled-components.com/docs/advanced) sayfasını inceleyebilirsiniz.

### Header Linkleri

Header üzerinde bulunan menüde linkleri `src/components/Header.jsx` içerisinde bulunan `const links` dizisinden değişebilirsiniz.

Bu diziye ekleme yaptığınızda menü kendini güncelleyecektir. Örnek olarak şu dizi verilmiştir;

```js
export const links = [
  {
    text: "Ana Sayfa",
    link: "/"
  },
  {
    text: "Css",
    link: "/css"
  }
]
```

---

*Zamanla boilerplate'de, yapıda da güncellemeler olacaktır.*

---
