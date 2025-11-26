const benefits = [
  {
    emoji: '⏰',
    title: 'Больше времени для себя',
    description: 'Вместо 2 часов у плиты каждый день — 15 минут на разогрев. Остальное время — для семьи, отдыха, себя.',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Семья всегда сыта',
    description: 'В морозильнике всегда есть горячий ужин. Никто не ждёт, пока ты придёшь с работы и приготовишь.',
  },
  {
    emoji: '💰',
    title: 'Экономия бюджета',
    description: 'Покупаешь продукты оптом по акциям, готовишь порциями. Никаких «закажем доставку, готовить некогда».',
  },
  {
    emoji: '😌',
    title: 'Спокойствие каждый день',
    description: 'Забудь вопрос «что приготовить?». Открыла морозилку — выбрала — разогрела — накормила.',
  },
  {
    emoji: '😋',
    title: 'Вкус как свежее',
    description: 'Правильная заморозка сохраняет вкус. Гости не отличат, где свежее блюдо, а где из морозилки.',
  },
  {
    emoji: '❄️',
    title: 'Безопасно и полезно',
    description: 'Никаких консервантов и добавок. Только твоя домашняя еда, замороженная по правильной технологии.',
  },
];

export default function Benefits() {
  return (
    <section id="about" className="section-padding bg-[#FAF3EB] relative overflow-hidden">
      {/* Декор */}
      <div className="absolute top-10 left-10 text-5xl opacity-10">🥗</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">🍰</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white text-[rgb(133,14,53)] text-sm font-semibold mb-4">
            Почему это работает
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3229] mb-6">
            Заготовки — это не про скуку,<br />
            <span className="text-[rgb(133,14,53)]">это про свободу</span>
          </h2>
          <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
            Представь: ты приходишь домой уставшая, а ужин уже есть. Нужно просто разогреть.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(93,78,55,0.06)] hover:shadow-[0_10px_40px_rgba(93,78,55,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-5">{benefit.emoji}</div>
              <h3 className="text-xl font-bold text-[#3D3229] mb-3">{benefit.title}</h3>
              <p className="text-[#5D4E37] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Дополнительный блок */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(93,78,55,0.08)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#3D3229] mb-4">
                «Раньше я тратила на готовку 3 часа в день. Теперь — 20 минут»
              </h3>
              <p className="text-[#5D4E37] mb-6">
                Это не магия, это система. За 2 полных дня или 4 вечера ты заполнишь морозильник на целый месяц для семьи из 4 человек.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#FAF3EB] px-4 py-2 rounded-full">
                  <span>📅</span>
                  <span className="text-[#3D3229] font-medium">2 дня готовки</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EB] px-4 py-2 rounded-full">
                  <span>📦</span>
                  <span className="text-[#3D3229] font-medium">30 дней еды</span>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF3EB] rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-[rgb(133,14,53)]">90+</p>
                  <p className="text-[#5D4E37] text-sm">часов в месяц экономии</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[rgb(133,14,53)]">30%</p>
                  <p className="text-[#5D4E37] text-sm">экономия на продуктах</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
