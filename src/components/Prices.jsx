const DIKIDI_URL = "https://dikidi.ru/2042116?p=0.pi";

const CATEGORIES = [
  {
    id: "brows",
    title: "Брови",
    services: [
      {
        name: "Пудровое напыление бровей",
        description: "Мягкая теневая растушевка, подбор формы под ваш тип лица",
      },
      {
        name: "Мягкая графика",
        description:
          "Сочетает четкость формы с эффектом легкой дымки. Нижняя граница и хвостик брови делаются более оформленными, а верхняя линия и основание плавно растушевываются, создавая аккуратный вид без жестких «рисованных» линий",
      },
    ],
  },
  {
    id: "lips",
    title: "Губы",
    services: [
      {
        name: "Акварельная техника",
        description: "Воздушные полупрозрачные пигменты, лёгкая коррекция формы",
      },
    ],
  },
];

function ServiceRow({ service }) {
  return (
    <li className="flex flex-col gap-3 border-b border-stone-100 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-medium text-stone-800">{service.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-500">{service.description}</p>
      </div>

      <a
        href={DIKIDI_URL}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex shrink-0 items-center gap-2 self-start py-2 -my-2 text-xs uppercase tracking-wider font-medium text-stone-600 hover:text-rose-600 transition-colors duration-300 sm:self-auto"
      >
        <span className="relative">
          Записаться онлайн
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-1 block h-px w-0 bg-rose-400 transition-all duration-300 group-hover:w-full"
          />
        </span>
        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </li>
  );
}

export default function Prices() {
  return (
    <section aria-labelledby="prices-heading" className="w-full max-w-3xl mx-auto">
      <h2 id="prices-heading" className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 text-center">
        Услуги и цены
      </h2>
      <p className="mt-2 text-center text-sm text-stone-500">
        Стоимость зависит от выбранной техники — выберите услугу и время онлайн
      </p>

      <div className="mt-10 space-y-12">
        {CATEGORIES.map((category) => (
          <div key={category.id}>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-stone-900 border-b border-stone-200 pb-3">
              {category.title}
            </h3>
            <ul>
              {category.services.map((service) => (
                <ServiceRow key={service.name} service={service} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
