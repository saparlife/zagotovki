'use client';

import { useState } from 'react';

interface ModuleData {
  id: string;
  title: string;
  emoji: string;
  description: string;
  lessons: string[];
}

const modules: ModuleData[] = [
  {
    id: 'base',
    title: 'База знаний',
    emoji: '📚',
    description: 'Всё о заморозке: от выбора посуды до правильного хранения',
    lessons: [
      'Технология заморозки — как сохранить вкус',
      'Технология разморозки — без потери качества',
      'Какой инвентарь нужен (и на чём можно сэкономить)',
      'Безопасная посуда для заморозки',
      'Как выбирать продукты по составу',
      'Где покупать выгодно — ссылки и лайфхаки',
    ],
  },
  {
    id: 'breakfast',
    title: 'Завтраки',
    emoji: '🍳',
    description: 'Утро без суеты — разогрел и накормил всю семью',
    lessons: [
      'Томатная основа для шакшуки',
      'Нежная курица пастрами',
      'Сырники классические',
      'Сырники маковые',
      'Сырники с зеленью',
      'Вафли классические',
      'Вафли с творогом',
      'Вафли с кабачком',
    ],
  },
  {
    id: 'dinner',
    title: 'Ужины',
    emoji: '🍖',
    description: 'Сытные ужины для всей семьи — без часов у плиты',
    lessons: [
      'Универсальное жареное мясо',
      'Томлёное тающее мясо',
      'Зажарка для плова',
      'Настоящий соус болоньезе',
    ],
  },
  {
    id: 'soups',
    title: 'Супы',
    emoji: '🍲',
    description: 'Горячий суп за 10 минут — мечта любой хозяйки',
    lessons: [
      'Прозрачный куриный бульон',
      'Янтарный мясной бульон',
      'Зажарка для борща',
      'Домашняя яичная лапша',
    ],
  },
  {
    id: 'pies',
    title: 'Пироги',
    emoji: '🥧',
    description: 'Гости на пороге? Пирог готов через 5 минут',
    lessons: [
      'Универсальная песочная основа',
      'Мясной пирог с картошкой',
      'Пирог с курицей и грибами',
      'Яблочный пирог с миндалем',
      'Грушевый пирог',
      'Ягодный пирог',
    ],
  },
  {
    id: 'sides',
    title: 'Гарниры и соусы',
    emoji: '🍚',
    description: 'Идеальное дополнение к любому блюду',
    lessons: [
      'Рассыпчатый рис',
      'Воздушное картофельное пюре',
      'Хрустящие брокколи',
      'Сливочный соус с грибами',
      'Соус карри с хрустящим луком',
    ],
  },
  {
    id: 'bonus',
    title: 'Бонусы',
    emoji: '🎁',
    description: 'Дополнительные материалы для твоего удобства',
    lessons: [
      'Готовое меню на месяц',
      'Как собирать тарелки из заготовок',
      'Красивая подача и сервировка',
      'Чат с поддержкой и обратной связью',
    ],
  },
];

export default function Program() {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section id="program" className="section-padding bg-[#FFFBF7] relative">
      {/* Волна сверху */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="#FAF3EB"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FAF3EB] text-[rgb(133,14,53)] text-sm font-semibold mb-4">
            Программа курса
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3229] mb-6">
            7 модулей, 30+ рецептов —{' '}
            <span className="text-[rgb(133,14,53)]">всё что нужно</span>
          </h2>
          <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
            От базовых знаний до готового меню на месяц. Каждый урок — пошаговая инструкция с видео.
          </p>
        </div>

        {/* Табы модулей */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                activeModule === module.id
                  ? 'bg-[rgb(133,14,53)] text-white shadow-lg scale-105'
                  : 'bg-white text-[#5D4E37] hover:bg-[#FAF3EB] shadow-sm'
              }`}
            >
              <span className="text-xl">{module.emoji}</span>
              <span className="hidden sm:inline">{module.title}</span>
            </button>
          ))}
        </div>

        {/* Контент модуля */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Карусель изображений */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(93,78,55,0.08)] sticky top-24">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FAF3EB] to-[#E8D4D4]/50 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-8xl mb-4">{currentModule.emoji}</div>
                  <p className="text-[#5D4E37] font-medium px-4">{currentModule.description}</p>
                </div>
              </div>

              {/* Индикатор фото */}
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[rgb(133,14,53)] w-6' : 'bg-[#E8C4A8]'}`}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-[#C9A66B] mt-2">
                Здесь будут фото блюд
              </p>
            </div>
          </div>

          {/* Список уроков */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(93,78,55,0.08)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#FAF3EB] flex items-center justify-center text-4xl">
                  {currentModule.emoji}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3D3229]">{currentModule.title}</h3>
                  <p className="text-[#5D4E37]">{currentModule.lessons.length} уроков</p>
                </div>
              </div>

              <div className="space-y-3">
                {currentModule.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF3EB]/50 hover:bg-[#FAF3EB] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[rgb(133,14,53)] font-bold shadow-sm">
                      {index + 1}
                    </div>
                    <span className="text-[#3D3229] font-medium">{lesson}</span>
                  </div>
                ))}
              </div>

              {currentModule.id === 'bonus' && (
                <div className="mt-6 p-4 bg-[rgb(133,14,53)]/5 rounded-2xl border border-[rgb(133,14,53)]/10">
                  <p className="text-[rgb(133,14,53)] font-medium flex items-center gap-2">
                    <span>🎁</span>
                    Бонусы доступны всем участникам курса
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: '📚', number: '7', label: 'модулей' },
            { emoji: '🎬', number: '30+', label: 'видео-уроков' },
            { emoji: '⏱', number: '7-15', label: 'минут урок' },
            { emoji: '📅', number: '1 год', label: 'доступа' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(93,78,55,0.06)]">
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-2xl md:text-3xl font-bold text-[rgb(133,14,53)]">{stat.number}</div>
              <div className="text-[#5D4E37]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
