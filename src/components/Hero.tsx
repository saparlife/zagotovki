export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff8f5] via-white to-[#f8f4f1]">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(133,14,53)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(133,14,53)]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(133,14,53)]/10 text-[rgb(133,14,53)] font-medium text-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-[rgb(133,14,53)] rounded-full mr-2 animate-pulse" />
            Старт 3 потока — 10 октября
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Курс{' '}
            <span className="gradient-text">«Заготовки»</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Как готовить наперёд и упрощать себе жизнь
          </p>

          <p className="text-lg text-gray-500 mb-8">
            2 недели интенсива • 7 модулей • 30+ рецептов
          </p>

          {/* Value proposition */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto mb-10 card-hover">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Собрать полноценный завтрак или ужин за{' '}
              <span className="text-[rgb(133,14,53)]">5 минут</span> — реально!
            </p>
            <p className="text-gray-600 text-lg">
              Научитесь замораживать готовую еду, которая не требует доготовки. И это{' '}
              <span className="font-semibold">не полуфабрикаты</span> — полноценные домашние блюда.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              style={{ backgroundColor: 'rgb(133, 14, 53)' }}
            >
              Занять место на курсе
            </a>
            <a
              href="#program"
              className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[rgb(133,14,53)] text-[rgb(133,14,53)] font-bold text-lg transition-all duration-300 hover:bg-[rgb(133,14,53)] hover:text-white"
            >
              Смотреть программу
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[rgb(133,14,53)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1000+ учеников</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[rgb(133,14,53)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>3 года практики</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[rgb(133,14,53)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Доступ 1 год</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
