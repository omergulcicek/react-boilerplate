import React from "react"

import { SEO } from "./../components"

const Home = () => {
  return (
    <section>
      <div className="container">

        <SEO title="Ana Sayfa" />

        <h1>Ana Sayfa</h1>

        <p>
          Sayfaları <code>src/pages</code> içerisinden değiştirebilirsiniz.
        </p>
        <p>
          İlk olarak <code>src/pages/index.jsx</code> dosyasına yeni sayfayı ekleyerek, oluşturduğunuz bu bileşeni geliştirin.
        </p>

      </div>
    </section>
  )
}

export default Home