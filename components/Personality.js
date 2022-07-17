export const Personality = () => {
  return (
    <div>
      <h2>性格</h2>

      <div className="trait">
        <h3>特徴</h3>
        <ul>
          <li>忠誠心が強く実直</li>
          <li>人から必要とされることに喜びを感じる</li>
          <li>粘り強く任務は最後までこなす</li>
          <li>優しく思いやりに溢れ家族や友人の力になろうとする</li>
          <li>あまり感情は表に出さない</li>
          <li>現実的で地に足がついている</li>
        </ul>
      </div>

      <div className="trait mind">
        <h3 className="caption">マインド</h3>
        <div className="barWrapper">
          <div className="percentage left">
            12%
          </div>
          <div className="bar rightFill">
            <div className="filter" style={{ width: "88%" }}></div>
          </div>
          <div className="percentage right active">
            88%
          </div>
        </div>

        <div className="traitTitles">
          <div className="title left">外向型</div>
          <div className="title right active">内向型</div>
        </div>
      </div>

      <div className="trait energy">
        <h3 className="caption">エネルギー</h3>
        <div className="barWrapper">
          <div className="percentage left">
            14%
          </div>
          <div className="bar rightFill">
            <div className="filter" style={{ width: "86%" }}></div>
          </div>
          <div className="percentage right active">
            86%
          </div>
        </div>

        <div className="traitTitles">
          <div className="title left">直感型</div>
          <div className="title right active">現実型</div>
        </div>
      </div>

      <div className="trait nature">
        <h3 className="caption">気質</h3>
        <div className="barWrapper">
          <div className="percentage left">
            49%
          </div>
          <div className="bar rightFill">
            <div className="filter" style={{ width: "51%" }}></div>
          </div>
          <div className="percentage right active">
            51%
          </div>
        </div>

        <div className="traitTitles">
          <div className="title left">論理型</div>
          <div className="title right active">道理型</div>
        </div>
      </div>

      <div className="trait tactics">
        <h3 className="caption">戦術</h3>
        <div className="barWrapper">
          <div className="percentage left active">
            67%
          </div>
          <div className="bar leftFill">
            <div className="filter" style={{ width: "67%" }}></div>
          </div>
          <div className="percentage right">
            33%
          </div>
        </div>

        <div className="traitTitles">
          <div className="title left active">計画型</div>
          <div className="title right">探索型</div>
        </div>
      </div>

      <div className="trait identity">
        <h3 className="caption">アイデンティティ</h3>
        <div className="barWrapper">
          <div className="percentage left">
            49%
          </div>
          <div className="bar rightFill">
            <div className="filter" style={{ width: "51%" }}></div>
          </div>
          <div className="percentage right active">
            51%
          </div>
        </div>

        <div className="traitTitles">
          <div className="title left">自己主張型</div>
          <div className="title right active">慎重型</div>
        </div>
      </div>

      <style jsx>
        {`
          h3:not(.caption) {
            border-bottom: 1px solid #999;
          }

          h3.caption {
            text-align: center;
          }

          .trait {
            border: 1px solid #999;
            border-radius: 6px;
            margin-bottom: 15px;
            overflow: hidden;
            padding: 0 20px;
            padding-bottom: 20px;
            margin: 10px;
          }

          .barWrapper {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }

          .barWrapper .bar {
            height: 12px;
            margin-top: 0;
          }

          .bar {
            background-color: #f5f5f5;
            border-radius: 10px;
            display: flex;
            flex-grow: 1;
            height: 10px;
            margin-top: 2px;
            overflow: hidden;
          }

          .bar.rightFill {
            justify-content: flex-end;
          }

          .bar .filter {
            height: 12px;
          }

          .barWrapper div {
            text-align: center;
          }

          .barWrapper .percentage {
            flex: 0 0 30px;
            font-size: 1.5em;
            margin-top: -35px;
          }

          .barWrapper .percentage:not(.active),
          .traitTitles .title:not(.active) {
            color: #9b9faa;
          }

          .barWrapper .percentage.left {
            padding-right: 30px;
          }

          .barWrapper .percentage.right {
            padding-left: 30px;
          }

          .traitTitles {
            margin-top: -5px;
            align-items: center;
            display: flex;
            justify-content: space-between;
          }

          .traitTitles .title {
            flex: 0 0 80px;
          }

          .traitTitles .title.left {
            padding-right: 30px;
          }

          .traitTitles .title.right {
            padding-left: 30px;
            text-align: right;
          }

          /* ================================
           * 色
           * ================================/

          /* マインド */
          .trait.mind .bar .filter {
            background-color: #4298b4;
          }

          .trait.mind .active {
            color: #4298b4;
          }

          /* エネルギー */
          .trait.energy .bar .filter {
            background-color: #e4ae3a;
          }

          .trait.energy .active {
            color: #e4ae3a;
          }

          /* 気質 */
          .trait.nature .bar .filter {
            background-color: #33a474;
          }

          .trait.nature .active {
            color: #33a474;
          }

          /* 戦術 */
          .trait.tactics .bar .filter {
            background-color: #88619a;
          }

          .trait.tactics .active {
            color: #88619a;
          }

          /* アイデンティティ */
          .trait.identity .bar .filter {
            background-color: #f25e62;;
          }

          .trait.identity .active {
            color: #f25e62;;
          }
        `}
      </style>

    </div>
  )
}
