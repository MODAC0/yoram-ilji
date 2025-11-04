import { getBlogPosts } from "@/api/notion";
import BlogList from "@/components/BlogList";
import { NotionTitleProperty } from "@/types/notion";


export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">블로그</h1>
      <BlogList posts={posts} />
    </div>
  );
}
