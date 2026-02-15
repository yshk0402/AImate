const problemItems = ["毎月ゼロから作るレポート", "手作業のデータ整形", "属人化した文章作成", "AIを触って終わる勉強会"];

const supportCases = [
  {
    title: "広報・採用",
    items: ["採用記事生成フロー構築", "社内報テンプレ化", "プロンプト資産化"]
  },
  {
    title: "Webマーケ会社",
    items: ["月次レポート半自動化", "GAデータ整形自動化", "提案資料ドラフト生成"]
  },
  {
    title: "営業組織",
    items: ["提案書の骨子自動生成", "コールドメール最適化", "業界別トークスクリプト生成"]
  }
];

const flow = ["無料ヒアリング", "業務構造の可視化", "改善ポイント抽出", "AI設計・実装", "継続改善"];

export default function Page() {
  return (
    <main className="ox-page">
      <section className="ox-hero">
        <p className="ox-eyebrow">Operate X</p>
        <h1>月額でAI人材にタスクを依頼し放題。</h1>
        <p>AIツールの導入ではなく、業務の再設計と実装まで。</p>
        <p>小さな無駄を削り、利益を積み上げるAIパートナーが御社のチャットサービスに常駐。</p>
        <div className="ox-cta-row">
          <a href="/contact" className="ox-cta-primary">
            無料相談する
          </a>
          <a href="/contact" className="ox-cta-secondary">
            資料ダウンロード
          </a>
        </div>
      </section>

      <section className="ox-section">
        <h2>その業務、本当に人がやる必要ありますか？</h2>
        <ul>
          {problemItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>無駄だと分かっているのに、変えられない。</p>
        <p>多くの企業が、ここで止まっています。</p>
      </section>

      <section className="ox-section ox-alt">
        <h2>Operate Xは「AI導入支援」ではありません。</h2>
        <p>私たちは、業務フローに入り込み、AIを実装するパートナーです。</p>
        <p>提案で終わらない。実装までやる。</p>
      </section>

      <section className="ox-section">
        <h2>月額AIパートナーという新しい形</h2>
        <ul>
          <li>業務相談し放題</li>
          <li>改善提案し放題</li>
          <li>小規模開発込み</li>
          <li>社内フロー設計込み</li>
        </ul>
        <p>単発コンサルではなく、継続的に改善を回す体制を作ります。</p>
      </section>

      <section className="ox-section ox-alt">
        <h2>支援例</h2>
        <div className="ox-grid">
          {supportCases.map((group) => (
            <article key={group.title} className="ox-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p>派手なDXではなく、毎月確実に効く改善を積み重ねます。</p>
      </section>

      <section className="ox-section">
        <h2>他社との違い</h2>
        <div className="ox-grid-2">
          <article className="ox-card">
            <h3>よくあるAIコンサル</h3>
            <ul>
              <li>提案だけ</li>
              <li>単発契約</li>
              <li>ツール導入で終了</li>
            </ul>
          </article>
          <article className="ox-card ox-card-featured">
            <h3>Operate X</h3>
            <ul>
              <li>実装まで</li>
              <li>月額伴走</li>
              <li>業務そのものを再設計</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="ox-section ox-alt">
        <h2>導入の流れ</h2>
        <ol>
          {flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>最初の一歩は小さく。でも改善は止めない。</p>
      </section>

      <section className="ox-section">
        <h2>料金イメージ</h2>
        <p>ライトプラン: 月額10万円〜</p>
        <p>スタンダード: 月額20万円〜</p>
        <p>※業務量に応じて個別設計</p>
      </section>

      <section className="ox-section ox-final">
        <h2>まずは、あなたの会社の“無駄”を一緒に見つけませんか？</h2>
        <div className="ox-cta-row">
          <a href="/contact" className="ox-cta-primary">
            無料相談する
          </a>
          <a href="/contact" className="ox-cta-secondary">
            資料ダウンロード
          </a>
        </div>
      </section>
    </main>
  );
}
