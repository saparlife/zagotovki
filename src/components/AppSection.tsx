const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Всё по полочкам',
    description: 'У каждого блюда — технология приготовления, заморозки, разморозки и подачи. Всё структурировано для вашего удобства.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Рецепты под рукой',
    description: 'Не нужно искать в Telegram или скачивать файлы. Все рецепты и видео — в одном месте, доступны в любой момент.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Качество видео',
    description: 'Профессионально отснятые уроки по 7-15 минут — без воды, с вниманием к каждой детали.',
  },
];

export default function AppSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-[rgb(133,14,53)] font-semibold text-sm uppercase tracking-wider">
              Обучение в приложении
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Kelin.Academy
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Удобная платформа для обучения — смотрите уроки с любого устройства, сохраняйте прогресс и возвращайтесь к рецептам в любой момент.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(133,14,53)]/10 flex items-center justify-center text-[rgb(133,14,53)] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* App mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(133,14,53)]/20 to-[rgb(133,14,53)]/5 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-[rgb(133,14,53)] to-[rgb(103,4,33)] rounded-3xl p-8 md:p-12">
              {/* Phone mockup */}
              <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl max-w-[280px] mx-auto">
                <div className="bg-gray-100 rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-white px-6 py-2 flex justify-between items-center text-xs text-gray-600">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3c-1.5 0-3 .5-4.2 1.4L2 12l5.8 7.6C9 20.5 10.5 21 12 21s3-.5 4.2-1.4L22 12l-5.8-7.6C15 3.5 13.5 3 12 3z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 17h2v4H2v-4zm4-5h2v9H6v-9zm4-4h2v13h-2V8zm4-3h2v16h-2V5zm4 2h2v14h-2V7z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
                      </svg>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="bg-white p-4">
                    <div className="text-center mb-4">
                      <span className="text-[rgb(133,14,53)] font-bold text-lg">Kelin.Academy</span>
                    </div>

                    {/* Course card */}
                    <div className="bg-gradient-to-br from-[#fff8f5] to-white rounded-xl p-4 mb-4 border border-gray-100">
                      <div className="w-full h-24 bg-[rgb(133,14,53)]/10 rounded-lg mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[rgb(133,14,53)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">Курс «Заготовки»</p>
                      <p className="text-gray-500 text-xs mt-1">7 модулей • 30+ уроков</p>
                      <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[rgb(133,14,53)] h-full w-1/3 rounded-full" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">33% пройдено</p>
                    </div>

                    {/* Modules preview */}
                    <div className="space-y-2">
                      {['База знаний', 'Завтраки', 'Ужины'].map((module, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${index === 0 ? 'bg-green-100' : 'bg-gray-100'}`}>
                            {index === 0 ? (
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="text-xs font-semibold text-gray-400">{index + 1}</span>
                            )}
                          </div>
                          <span className="text-sm text-gray-700">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
