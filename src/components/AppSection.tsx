export default function AppSection() {
  return (
    <section className="section-padding bg-[#FAF3EB] relative overflow-hidden">
      {/* Декор */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">📱</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-10">🎬</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Телефон */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto">
              {/* Фон */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(133,14,53)]/20 to-[#E8D4D4]/50 rounded-[3rem] blur-2xl" />

              {/* Телефон */}
              <div className="relative bg-[#3D3229] rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Контент приложения */}
                  <div className="p-6">
                    {/* Шапка */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🍳</span>
                        <span className="font-bold text-[#3D3229]">Kelin.Academy</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#FAF3EB]" />
                    </div>

                    {/* Карточка курса */}
                    <div className="bg-gradient-to-br from-[#FAF3EB] to-white rounded-2xl p-4 mb-4 border border-[#E8C4A8]/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[rgb(133,14,53)]/10 flex items-center justify-center text-2xl">
                          ❄️
                        </div>
                        <div>
                          <p className="font-bold text-[#3D3229]">Курс «Заготовки»</p>
                          <p className="text-sm text-[#5D4E37]">7 модулей</p>
                        </div>
                      </div>
                      <div className="bg-[#E8C4A8]/30 rounded-full h-2 mb-2">
                        <div className="bg-[rgb(133,14,53)] h-full w-2/3 rounded-full" />
                      </div>
                      <p className="text-xs text-[#5D4E37]">67% пройдено</p>
                    </div>

                    {/* Список уроков */}
                    <p className="text-sm font-semibold text-[#5D4E37] mb-3">Продолжить обучение</p>
                    {[
                      { emoji: '🍳', title: 'Сырники классические', time: '12 мин', done: true },
                      { emoji: '🥧', title: 'Песочная основа', time: '8 мин', done: false },
                      { emoji: '🍖', title: 'Жареное мясо', time: '15 мин', done: false },
                    ].map((lesson, i) => (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-xl mb-2 ${lesson.done ? 'bg-green-50' : 'bg-[#FAF3EB]'}`}>
                        <span className="text-xl">{lesson.emoji}</span>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${lesson.done ? 'text-green-700' : 'text-[#3D3229]'}`}>{lesson.title}</p>
                          <p className="text-xs text-[#5D4E37]">{lesson.time}</p>
                        </div>
                        {lesson.done ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-[rgb(133,14,53)]">▶</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Плавающие элементы */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <p className="text-sm font-bold text-[#3D3229]">HD видео</p>
                    <p className="text-xs text-[#5D4E37]">без воды</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Текст */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-white text-[rgb(133,14,53)] text-sm font-semibold mb-6">
              Удобное обучение
            </span>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D3229] mb-6">
              Все уроки —{' '}
              <span className="text-[rgb(133,14,53)]">в одном месте</span>
            </h2>

            <p className="text-xl text-[#5D4E37] mb-8">
              Смотри с телефона, планшета или компьютера. Рецепты всегда под рукой — не нужно искать в чатах или скачивать файлы.
            </p>

            <div className="space-y-6">
              {[
                {
                  emoji: '📱',
                  title: 'Всё в одном приложении',
                  text: 'Видео, рецепты, инструкции — открыла и готовишь',
                },
                {
                  emoji: '🎬',
                  title: 'Качественное видео',
                  text: '7-15 минут на урок, без воды, с деталями',
                },
                {
                  emoji: '📋',
                  title: 'Пошаговые инструкции',
                  text: 'Приготовление, заморозка, разморозка, подача',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3D3229] mb-1">{item.title}</h3>
                    <p className="text-[#5D4E37]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
