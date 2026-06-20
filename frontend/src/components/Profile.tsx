export default function Profile() {
  return (
      <div className="profile-container">

        <div className="prof">
          <img src="/prof.jpeg" alt="米山賢伸のプロフィール" />
          <p>Produced with ReactVite + Rails</p>
        </div>

        <ul className="list">

          <li>
            <h2 className="flex-a">
              <span>プロフィール</span>
              <a className="jp" href="/en">JP/EN</a>
            </h2>

            <p>
              <strong>役職/所属</strong>：<br />
              <strong><em>フリーランスのインフラエンジニア</em></strong>
            </p>

            <p><strong>学歴</strong>：Essex大学/ComputerScience専攻（在学中）</p>
            <p><strong>生年月日</strong>：2005年10月27日</p>
            <p><strong>趣味</strong>：勉強</p>
            <p><strong>所持資格</strong>：独検5級/英検2級</p>
            <p><strong>習得言語</strong>：Ruby/C/React/MySQL</p>
          </li>

          <li>
            <h2>研究内容</h2>
            <p>
              アプリ開発におけるCRubyを経由したRubyによるCやC++の活用。また、
              Scala Nativeを基幹言語としたオブジェクト的低層レイヤソフトウェアの研究なども行っている。
              近年ではISAからLLVM IRまでを囲い込み、RISC-Vを活用してCCNOT論理回路の実装を目指している。
              加えて、Scalaを活用して、ビッグデータ解析も行っている。
            </p>
          </li>

          <li>
            <h2>連絡先・外部サイト</h2>
            <p>
              ・{" "}
              <a
                  className="github"
                  href="https://youtu.be/dQw4w9WgXcQ?si=U1bbHn2gwfX7Tm2U"
                  target="_blank"
                  rel="noreferrer"
              >
                github
              </a>
            </p>
          </li>

        </ul>

      </div>
  );
}
