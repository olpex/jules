import React, { useState, useEffect } from 'react';

const Tools = () => {
  // Password Generator State
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  // Checklist State
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Встановлено пароль/FaceID/TouchID на вхід', checked: false },
    { id: 2, text: 'Увімкнено двофакторну автентифікацію для AppleID/Google', checked: false },
    { id: 3, text: 'ОС оновлена до останньої версії', checked: false },
    { id: 4, text: 'Вимкнено автоматичне підключення до невідомих Wi-Fi', checked: false },
    { id: 5, text: 'Перевірено дозволи для застосунків (камера, мікрофон)', checked: false },
    { id: 6, text: 'Налаштовано віддалений пошук пристрою (Find My)', checked: false },
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const progress = Math.round((checklist.filter(i => i.checked).length / checklist.length) * 100);

  return (
    <section id="tools" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Практичні інструменти</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Використовуйте ці інструменти, щоб підвищити свій рівень захисту прямо зараз.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Password Generator */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">🔐</span> Генератор паролів
            </h3>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 flex items-center justify-between">
              <code className="text-blue-400 text-lg font-mono break-all">{password}</code>
              <button
                onClick={generatePassword}
                className="ml-4 p-2 text-slate-400 hover:text-white transition-colors"
                title="Оновити"
              >
                🔄
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-slate-300 text-sm">Довжина: {length}</label>
                </div>
                <input
                  type="range"
                  min="8" max="32"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                    className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-slate-300 group-hover:text-white transition-colors">Включати цифри</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                    className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-slate-300 group-hover:text-white transition-colors">Включати символи</span>
                </label>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(password);
                  alert('Пароль скопійовано!');
                }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
              >
                Скопіювати пароль
              </button>
            </div>
          </div>

          {/* Security Checklist */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
              <span className="mr-3">✅</span> Чек-лист безпеки
            </h3>
            <p className="text-slate-400 mb-6 text-sm">Перевірте свій пристрій за списком нижче.</p>

            <div className="mb-8">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-slate-400">Рівень захисту</span>
                <span className="text-blue-400 font-bold">{progress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              {checklist.map(item => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start ${
                    item.checked
                      ? 'bg-blue-500/10 border-blue-500/50 text-white'
                      : 'bg-slate-800/30 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center mr-4 transition-colors ${
                    item.checked ? 'bg-blue-500 border-blue-500' : 'border-slate-600'
                  }`}>
                    {item.checked && <span className="text-xs text-white">✓</span>}
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {progress === 100 && (
              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl text-emerald-400 text-center text-sm font-medium animate-bounce">
                🎉 Вітаємо! Ваш пристрій надійно захищений!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
