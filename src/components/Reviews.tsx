'use client';

import { useState } from 'react';

const reviews = [
  {
    name: 'Айгерим',
    location: 'Алматы',
    emoji: '🧕',
    text: 'Курс перевернул моё понимание готовки! Раньше каждый вечер стояла у плиты по 2 часа, теперь ужин на столе за 10 минут. Дети в восторге от сырников — просят каждое утро.',
    highlight: 'ужин за 10 минут',
  },
  {
    name: 'Марина',
    location: 'Москва',
    emoji: '👩',
    text: 'Муж был скептически настроен к «еде из морозилки». После первого ужина спросил рецепт. Теперь сам помогает с заготовками по выходным. Болоньезе — наш фаворит!',
    highlight: 'муж помогает готовить',
  },
  {
    name: 'Динара',
    location: 'Астана',
    emoji: '👩‍🦰',
    text: 'С маленьким ребёнком это спасение. Пока малыш спит — разогрела и поела нормально. Больше не перекусываю печеньками на ходу. И муж приходит — ужин готов.',
    highlight: 'спасение для мамы',
  },
  {
    name: 'Жанна',
    location: 'Бишкек',
    emoji: '🧕',
    text: 'Живу за границей, переживала за продукты. Кирин помогла с заменами — всё получилось! Сырники из местного творога даже вкуснее вышли. Спасибо за индивидуальный подход.',
    highlight: 'помогла с заменами',
  },
  {
    name: 'Анна',
    location: 'Киев',
    emoji: '👱‍♀️',
    text: 'Свекровь сначала косо смотрела на мою заморозку. Угостила её пирогом с курицей и грибами — теперь просит научить. Техники реально работают, вкус не отличить.',
    highlight: 'свекровь в восторге',
  },
  {
    name: 'Гульнара',
    location: 'Ташкент',
    emoji: '👩',
    text: 'За 2 дня заполнила морозильник на месяц. Это была лучшая инвестиция времени! Теперь вечерами гуляю с детьми вместо готовки. Качество уроков на высоте.',
    highlight: 'месяц еды за 2 дня',
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews" className="section-padding bg-[#FFFBF7] relative">
      {/* Декор */}
      <div className="absolute top-20 right-20 text-6xl opacity-10">💬</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-10">❤️</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FAF3EB] text-[rgb(133,14,53)] text-sm font-semibold mb-4">
            Отзывы учениц
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3229] mb-6">
            Что говорят девочки,{' '}
            <span className="text-[rgb(133,14,53)]">прошедшие курс</span>
          </h2>
          <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
            Реальные истории от участниц первых двух потоков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(93,78,55,0.06)] hover:shadow-[0_10px_40px_rgba(93,78,55,0.1)] transition-all hover:-translate-y-1"
            >
              {/* Кавычка */}
              <div className="text-5xl text-[rgb(133,14,53)]/20 font-serif leading-none mb-2">"</div>

              {/* Текст */}
              <p className="text-[#3D3229] leading-relaxed mb-6">{review.text}</p>

              {/* Автор */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FAF3EB] flex items-center justify-center text-2xl">
                    {review.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-[#3D3229]">{review.name}</p>
                    <p className="text-sm text-[#5D4E37]">{review.location}</p>
                  </div>
                </div>

                {/* Метка */}
                <div className="px-3 py-1.5 rounded-full bg-[rgb(133,14,53)]/10 text-[rgb(133,14,53)] text-sm font-medium">
                  {review.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Показать ещё */}
        {!showAll && reviews.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[rgb(133,14,53)] font-semibold shadow-sm hover:shadow-md transition-all"
            >
              Показать ещё отзывы
              <span>↓</span>
            </button>
          </div>
        )}

        {/* Социальное доказательство */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(93,78,55,0.08)]">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start -space-x-3 mb-4">
                {['🧕', '👩', '👩‍🦰', '👱‍♀️', '🧕'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-[#FAF3EB] flex items-center justify-center text-xl border-2 border-white"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold text-[#3D3229]">1000+</p>
              <p className="text-[#5D4E37]">довольных учениц</p>
            </div>

            <div className="text-center border-y md:border-y-0 md:border-x border-[#E8C4A8]/30 py-8 md:py-0">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-2xl font-bold text-[#3D3229]">4.9</p>
              <p className="text-[#5D4E37]">средняя оценка</p>
            </div>

            <div className="text-center md:text-right">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-2xl font-bold text-[#3D3229]">98%</p>
              <p className="text-[#5D4E37]">рекомендуют подругам</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
