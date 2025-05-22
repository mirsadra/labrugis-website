// app/components/NewsArticleItem.tsx
"use client";

import Link from "next/link"; // Import Link
import { useState } from "react";

interface NewsPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  link?: string; // Optional link
  linkText?: string; // Optional text for the link
}

interface NewsArticleItemProps {
  post: NewsPost;
}

export default function NewsArticleItem({ post }: NewsArticleItemProps) {
  const [isOpen, setIsOpen] = useState(!!post.link); // Open by default if it's a link post, or keep previous logic

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
          <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {post.title}
          </h3>
          <span
            className={`transform transition-transform duration-200 text-neutral-600 dark:text-neutral-400 ${
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
          {post.link && post.linkText && (
            <div className="mt-4">
              <Link
                href={post.link}
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                {post.linkText}
              </Link>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
