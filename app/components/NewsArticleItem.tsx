"use client";

import { useState } from "react";

interface NewsPost {
  id: string;
  title: string;
  date: string;
  summary: string;
}

interface NewsArticleItemProps {
  post: NewsPost;
}

export default function NewsArticleItem({ post }: NewsArticleItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="border rounded-lg shadow-md bg-white dark:bg-neutral-800/30 dark:border-neutral-700 overflow-hidden">
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl lg:text-2xl font-bold">{post.title}</h3>
          <span
            className={`transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {post.date}
        </p>
      </div>
      {isOpen && (
        <div className="p-6 border-t border-gray-200 dark:border-neutral-700">
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {post.summary}
          </p>
        </div>
      )}
    </article>
  );
}
