export const Skill = () => {
  return (
    <div>
      <h2>スキル</h2>

      <div className="frontend">
        <h3>フロントエンド</h3>
        <ul>
          <li style={{ backgroundColor: "#1792F2" }}>jQuery</li>
          <li style={{ backgroundColor: "#7EB6D7" }}>React.js</li>
        </ul>
      </div>

      <div className="backend">
        <h3>バックエンド</h3>
        <ul>
          <li style={{ backgroundColor: "#0C73B2" }}>PHP</li>
          <li style={{ backgroundColor: "#B22234" }}>Java</li>
          <li style={{ backgroundColor: "#E6B857" }}>Python</li>
          <li style={{ backgroundColor: "#F19751" }}>SQL</li>
        </ul>
      </div>

      <div className="qualification">
        <h3>資格</h3>
        <ul>
          <li style={{ backgroundColor: "#DFC39D" }}>応用情報技術者試験</li>
          <li style={{ backgroundColor: "#BA73A4" }}>Java 8 Gold</li>
          <li style={{ backgroundColor: "#407D6C" }}>LPIC Level1</li>
          <li style={{ backgroundColor: "#844D00" }}>Oracle Master Bronze</li>
          <li style={{ backgroundColor: "#F19751" }}>AWS Cloud Practitioner</li>
        </ul>
      </div>

      <style jsx>
        {`
          ul {
            list-style: none;
          }

          li {
            align-items: center;
            cursor: default;
            display: inline-flex;
            line-height: 20px;
            max-width: 100%;
            outline: none;
            overflow: hidden;
            padding: 0 12px;
            position: relative;
            text-decoration: none;
            transition-duration: .28s;
            transition-property: box-shadow,opacity;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
            vertical-align: middle;
            white-space: nowrap;
            border-radius: 16px;
            font-size: 14px;
            height: 32px;
            margin: 8px;
          }

          .frontend, .backend, .qualification {
            border: 1px solid #999;
            margin: 10px;
            padding: 0 20px;
            border-radius: 6px;
          }

          h3 {
            border-bottom: 1px solid #999;
          }
        `}
      </style>

    </div>
  )
}
