export default function Footer() {
  return (
    <footer className="bg-[#3D3229] text-white">
      {/* Финальный CTA */}
      <div className="bg-gradient-to-r from-[rgb(133,14,53)] to-[rgb(163,44,83)] py-16 relative overflow-hidden">
        {/* Декор */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">🍳</div>
        <div className="absolute bottom-10 right-10 text-5xl opacity-20">❄️</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Готова освободить свои вечера?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйся к 3 потоку и научись готовить так, чтобы оставалось время на жизнь
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[rgb(133,14,53)] font-bold text-lg hover:bg-[#FAF3EB] transition-colors"
          >
            Хочу на курс
            <span>✨</span>
          </a>
        </div>
      </div>

      {/* Основной футер */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Лого и описание */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍳</span>
                <span className="text-xl font-bold">Kelin.Academy</span>
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                Онлайн-академия кулинарии. Учим готовить вкусно, просто и с любовью к себе и близким.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span>📷</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span>✈️</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span>🎵</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span>▶️</span>
                </a>
              </div>
            </div>

            {/* Навигация */}
            <div>
              <h4 className="font-semibold mb-4">Курс</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#about" className="hover:text-white transition-colors">О курсе</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Программа</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Стоимость</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Вопросы</a></li>
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a href="mailto:hello@kelin.academy" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>📧</span> hello@kelin.academy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>💬</span> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>✈️</span> Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Нижняя часть */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Kelin.Academy. Сделано с ❤️ для хозяек
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
