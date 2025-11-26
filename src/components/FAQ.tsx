'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Подходит ли курс новичкам?',
    answer: 'Да — курс подходит и новичкам, и продвинутым. Новичкам — понятные пошаговые инструкции и объяснения каждой детали. Опытным — много новых техник и полезных фишек, которые упростят готовку.',
  },
  {
    question: 'У меня нет дополнительного морозильника',
    answer: 'Это не критично. На курсе вы сначала научитесь использовать морозильник своего обычного холодильника. А если позже захотите купить отдельный — вас ждёт подробный урок по выбору морозильной камеры.',
  },
  {
    question: 'У меня нет вакууматора',
    answer: 'Два года я пользовалась самым простым вакууматором за 2000 тенге — и этого было вполне достаточно. Но вообще, не все продукты требуют вакуумирования. Гораздо важнее иметь хорошую многоразовую посуду, чем дорогой вакууматор.',
  },
  {
    question: 'После разморозки еда будет не вкусная?',
    answer: 'Это частое сомнение. Но я уже три года практикую техники заморозки — и почти никто из гостей не отличает по вкусу, где свежая еда, а где заготовка. Отзывы, фото и видео от учениц говорят сами за себя.',
  },
  {
    question: 'Я живу не в СНГ, смогу ли найти продукты?',
    answer: 'У меня большой опыт работы с зарубежными ученицами. Я знаю, чем заменить продукты в разных странах. Чаще всего вопросы с сырниками и творогом — помогу подобрать аналоги. Главное — понимать состав и текстуру продуктов.',
  },
  {
    question: 'Мои дети не едят...',
    answer: 'Привередливость в еде — частая история. Но мои рецепты приятно удивят семью. По отзывам первого потока, даже дети, которые отказывались от супов, начали есть их с удовольствием. А те, кто не любил овощи, не замечали, как с аппетитом ели их в составе блюд.',
  },
  {
    question: 'Нет времени на обучение, у меня маленький ребёнок',
    answer: 'Понимаю — с маленьким ребёнком кажется, что ни на что не хватает времени. Но именно заготовки помогают разгрузить день. Начать можно с простых шагов. Всё готовится параллельно: поставили еду, перемешали — и спокойно к малышу.',
  },
  {
    question: 'Я живу с родителями мужа...',
    answer: 'Это частый вопрос. Понимаю — для старшего поколения заморозка что-то новое. Но когда у нас тысяча дел, готовить трижды в день — роскошь. Заготовки помогают разгрузить вас и радуют близких: в морозильнике всегда горячее блюдо или перекус.',
  },
  {
    question: 'Сколько времени уходит на заготовки?',
    answer: 'Чтобы заполнить морозильник на семью из четырёх человек, достаточно двух полных дней или четырёх вечеров. После этого — целый месяц без ежедневной готовки!',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[rgb(133,14,53)] text-white' : 'bg-gray-100 text-gray-600'}`}>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-[#f8f4f1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(133,14,53)] font-semibold text-sm uppercase tracking-wider">
            Вопросы и ответы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы о курсе
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Остались вопросы? Напишите нам — ответим в течение часа
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(133,14,53)] text-white font-semibold hover:bg-[rgb(103,4,33)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L2 22l5.71-.97A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.19c-.2.56-1.16 1.07-1.61 1.14-.42.06-.95.09-1.54-.1-.36-.12-.82-.28-1.42-.55-2.51-1.11-4.15-3.64-4.27-3.81-.12-.17-.99-1.31-.99-2.51s.62-1.78.85-2.02c.23-.24.5-.3.66-.3.16 0 .33 0 .47.01.15.01.36-.06.56.42.2.5.7 1.7.76 1.82.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.14z"/>
              </svg>
              Написать в WhatsApp
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[rgb(133,14,53)] text-[rgb(133,14,53)] font-semibold hover:bg-[rgb(133,14,53)] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
