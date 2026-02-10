import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlogPosts, getLandingPages } from "@/lib/content/repository";
import { isLocale } from "@/lib/i18n/locales";

export default async function LocaleHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [posts, pages] = await Promise.all([getBlogPosts(locale), getLandingPages(locale)]);

  return (
    <>
      <p>{locale === "ja" ? "コーポレート基盤" : "Corporate Foundation"}</p>
      <h1>
        {locale === "ja"
          ? "変更に強いコーポレートサイト運用を開始"
          : "Start a corporate site workflow that scales with change"}
      </h1>
      <p>
        {locale === "ja"
          ? "このサイトはGit管理されたMDXコンテンツをベースに、ブログとLPを素早く拡張できる構成です。"
          : "This site is built for rapid expansion with Git-managed MDX content across blog and landing pages."}
      </p>

      <section aria-label={locale === "ja" ? "最新ブログ" : "Latest blog posts"}>
        <h2>{locale === "ja" ? "最新ブログ" : "Latest blog posts"}</h2>
        <ul>
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <article>
                <h3>
                  <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                {post.publishedAt ? <p>Published: {post.publishedAt}</p> : null}
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label={locale === "ja" ? "公開中LP" : "Published landing pages"}>
        <h2>{locale === "ja" ? "公開中LP" : "Published landing pages"}</h2>
        <ul>
          {pages.slice(0, 3).map((page) => (
            <li key={page.campaign}>
              <article>
                <h3>
                  <Link href={`/${locale}/lp/${page.campaign}`}>{page.title}</Link>
                </h3>
                <p>{page.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <p>
        <Link href={`/${locale}/blog`}>
          {locale === "ja" ? "ブログ一覧を見る" : "Browse all blog posts"}
        </Link>
      </p>
    </>
  );
}
