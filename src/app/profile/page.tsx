'use client';

import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        プロフィール
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
            <Image
              src="/cool.jpg"
              alt="Profile Image"
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
          
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Haruki
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Web開発者 / ブロガー/ データサイエンス
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  自己紹介
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Next.jsやPythonを使用したWeb開発をしています。
                  新しいことを学ぶことが好きで、特にフロントエンド開発やデータサイエンス、AI、ビックデータ活用、DXに興味があります。
                  このブログでは、技術的な知見や日々の活動、学んだことを共有していきます。
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  スキル
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Python', 'Tailwind CSS', 'HTML','CSS','Flask','FastAPI','Supabase','Cursor','基本情報技術者','統計検定2級'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  SNS
                </h3>
                <div className="flex gap-4">
                  <a href="https://x.com/peFtOYXB5txqDEK" className="text-primary hover:text-blue-600 dark:hover:text-blue-400">
                    Twitter
                  </a>
                  <a href="https://github.com/Egaoichi-hrk" className="text-primary hover:text-blue-600 dark:hover:text-blue-400">
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/o0_route_0o/" className="text-primary hover:text-blue-600 dark:hover:text-blue-400">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 