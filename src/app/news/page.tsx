import { siteContent } from "@/components/site/content";
import { NewsTemplate } from "@/components/templates";
import { getBlogPosts } from "@/lib/content/repository";

export default async function NewsPage() {
  const posts = await getBlogPosts();

  return <NewsTemplate content={siteContent} posts={posts} />;
}
