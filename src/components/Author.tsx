export default function Author() {
  return (
    <section className="section-padding bg-[#FFFBF7] relative overflow-hidden">
      {/* Декор */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#E8C4A8]/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#E8D4D4]/30 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Фото автора */}
          <div className="relative">
            <div className="relative">
              {/* Основное фото */}
              <div className="aspect-[4/5] rounded-[3rem] bg-gradient-to-br from-[#FAF3EB] to-[#E8D4D4] overflow-hidden shadow-[0_10px_40px_rgba(93,78,55,0.15)]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-9xl mb-4">👩‍🍳</div>
                    <p className="text-[#5D4E37] font-medium">Фото автора курса</p>
                  </div>
                </div>
              </div>

              {/* Декоративные элементы */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">❤️</div>
                  <div>
                    <p className="font-bold text-[#3D3229]">3 года</p>
                    <p className="text-sm text-[#5D4E37]">практики заморозки</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-[rgb(133,14,53)] text-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold">1000+</p>
                  <p className="text-sm opacity-90">учениц</p>
                </div>
              </div>
            </div>
          </div>

          {/* Текст */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#FAF3EB] text-[rgb(133,14,53)] text-sm font-semibold mb-6">
              Привет! Я Кирин
            </span>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D3229] mb-6">
              Я научу тебя готовить так, чтобы оставалось время на жизнь
            </h2>

            <div className="space-y-4 text-lg text-[#5D4E37] leading-relaxed">
              <p>
                Три года назад я была такой же уставшей мамой, которая каждый вечер стояла у плиты. Завтрак, обед, ужин — и так по кругу. Я искала способ вырваться из этого цикла.
              </p>
              <p>
                Тогда я открыла для себя заморозку готовой еды. Не полуфабрикатов — а полноценных домашних блюд. Сырники, которые нужно просто разогреть. Борщ, который ждёт в морозилке. Пироги для гостей, готовые за 5 минут.
              </p>
              <p>
                <span className="font-semibold text-[#3D3229]">За 3 года я протестировала сотни рецептов</span> и отобрала те, что идеально переносят заморозку. Теперь я хочу поделиться этим с тобой.
              </p>
            </div>

            {/* Достижения */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#FAF3EB] rounded-2xl">
                <p className="text-2xl font-bold text-[rgb(133,14,53)]">2</p>
                <p className="text-sm text-[#5D4E37]">потока курса</p>
              </div>
              <div className="text-center p-4 bg-[#FAF3EB] rounded-2xl">
                <p className="text-2xl font-bold text-[rgb(133,14,53)]">30+</p>
                <p className="text-sm text-[#5D4E37]">проверенных рецептов</p>
              </div>
              <div className="text-center p-4 bg-[#FAF3EB] rounded-2xl">
                <p className="text-2xl font-bold text-[rgb(133,14,53)]">98%</p>
                <p className="text-sm text-[#5D4E37]">довольных учениц</p>
              </div>
            </div>

            {/* Цитата */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(93,78,55,0.08)] border-l-4 border-[rgb(133,14,53)]">
              <p className="text-[#3D3229] italic">
                «Моя миссия — помочь тебе освободить время для того, что действительно важно. Семья, отдых, хобби — всё это возможно, когда ужин уже готов»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
