import { siteContent } from "@/components/site/content";
import { BlogIndexTemplate } from "@/components/templates";
import { getBlogPosts } from "@/lib/content/repository";

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return <BlogIndexTemplate content={siteContent} posts={posts} />;
}
