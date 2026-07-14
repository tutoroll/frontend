export default function RegisterPage() {
  return (
    <main className="flex w-screen h-screen justify-center items-center bg-blue-50/50">
      <div className="flex w-6/10 flex-col bg-white shadow-2xl border border-blue-200 rounded-2xl p-4 gap-4">
        <span className="inline-block font-bold">Регистрация</span>
        <input
          type="text"
          placeholder="Почта"
          className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm focus:shadow-md focus:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Пароль"
          className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm focus:shadow-md focus:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
        />
      </div>
    </main>
  );
}
