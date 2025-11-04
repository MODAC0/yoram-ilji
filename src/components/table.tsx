"use client";

import { NotionPage } from "@/types/notion";
import Link from "next/link";

export default function Table({ posts }: { posts: NotionPage[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">제목</th>
            <th className="py-2 px-4 border-b">카테고리</th>
            <th className="py-2 px-4 border-b">발행일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="py-2 px-4 border-b">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.properties.제목.title[0].plain_text}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                <Link
                  href={`/category/${post.properties.카테고리.select?.name}`}
                  className="hover:underline"
                >
                  {post.properties.카테고리.select?.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                {post.properties.발행일.date?.start}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
