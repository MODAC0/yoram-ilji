import { getPostsByCategory } from "@/api/notion";
import Table from "@/components/table";

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const posts = await getPostsByCategory(decodeURIComponent(params.category));

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">{decodeURIComponent(params.category)}</h1>
      <Table posts={posts} />
    </div>
  );
}
