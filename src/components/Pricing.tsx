const included = [
  'База знаний по заморозке',
  '7 модулей с видеоуроками',
  '30+ рецептов с пошаговыми инструкциями',
  'Техники разморозки для каждого блюда',
  'Готовое меню на месяц',
  'Сбор тарелок и подача блюд',
  'Обратная связь в чате',
  'Доступ на 1 год',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(133,14,53)] font-semibold text-sm uppercase tracking-wider">
            Стоимость участия
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Инвестиция в вашу свободу
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Один раз научиться — экономить время каждый день
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(133,14,53)] text-white font-semibold text-sm shadow-lg">
                3 поток — старт 10 октября
              </span>
            </div>

            <div className="bg-gradient-to-br from-white to-[#fff8f5] rounded-3xl p-8 md:p-10 shadow-2xl border border-[rgb(133,14,53)]/10">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-gray-400 line-through">50 990 ₸</span>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                    -31%
                  </span>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-[rgb(133,14,53)]">
                  34 990 ₸
                </div>
                <p className="text-gray-500 mt-3">
                  5600 сом • 5300 ₽ • 67$
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[rgb(133,14,53)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="block w-full py-4 px-8 rounded-full text-white font-bold text-lg text-center transition-all duration-300 hover:scale-105 animate-pulse-glow"
                style={{ backgroundColor: 'rgb(133, 14, 53)' }}
              >
                Присоединиться к 3 потоку
              </a>

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Безопасная оплата • Поддержка 24/7</span>
              </div>
            </div>
          </div>

          {/* Value proposition */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '~175₸', label: 'в день за год доступа' },
              { value: '2+ часа', label: 'экономии времени каждый день' },
              { value: '30+', label: 'рецептов для всей семьи' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-2xl font-bold text-[rgb(133,14,53)]">{item.value}</div>
                <div className="text-gray-600 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
