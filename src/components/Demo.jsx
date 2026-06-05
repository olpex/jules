import React, { useState } from 'react';

const Demo = () => {
  const [step, setStep] = useState(0);

  const phishSteps = [
    {
      title: 'Отримання повідомлення',
      desc: 'Вам приходить термінове SMS від нібито вашого банку або служби доставки.',
      visual: (
        <div className="bg-slate-300 w-64 h-auto rounded-2xl p-3 shadow-lg mx-auto text-black">
          <div className="flex justify-between items-center mb-2 border-b border-slate-400 pb-1">
            <span className="text-[10px] font-bold">SMS/MMS</span>
            <span className="text-[10px]">Зараз</span>
          </div>
          <p className="text-xs leading-tight">
            <span className="font-bold">Privat24:</span> Ваша картка заблокована через підозрілу активність. Підтвердіть особу за посиланням:
            <span className="text-blue-600 underline ml-1">bit.ly/p24-security-check</span>
          </p>
        </div>
      ),
      warning: 'Зверніть увагу на скорочене посилання та терміновий тон повідомлення.'
    },
    {
      title: 'Підроблений сайт',
      desc: 'За посиланням відкривається сайт, який виглядає точнісінько як сторінка вашого банку.',
      visual: (
        <div className="bg-white w-full max-w-xs h-40 rounded-t-lg mx-auto overflow-hidden shadow-lg flex flex-col">
          <div className="bg-slate-100 p-1 flex items-center gap-2 border-b">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="bg-white px-2 py-0.5 rounded text-[8px] flex-grow text-slate-400">
              bit.ly/p24-security-check
            </div>
          </div>
          <div className="p-4 flex flex-col items-center flex-grow">
            <div className="text-green-600 font-bold mb-2">Privat24</div>
            <div className="w-full space-y-2">
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-6 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
      ),
      warning: 'Перевіряйте URL-адресу в рядку браузера. bit.ly — це не офіційний домен банку.'
    },
    {
      title: 'Крадіжка даних',
      desc: 'Як тільки ви введете логін та пароль, вони потрапляють до рук шахраїв.',
      visual: (
        <div className="bg-slate-900 border border-red-500/50 p-4 rounded-xl max-w-xs mx-auto">
          <div className="text-red-500 font-mono text-[10px] mb-2 flex items-center gap-2">
            <span className="animate-pulse">●</span> EXFILTRATING DATA...
          </div>
          <div className="text-slate-300 font-mono text-[10px] space-y-1">
            <div>{`{`}</div>
            <div className="pl-4 text-emerald-400">"login": "0671234567",</div>
            <div className="pl-4 text-emerald-400">"password": "CorrectHorse77!",</div>
            <div className="pl-4 text-emerald-400">"session_id": "8329-ax-99"</div>
            <div>{`}`}</div>
          </div>
        </div>
      ),
      warning: 'Ніколи не вводьте паролі на сайтах, у походженні яких ви не впевнені на 100%.'
    }
  ];

  return (
    <section id="demo" className="py-20 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Демонстрація вразливостей</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Краще один раз побачити, ніж сто разів почути. Ми підготували симуляцію типової фішингової атаки, щоб ви могли розпізнати її в реальному житті.
            </p>

            <div className="space-y-6">
              {phishSteps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    step === i
                      ? 'bg-blue-600/10 border-blue-500 shadow-lg shadow-blue-500/5'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      step === i ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'
                    }`}>
                      {i + 1}
                    </span>
                    <div>
                      <h4 className={`font-bold mb-1 ${step === i ? 'text-white' : 'text-slate-300'}`}>{s.title}</h4>
                      <p className="text-sm text-slate-500">{s.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Phone frame mockup */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10"></div>

              <div className="h-full flex flex-col justify-center px-4 bg-slate-950 relative">
                <div key={step} className="animate-in fade-in zoom-in duration-300">
                  {phishSteps[step].visual}

                  <div className="mt-12 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-amber-500 text-xs font-bold mb-1 flex items-center gap-1">
                      ⚠️ УВАГА
                    </div>
                    <p className="text-[11px] text-amber-200/80 leading-snug">
                      {phishSteps[step].warning}
                    </p>
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-800 rounded-full"></div>
            </div>

            {/* Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
