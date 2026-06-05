import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Чи безпечно вводити дані банківської картки, підключившись до відкритого Wi-Fi у кафе?',
      options: ['Так, якщо сайт використовує HTTPS', 'Ні, це небезпечно', 'Тільки якщо ви в режимі "Інкогніто"'],
      correct: 1,
      explanation: 'Відкриті Wi-Fi мережі можуть бути перехоплені зловмисниками. Навіть HTTPS не дає 100% гарантії проти атак типу MITM (Man-in-the-Middle).'
    },
    {
      question: 'Що з цього є найнадійнішим методом двофакторної автентифікації?',
      options: ['SMS-код', 'E-mail підтвердження', 'Застосунок-автентифікатор (напр. Google Authenticator)'],
      correct: 2,
      explanation: 'Застосунки-автентифікатори генерують коди локально, що робить їх захищеними від перехоплення SMS через заміну SIM-карти (SIM-swapping).'
    },
    {
      question: 'Звідки найбезпечніше завантажувати застосунки на смартфон?',
      options: ['З офіційних магазинів (App Store, Play Store)', 'З форумів (напр. 4PDA, Reddit)', 'З будь-якого сайту, де є кнопка "Завантажити"'],
      correct: 0,
      explanation: 'Офіційні магазини перевіряють застосунки на наявність шкідливого коду перед публікацією.'
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return;

    setSelectedOption(index);
    const correct = index === questions[currentStep].correct;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <section id="quiz" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Перевір свої знання</h2>
          <p className="text-slate-400">Короткий тест на розуміння основ мобільної безпеки.</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl shadow-2xl">
          {!showResult ? (
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-blue-400 font-medium text-sm">Питання {currentStep + 1} з {questions.length}</span>
                <div className="h-1.5 w-32 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                {questions[currentStep].question}
              </h3>

              <div className="space-y-4 mb-8">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    disabled={selectedOption !== null}
                    className={`w-full p-5 rounded-xl border text-left transition-all ${
                      selectedOption === index
                        ? index === questions[currentStep].correct
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                          : 'bg-red-500/20 border-red-500 text-red-400'
                        : selectedOption !== null && index === questions[currentStep].correct
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                          : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option}</span>
                      {selectedOption === index && (
                        <span>{index === questions[currentStep].correct ? '✅' : '❌'}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selectedOption !== null && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-slate-300 text-sm mb-6">
                    <strong className="text-blue-400 block mb-1">Пояснення:</strong>
                    {questions[currentStep].explanation}
                  </div>
                  <button
                    onClick={nextQuestion}
                    className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    {currentStep === questions.length - 1 ? 'Результати' : 'Наступне питання'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-6">
                {score === questions.length ? '🏆' : score > 0 ? '👏' : '🤔'}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Твій результат: {score} з {questions.length}</h3>
              <p className="text-slate-400 mb-8">
                {score === questions.length
                  ? 'Чудово! Ви справжній експерт з мобільної безпеки.'
                  : 'Непогано, але є над чим працювати. Перегляньте навчальні матеріали вище.'}
              </p>
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Пройти ще раз
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
