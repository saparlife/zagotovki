'use client';

import { useState } from 'react';

interface ModuleData {
  id: string;
  title: string;
  icon: React.ReactNode;
  lessons: string[];
  images: string[];
}

const modules: ModuleData[] = [
  {
    id: 'base',
    title: 'База знаний',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    lessons: [
      'Технология заморозки',
      'Технология разморозки',
      'Разбор инвентаря',
      'Разбор безопасной посуды',
      'Разбор продуктов по составу',
      'Ссылки и экономия при закупе',
    ],
    images: ['/images/base-1.jpg', '/images/base-2.jpg', '/images/base-3.jpg'],
  },
  {
    id: 'breakfast',
    title: 'Завтраки',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    lessons: [
      'Томатная основа шакшуки',
      'Курица пастрами',
      'Сырники классические',
      'Сырники маковые',
      'Сырники с зеленью',
      'Вафли классические',
      'Вафли с творогом',
      'Вафли с кабачком',
    ],
    images: ['/images/breakfast-1.jpg', '/images/breakfast-2.jpg', '/images/breakfast-3.jpg', '/images/breakfast-4.jpg'],
  },
  {
    id: 'dinner',
    title: 'Ужины',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    lessons: [
      'Универсальное жареное мясо',
      'Томлёное тающее мясо',
      'Зажарка плова',
      'Соус болоньезе',
    ],
    images: ['/images/dinner-1.jpg', '/images/dinner-2.jpg', '/images/dinner-3.jpg', '/images/dinner-4.jpg'],
  },
  {
    id: 'soups',
    title: 'Супы',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    lessons: [
      'Прозрачный куриный бульон',
      'Янтарный мясной бульон',
      'Зажарка борща',
      'Яичная лапша из цельнозерновой муки',
    ],
    images: ['/images/soups-1.jpg', '/images/soups-2.jpg', '/images/soups-3.jpg', '/images/soups-4.jpg'],
  },
  {
    id: 'pies',
    title: 'Пироги',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    lessons: [
      'Универсальная песочная основа',
      'Мясной пирог с картошкой',
      'Пирог с курицей и грибами',
      'Яблочный пирог с миндалем',
      'Грушевый пирог',
      'Ягодный пирог',
    ],
    images: ['/images/pies-1.jpg', '/images/pies-2.jpg', '/images/pies-3.jpg', '/images/pies-4.jpg'],
  },
  {
    id: 'sides',
    title: 'Гарниры и соусы',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    lessons: [
      'Рассыпчатый рис',
      'Воздушное картофельное пюре',
      'Хрустящие брокколи',
      'Сливочный соус с грибами',
      'Соус карри с хрустящим луком',
    ],
    images: ['/images/sides-1.jpg', '/images/sides-2.jpg', '/images/sides-3.jpg', '/images/sides-4.jpg'],
  },
  {
    id: 'bonus',
    title: 'Бонус',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    lessons: [
      'Готовое меню на месяц',
      'Сбор тарелок из заготовок',
      'Подача и сервировка блюд',
      'Обратная связь в чате',
    ],
    images: ['/images/bonus-1.jpg', '/images/bonus-2.jpg', '/images/bonus-3.jpg'],
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-video bg-gradient-to-br from-[rgb(133,14,53)]/20 to-[rgb(133,14,53)]/5 rounded-xl overflow-hidden flex items-center justify-center">
        {/* Placeholder for actual images */}
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgb(133,14,53)]/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-[rgb(133,14,53)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">Фото {currentIndex + 1} из {images.length}</p>
          <p className="text-gray-400 text-xs mt-1">{title}</p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all"
        aria-label="Previous"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all"
        aria-label="Next"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-[rgb(133,14,53)] w-6' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Program() {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-white to-[#f8f4f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(133,14,53)] font-semibold text-sm uppercase tracking-wider">
            Программа курса
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            7 модулей и 30+ уроков
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Пошаговые инструкции от базы до готового меню на месяц
          </p>
        </div>

        {/* Module tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all ${
                activeModule === module.id
                  ? 'bg-[rgb(133,14,53)] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {module.icon}
              <span className="hidden sm:inline">{module.title}</span>
            </button>
          ))}
        </div>

        {/* Module content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Carousel */}
          <div>
            <ImageCarousel images={currentModule.images} title={currentModule.title} />
          </div>

          {/* Lessons list */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[rgb(133,14,53)]/10 flex items-center justify-center text-[rgb(133,14,53)]">
                {currentModule.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{currentModule.title}</h3>
            </div>

            <ul className="space-y-3">
              {currentModule.lessons.map((lesson, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[rgb(133,14,53)]/10 text-[rgb(133,14,53)] flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{lesson}</span>
                </li>
              ))}
            </ul>

            {currentModule.id === 'bonus' && (
              <div className="mt-6 p-4 bg-[rgb(133,14,53)]/5 rounded-xl">
                <p className="text-[rgb(133,14,53)] font-medium text-sm">
                  Бонусный модуль доступен всем участникам курса
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '7', label: 'модулей' },
            { number: '30+', label: 'рецептов' },
            { number: '7-15', label: 'минут урок' },
            { number: '1', label: 'год доступа' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[rgb(133,14,53)]">{stat.number}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
