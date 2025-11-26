'use client';

import { useState } from 'react';

const reviews = [
  {
    name: 'Айгерим',
    location: 'Алматы',
    avatar: 'А',
    text: 'Курс перевернул мое понимание готовки! Раньше каждый вечер стояла у плиты по 2 часа, теперь ужин на столе за 10 минут. Дети в восторге от сырников — просят каждое утро.',
    highlight: 'ужин на столе за 10 минут',
  },
  {
    name: 'Марина',
    location: 'Москва',
    avatar: 'М',
    text: 'Муж был скептически настроен к «еде из морозилки». После первого ужина спросил рецепт. Теперь сам помогает с заготовками по выходным. Болоньезе — наш фаворит!',
    highlight: 'муж помогает с заготовками',
  },
  {
    name: 'Динара',
    location: 'Астана',
    avatar: 'Д',
    text: 'С маленьким ребенком это спасение. Пока малыш спит — разогрела и поела нормально. Больше не перекусываю печеньками на ходу. И муж приходит — ужин готов.',
    highlight: 'с маленьким ребенком это спасение',
  },
  {
    name: 'Жанна',
    location: 'Бишкек',
    avatar: 'Ж',
    text: 'Живу за границей, переживала про продукты. Кирин помогла с заменами — всё получилось! Сырники из местного творога даже вкуснее вышли. Спасибо за индивидуальный подход.',
    highlight: 'помогла с заменами продуктов',
  },
  {
    name: 'Анна',
    location: 'Киев',
    avatar: 'А',
    text: 'Свекровь сначала косо смотрела на мою заморозку. Угостила её пирогом с курицей и грибами — теперь просит научить. Техники реально работают, вкус не отличить.',
    highlight: 'свекровь просит научить',
  },
  {
    name: 'Гульнара',
    location: 'Ташкент',
    avatar: 'Г',
    text: 'За 2 дня заполнила морозильник на месяц. Это была лучшая инвестиция времени! Теперь вечерами гуляю с детьми вместо готовки. Качество уроков на высоте.',
    highlight: 'за 2 дня — запас на месяц',
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#f8f4f1] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(133,14,53)] font-semibold text-sm uppercase tracking-wider">
            Отзывы учениц
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Что говорят о курсе
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные истории от участниц первых двух потоков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(133,14,53)] to-[rgb(163,44,83)] flex items-center justify-center text-white font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-4">{review.text}</p>

              {/* Highlight */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[rgb(133,14,53)]/10 text-[rgb(133,14,53)] text-sm font-medium">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {review.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        {!showAll && reviews.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[rgb(133,14,53)] text-[rgb(133,14,53)] font-semibold hover:bg-[rgb(133,14,53)] hover:text-white transition-all"
            >
              Показать ещё отзывы
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white shadow-lg">
            <div className="flex -space-x-3">
              {['А', 'М', 'Д', 'Ж'].map((letter, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(133,14,53)] to-[rgb(163,44,83)] flex items-center justify-center text-white font-bold text-sm border-2 border-white"
                >
                  {letter}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-white">
                +996
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">1000+ учениц</p>
              <p className="text-gray-500 text-sm">прошли курс за 2 потока</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
