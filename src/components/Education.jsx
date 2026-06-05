import React from 'react';

const Education = () => {
  const topics = [
    {
      id: 'data',
      title: 'Захист персональних даних',
      icon: '👤',
      content: 'Ваші дані — це валюта. Використовуйте шифрування, обмежуйте доступ застосунків до контактів та геолокації. Регулярно перевіряйте дозволи у налаштуваннях приватності.',
      color: 'blue'
    },
    {
      id: 'wifi',
      title: 'Безпека публічних Wi-Fi',
      icon: '🌐',
      content: 'Публічні мережі часто не зашифровані. Уникайте входу в банкінг через відкритий Wi-Fi. Завжди використовуйте VPN у кафе, аеропортах чи готелях.',
      color: 'cyan'
    },
    {
      id: 'antivirus',
      title: 'Антивіруси та ПЗ',
      icon: '🛡️',
      content: 'Для Android антивірус може бути корисним, для iOS — менш актуально, але важливо оновлювати ОС. Встановлюйте застосунки лише з офіційних магазинів (App Store / Play Store).',
      color: 'indigo'
    },
    {
      id: '2fa',
      title: 'Двофакторна автентифікація (2FA)',
      icon: '🔑',
      content: 'Пароля вже недостатньо. Увімкніть 2FA всюди, де це можливо: через SMS, а краще через застосунки-автентифікатори (Google Authenticator, Authy).',
      color: 'purple'
    },
    {
      id: 'ios-android',
      title: 'iOS vs Android: Що безпечніше?',
      icon: '⚖️',
      content: 'iOS відома своєю закритою екосистемою та швидкими оновленнями. Android пропонує гнучкість, але потребує більше уваги до безпеки з боку користувача.',
      color: 'emerald'
    }
  ];

  return (
    <section id="edu" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Навчальний центр</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Основи мобільної гігієни, які допоможуть вам почуватися безпечно в мережі.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{topic.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {topic.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
