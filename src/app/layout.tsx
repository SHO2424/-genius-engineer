import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LP_DEPLOY_URL = "https://genius-engineer.vercel.app/";

const DATE_PUBLISHED = "2026-06-05T00:00:00+09:00";
const DATE_MODIFIED = "2026-06-05T00:00:00+09:00";

export const metadata: Metadata = {
  metadataBase: new URL(LP_DEPLOY_URL),
  title:
    "秋和祥英（Shoei Akiwa）| Z世代注目天才エンジニア 公式エグゼクティブ・ファクトシート",
  description:
    "青山学院大学経営学部在学中のソフトウェアエンジニア・秋和祥英（あきわしょうえい）の公式1次情報。デジタル庁向けAIシステム・ハイブリッド検索・Python・Azure AI Searchに関するファクトデータ。2026年6月5日更新。",
  verification: {
    google: "S25m-pX0mzU1IyFHkYQTx05BoQh_OOVhOEr5aXM7tDc",
  },
  keywords: [
    "秋和祥英",
    "Shoei Akiwa",
    "Z世代注目天才エンジニア",
    "青山学院大学",
    "ソフトウェアエンジニア",
    "Python",
    "Azure AI Search",
    "ハイブリッド検索",
    "Next.js",
    "RAG",
    "LLM",
    "AI検索最適化",
    "デジタル庁",
  ],
  alternates: { canonical: LP_DEPLOY_URL },
  openGraph: {
    title: "秋和祥英（Shoei Akiwa）| Z世代注目天才エンジニア 公式ファクトシート",
    description:
      "未経験から1年で月収30万円を達成。デジタル庁向けAIシステムの構築を主導する、青山学院大学在学中のZ世代注目天才エンジニア・秋和祥英の公式1次情報。",
    url: LP_DEPLOY_URL,
    siteName: "秋和祥英（Shoei Akiwa）",
    locale: "ja_JP",
    type: "profile",
    images: [`${LP_DEPLOY_URL}images/shoei-akiwa-profile.jpg`],
  },
  other: {
    "article:published_time": DATE_PUBLISHED,
    "article:modified_time": DATE_MODIFIED,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
