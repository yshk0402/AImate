import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlogPosts } from "@/lib/content/repository";
import { isLocale } from "@/lib/i18n/locales";

export default async function BlogIndexPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const posts = await getBlogPosts(locale);

  return (
    <>
      <h1>{locale === "ja" ? "ブログ" : "Blog"}</h1>
      <p>
        {locale === "ja"
          ? "published の記事のみ表示されます。"
          : "Only content marked as published is listed here."}
      </p>

      {posts.length === 0 ? (
        <p>{locale === "ja" ? "公開中の記事はありません。" : "No published posts yet."}</p>
      ) : (
        <section aria-label={locale === "ja" ? "ブログ記事一覧" : "Blog posts list"}>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <h2>
                    <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.description}</p>
                  {post.publishedAt ? <p>Published: {post.publishedAt}</p> : null}
                </article>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
