const included = [
  { emoji: '📚', text: 'База знаний по заморозке' },
  { emoji: '🎬', text: '7 модулей с видео-уроками' },
  { emoji: '📝', text: '30+ рецептов с пошаговыми инструкциями' },
  { emoji: '❄️', text: 'Техники разморозки для каждого блюда' },
  { emoji: '📅', text: 'Готовое меню на месяц' },
  { emoji: '🍽', text: 'Сбор тарелок и красивая подача' },
  { emoji: '💬', text: 'Чат с поддержкой и обратной связью' },
  { emoji: '🗓', text: 'Доступ на целый год' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#FAF3EB] relative overflow-hidden">
      {/* Декор */}
      <div className="absolute top-20 left-10 text-6xl opacity-10">💳</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-10">✨</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-white text-[rgb(133,14,53)] text-sm font-semibold mb-4">
            Стоимость курса
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3229] mb-6">
            Инвестиция в твоё{' '}
            <span className="text-[rgb(133,14,53)]">свободное время</span>
          </h2>
          <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
            Один раз научиться — экономить время каждый день целый год
          </p>
        </div>

        {/* Карточка цены */}
        <div className="relative">
          {/* Метка */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[rgb(133,14,53)] text-white font-semibold shadow-lg">
              <span>🎉</span>
              3 поток — старт 10 октября
            </span>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(93,78,55,0.1)] border border-[#E8C4A8]/20">
            {/* Цена */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-2xl text-[#C9A66B] line-through">50 990 ₸</span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  -31%
                </span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-[rgb(133,14,53)] mb-2">
                34 990 ₸
              </div>
              <p className="text-[#5D4E37]">
                5 600 сом • 5 300 ₽ • 67$
              </p>
            </div>

            {/* Что входит */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF3EB]/50">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-[#3D3229]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[rgb(133,14,53)] text-white font-bold text-xl shadow-lg hover:bg-[rgb(163,44,83)] transition-all hover:scale-105"
              >
                <span>Хочу на курс</span>
                <span>→</span>
              </a>

              <p className="mt-6 text-[#5D4E37] flex items-center justify-center gap-2">
                <span>🔒</span>
                Безопасная оплата • Поддержка 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Дополнительная мотивация */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl mb-3">💡</div>
            <p className="text-2xl font-bold text-[rgb(133,14,53)]">~96 ₸</p>
            <p className="text-[#5D4E37]">в день за год доступа</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl mb-3">⏰</div>
            <p className="text-2xl font-bold text-[rgb(133,14,53)]">90+ часов</p>
            <p className="text-[#5D4E37]">экономии в месяц</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl mb-3">❤️</div>
            <p className="text-2xl font-bold text-[rgb(133,14,53)]">∞</p>
            <p className="text-[#5D4E37]">вечеров с семьёй</p>
          </div>
        </div>
      </div>
    </section>
  );
}
