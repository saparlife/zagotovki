export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FFFBF7]">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#E8C4A8]/30 blob animate-float" />
      <div className="absolute bottom-40 left-0 w-48 h-48 bg-[#E8D4D4]/40 blob-2" />
      <div className="absolute top-1/3 right-1/4 text-6xl opacity-20 animate-wiggle">🥧</div>
      <div className="absolute bottom-1/4 left-1/6 text-5xl opacity-20 animate-float">🍲</div>
      <div className="absolute top-1/2 right-10 text-4xl opacity-15">❄️</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть — текст */}
          <div className="text-center lg:text-left">
            {/* Метка */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF3EB] text-[#5D4E37] text-sm font-medium mb-6">
              <span>🗓</span>
              <span>Старт 3 потока — 10 октября</span>
            </div>

            {/* Заголовок */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3D3229] mb-6 leading-tight">
              Готовь с любовью,{' '}
              <span className="text-[rgb(133,14,53)]">живи без суеты</span>
            </h1>

            {/* Подзаголовок */}
            <p className="text-xl text-[#5D4E37] mb-8 leading-relaxed">
              Научись готовить наперёд так, чтобы каждый вечер на столе была{' '}
              <span className="font-semibold">домашняя еда</span> — без часов у плиты
            </p>

            {/* Главное обещание */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(93,78,55,0.08)] mb-8 inline-block">
              <p className="text-lg text-[#3D3229]">
                <span className="text-3xl font-bold text-[rgb(133,14,53)]">5 минут</span>
                <span className="mx-2">—</span>
                и полноценный ужин на столе
              </p>
              <p className="text-[#5D4E37] mt-1">Без полуфабрикатов. Только твоя домашняя кухня.</p>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#pricing" className="btn-primary text-lg">
                Хочу на курс
                <span>✨</span>
              </a>
              <a href="#program" className="btn-secondary text-lg">
                Посмотреть программу
              </a>
            </div>

            {/* Социальное доказательство — мягкое */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {['🧕', '👩', '👩‍🦰', '👱‍♀️'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#FAF3EB] flex items-center justify-center text-lg border-2 border-white"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-[#5D4E37] text-sm">
                <span className="font-semibold">1000+ хозяек</span> уже прошли курс
              </p>
            </div>
          </div>

          {/* Правая часть — визуал */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#FAF3EB] to-[#E8D4D4]/50 rounded-[3rem] p-8 lg:p-12">
              {/* Главное изображение-плейсхолдер */}
              <div className="aspect-square rounded-3xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🍽️</div>
                  <p className="text-[#5D4E37] font-medium">Твой морозильник — твой помощник</p>
                  <p className="text-[#C9A66B] text-sm mt-2">Фото готовых блюд</p>
                </div>
              </div>

              {/* Плавающие карточки */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🥟</span>
                  <div>
                    <p className="font-semibold text-[#3D3229]">Пельмени</p>
                    <p className="text-sm text-[#5D4E37]">на 2 месяца</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🍲</span>
                  <div>
                    <p className="font-semibold text-[#3D3229]">Борщ</p>
                    <p className="text-sm text-[#5D4E37]">разогрей и ешь</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-[rgb(133,14,53)] text-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <p className="text-2xl font-bold">30+</p>
                  <p className="text-sm opacity-90">рецептов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Волна внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="#FAF3EB"/>
        </svg>
      </div>
    </section>
  );
}
