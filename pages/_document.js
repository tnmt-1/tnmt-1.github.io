import { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { BsSun } from "@react-icons/all-files/bs/BsSun"
import { BsMoon } from "@react-icons/all-files/bs/BsMoon"

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="/static/js/main.js" defer></script>
      </Head>
      <body>
        <header>
          <nav>
            <h2><Link href="/">mt2m10</Link></h2>
            <ul>
              <li>
                <h2>
                  <a href="https://twitter.com/mt2m10" target="_blank" rel="noreferrer" id="twitter"><FaTwitter /></a>
                </h2>
              </li>
              <li>
                <h2>
                  <a href="#" className="colorToggle" id="color-scheme-light" style={{display: "none"}} ><BsSun /></a>
                  <a href="#" className="colorToggle" id="color-scheme-dark" style={{display: "none"}} ><BsMoon /></a>
                </h2>
              </li>
            </ul>
          </nav>
        </header>
        <Main />
        <footer>
          &#169; 2022 mt2m10
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
