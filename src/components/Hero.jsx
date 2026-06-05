import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          Твоя безпека в <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">мобільному світі</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10">
          Дізнайся, як захистити свої дані, уникати шахраїв та налаштувати смартфон для максимальної приватності. Практичні інструменти та знання в одному місці.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#edu"
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Почати навчання
          </a>
          <a
            href="#tools"
            className="px-8 py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition-all"
          >
            Спробувати інструменти
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🔒</span>
            <span className="text-sm text-slate-300">Приватність</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🛡️</span>
            <span className="text-sm text-slate-300">Захист</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">📱</span>
            <span className="text-sm text-slate-300">Пристрої</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">⚡</span>
            <span className="text-sm text-slate-300">Швидкість</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
