'use client';

import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default function NotionBlock({ block }: { block: BlockObjectResponse }) {
  switch (block.type) {
    case "heading_2":
      return <h2 className="text-2xl font-bold mt-8 mb-4">{block.heading_2.rich_text[0]?.plain_text}</h2>;
    case "paragraph":
      return <p className="mb-4">{block.paragraph.rich_text[0]?.plain_text}</p>;
    default:
      return <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(block, null, 2)}</pre>;
  }
}
