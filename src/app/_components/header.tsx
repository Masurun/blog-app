"use client";
import React, { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="shadow">
      <div className="flex items-center justify-between p-8 bg-white container mx-auto px-5">
        <h1 className="text-2xl font-bold tracking-tighter">
          <Link href="/" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Ran's Blog</Link>
        </h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/blog/diary/1" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">日記</Link>
          <Link href="/blog/eiken/1" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">英検</Link>
          <Link href="/blog/toeic/1" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">TOEIC</Link>
          <Link href="/about" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">About</Link>
          <Link href="/contact" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Contact</Link>
        </nav>
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // モーダルが開いているときは一本の線を表示
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16"
              />
            ) : (
              // モーダルが閉じているときは通常のハンバーガーメニューを表示
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* SP表示時のモーダルメニュー */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-white w-full h-full bg-opacity-75 z-50 flex items-center justify-center md:hidden"
            onClick={closeMenu} // 背景をクリックするとメニューが閉じる
          >
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <Link href="/blog/diary/1" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">日記</Link>
              <Link href="/blog/eiken/1" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">英検</Link>
              <Link href="/blog/toeic/1" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">TOEIC</Link>
              <Link href="/about" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">About</Link>
              <Link href="/contact" className="relative pb-1 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
