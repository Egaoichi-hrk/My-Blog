export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        Welcome to My Blog
      </h1>
      <div className="grid gap-6">
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            このブログについて
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Egaoichiは私の個人ブログサイトです。日々の活動や思考、技術的な発見などを共有していきます。ポートフォリオの一環として、サイトを開設し、さまざまなサービスやブログを運営していけたらと思います。
          </p>
        </div>
      </div>
    </div>
  );
} 