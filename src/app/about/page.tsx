import Image from 'next/image'
import nextConfig from "../../../next.config.js";
const BASE_PATH = nextConfig.basePath || "";

export default function About() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Image
            className="rounded-full"
            src={`${BASE_PATH}/assets/profile.jpg`}
            alt="Profile Picture"
            width={120}
            height={120}
          />
          <h2 className="text-4xl font-bold mt-4">自己紹介</h2>
        </div>
        <div className="space-y-8">
          {/* 1つ目のカード */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">プロフィール</h3>
            <p className="text-gray-600">名前: らん</p>
            <p className="text-gray-600">生年月日: XXXX年XX月XX日</p>
            <p className="text-gray-600">最終学歴: hogehoge大学卒業（XXXX年）</p>
          </div>

          {/* 2つ目のカード */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">職歴</h3>
            <p className="text-gray-600">hogehoge株式会社（XXXX年 - 現在）</p>
            <p className="text-gray-600">役職: Webエンジニア</p>
            <p className="text-gray-600">主な業務: Webアプリケーションの開発</p>
          </div>

          {/* 3つ目のカード */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">スキルセット</h3>
            <ul className="list-disc pl-6">
              <li className="text-gray-600">JavaScript / TypeScript</li>
              <li className="text-gray-600">React / Next.js</li>
              <li className="text-gray-600">Flutter</li>
              <li className="text-gray-600">AWS</li>
            </ul>
          </div>

          {/* 4つ目のカード */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">資格</h3>
            <p className="text-gray-600">AWS認定ソリューションアーキテクト – アソシエイト（XXXX年）</p>
            <p className="text-gray-600">TOEIC 800点（XXXX年）</p>
            <p className="text-gray-600">基本情報技術者（XXXX年）</p>
          </div>

        </div>
      </div>
    </div>
  )
}
