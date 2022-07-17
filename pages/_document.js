import { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { BsFillFilePersonFill } from "react-icons/bs"

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <header>
          <nav>
            <h2><Link href="/">mt2m10</Link></h2>
            <ul>
              <li>
                <h2>
                  <Link href="/profile"><a><BsFillFilePersonFill /></a></Link>
                </h2>
              </li>
              <li>
                <h2>
                  <a href="https://twitter.com/mt2m10" target="_blank" rel="noreferrer" id="twitter"><FaTwitter /></a>
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
