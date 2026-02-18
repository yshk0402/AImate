# Blog SEO戦略（Operates X）

## 1. 目的
- 指名検索以外からの自然流入を増やし、`/contact` への送客を強化する。
- 「AI業務改善」「業務自動化」領域で、実務導入に強い情報源として認知を獲得する。

## 2. 前提
- 既存ブログ記事はダミーとして扱い、戦略設計上は0本スタートとする。
- 言語は日本語のみ。
- 公開対象は `status: published` の記事のみ（運用ルール準拠）。

## 3. ターゲット読者
- 中小〜中堅企業の業務責任者、経営企画、営業企画、採用担当、マーケ担当。
- 課題:
  - AI導入を検討しているが、どこから着手すべきか分からない
  - ツール比較より、業務にどう実装・定着させるかを知りたい
  - 費用対効果や失敗リスクを事前に把握したい

## 4. コンテンツ方針
- 検索需要を優先（Searchable-first）。
- `/blog` 配下で「ハブ1本 + 関連スポーク記事」のクラスター運用を行う。
- 各記事は「検索意図への直接回答 + 実務への落とし込み」を必須にする。

## 5. ピラー設計
1. AI業務改善の進め方（戦略・ロードマップ）
2. 部門別の自動化ユースケース（営業/採用/マーケ/バックオフィス）
3. ガバナンスと運用定着（ルール・品質・失敗回避）

## 6. 90日ロードマップ（週1本、計12本）
1. `ai-gyomu-kaizen-complete-guide`  
   AI業務改善とは？失敗しない進め方完全ガイド（ハブ）
2. `gyomu-kaizen-roadmap-90days`  
   業務改善ロードマップの作り方【90日版】
3. `ai-donyu-shippai-patterns`  
   AI導入が失敗する5つのパターンと対策
4. `eigyo-automation-usecases`  
   営業業務の自動化事例10選
5. `saiyo-automation-usecases`  
   採用業務の自動化事例8選
6. `marketing-automation-usecases`  
   マーケ業務の自動化事例12選
7. `backoffice-automation-usecases`  
   バックオフィス自動化の始め方
8. `ai-governance-checklist`  
   AIガバナンスのチェックリスト（中小企業向け）
9. `ai-tool-selection-criteria`  
   AIツール比較で失敗しない選定基準
10. `ai-naiseika-vs-gaichu`  
    AI運用は内製化か外注か？判断フレーム
11. `ai-gyomu-kaizen-kpi`  
    AI業務改善のKPI設計（工数・品質・速度）
12. `ai-gyomu-kaizen-cost-effect`  
    AI業務改善の費用対効果を試算する方法

## 7. 記事制作テンプレート（SEO最小要件）
- タイトル: 主キーワードを前半に含める
- ディスクリプション: 120〜160字で検索意図に直答
- 見出し: H1は1つ、H2/H3は検索質問ベース
- 本文冒頭: 100〜150字で結論先出し
- 内部リンク: ハブ記事へのリンク + 関連2記事へのリンク
- CTA: 記事末尾に `/contact` への導線を設置

## 8. Frontmatter運用ルール
- 必須:
  - `title`
  - `description`
  - `slug`
  - `status` (`draft` | `published`)
- 推奨:
  - `publishedAt`（ISO日付）
  - `tags`
  - `ogImage`
  - `thumbnail`

## 9. KPI（最初の3か月）
- 公開本数: 12本
- Search Consoleでの表示回数・掲載クエリ数の増加
- `/blog` から `/contact` への遷移率
- 記事経由の問い合わせ件数

## 10. 運用フロー
1. キーワード意図の確定（情報収集/比較検討/導入検討）
2. 記事アウトライン作成（H2/H3先行）
3. 執筆（実務例・判断基準・失敗回避を明記）
4. SEOチェック（タイトル/description/内部リンク/CTA）
5. `status: published` で公開
6. 公開2週間後に順位・CTRを見てリライト判断
