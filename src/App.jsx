import React, { useEffect, useState } from "react";
import BeforeAfter from "./components/BeforeAfter";
import Prices from "./components/Prices";
import FooterContacts from "./components/FooterContacts";
import Logo from "./components/Logo";

import browsBeforeMain from "./assets/brows-before-main.jpg";
import browsAfterMain from "./assets/brows-after-main.jpg";
import lipsBeforeMain from "./assets/lips-before-main.jpg";
import lipsAfterMain from "./assets/lips-after-main.jpg";

function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокируем скролл фона и закрываем окно по Escape
  useEffect(() => {
    if (!isPortfolioOpen) return;
    document.body.classList.add("overflow-hidden");
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsPortfolioOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPortfolioOpen]);

  // Закрываем мобильное меню по Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    // Главный премиальный фон для всего сайта
    <div className="min-h-screen bg-rose-200/50 text-stone-800 to-white text-stone-800 antialiased selection:bg-rose-200">
      {/* 1. ШАПКА САЙТА (HEADER) — фиксированная, со стеклянным эффектом */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/70 backdrop-blur-md border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.15em] font-medium text-stone-600">
            <button
              type="button"
              onClick={() => setIsPortfolioOpen(true)}
              className="relative bg-transparent border-0 p-0 cursor-pointer font-inherit text-inherit uppercase transition-colors hover:text-stone-900 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-rose-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Портфолио
            </button>
            <a
              href="#prices"
              className="relative transition-colors hover:text-stone-900 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-rose-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Услуги и Цены
            </a>
            <a
              href="tel:+375447657073"
              className="inline-flex items-center gap-2 border border-stone-200 px-4 py-2 rounded-full text-xs font-mono tracking-wider text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
            >
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +375 (44) 765-70-73
            </a>
            <a
              href="https://dikidi.ru/2042116?p=0.pi"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center rounded-full bg-stone-900 px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium text-white hover:bg-stone-800 transition-colors duration-300"
            >
              Записаться
            </a>
          </nav>

          {/* Компактная кнопка звонка для мобильных */}
          <a
            href="tel:+375447657073"
            aria-label="Позвонить в студию"
            className="md:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </a>

          {/* Кнопка-гамбургер для мобильных */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            className="md:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200/40 bg-stone-50/95 backdrop-blur-md">
            <nav className="flex flex-col px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium text-stone-600">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsPortfolioOpen(true);
                }}
                className="min-h-11 py-3 text-left transition-colors hover:text-stone-900"
              >
                Портфолио
              </button>
              <a
                href="#prices"
                onClick={() => setIsMenuOpen(false)}
                className="min-h-11 flex items-center transition-colors hover:text-stone-900"
              >
                Услуги и Цены
              </a>
              <a
                href="tel:+375447657073"
                onClick={() => setIsMenuOpen(false)}
                className="min-h-11 flex items-center font-mono normal-case tracking-wider transition-colors hover:text-stone-900"
              >
                +375 (44) 765-70-73
              </a>
              <a
                href="https://dikidi.ru/2042116?p=0.pi"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 mb-2 inline-flex min-h-11 items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-white transition-colors hover:bg-stone-800"
              >
                Записаться онлайн
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* 2. ГЛАВНЫЙ ЭКРАН (HERO SECTION) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-36 pb-12 md:pb-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Левая колонка: Текст и Оффер */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200/50 px-3 py-1 rounded-full text-xs font-semibold text-rose-600 tracking-wide uppercase">
            ✨ Естественный результат на 1.5–2 года
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-stone-950 leading-[1.15]">
            Перманентный макияж, который{" "}
            <span className="decoration-rose-400 decoration-wavy underline-offset-8">подчеркнет</span> вашу нежность
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Без эффекта «маркера» и синих бровей. Процедура за 3 часа в стерильной студии в городе Солигорске.
            Просыпайтесь красивой каждый день!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="https://dikidi.ru/2042116?p=0.pi"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 px-8 rounded-xl transition duration-300 shadow-lg shadow-stone-900/10 tracking-wide text-sm"
            >
              Подобрать свободное время
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto text-center bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 font-medium py-4 px-8 rounded-xl transition duration-300 text-sm"
            >
              Смотреть работы До/После
            </a>
          </div>
        </div>

        {/* Правая колонка: Эстетичное фоновое видео-превью */}
        <div className="relative justify-self-center md:justify-self-end w-full max-w-[480px]">
          <div className="absolute inset-0 bg-rose-200/50 rounded-full filter blur-3xl -z-10 transform scale-90 translate-x-4 translate-y-4"></div>
          <video
            src="/videos/hero-video.mp4"
            poster="/hero-photo.jpg"
            aria-label="Работы Нателы — перманентный макияж"
            autoPlay
            loop
            muted
            playsInline
            className="aspect-[4/5] w-full object-cover rounded-2xl shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition duration-500"
          />
        </div>
      </main>

      {/* 3. ИНТЕРАКТИВНОЕ ПОРТФОЛИО (СЛАЙДЕР ДО/ПОСЛЕ) */}
      <section id="portfolio" className="bg-stone-50 py-14 md:py-20 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-950 mb-3">Результаты процедур</h2>
          <p className="text-stone-600">Переключайте зоны и двигайте ползунок, чтобы оценить качество заживших работ</p>
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <BeforeAfter />
        </div>
      </section>

      {/* 4. ПРАЙС-ЛИСТ (УСЛУГИ И ЦЕНЫ) */}
      <section id="prices" className="bg-white py-14 md:py-20 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Prices />
        </div>
      </section>
      {/* 5. ФУТЕР: FAQ И КОНТАКТЫ */}
      <FooterContacts />

      {/* 6. МОДАЛЬНОЕ ОКНО ПОРТФОЛИО */}
      {isPortfolioOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          onClick={() => setIsPortfolioOpen(false)}
        >
          <div
            className="bg-stone-50 w-full max-w-4xl h-[80vh] rounded-3xl p-4 sm:p-8 overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPortfolioOpen(false)}
              aria-label="Закрыть портфолио"
              className="sticky top-0 float-right inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-600 shadow-md hover:bg-stone-900 hover:text-white transition-colors duration-300"
            >
              ✕
            </button>

            <h2
              id="portfolio-modal-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mb-6 sm:mb-8"
            >
              Портфолио заживших работ
            </h2>

            <section className="mb-10">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-stone-900 border-b border-stone-200 pb-2 mb-4">
                Зажившие брови
              </h3>
              <div className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-4">
                <figure>
                  <img
                    src={browsBeforeMain}
                    alt="Брови до процедуры"
                    className="aspect-[4/5] w-full object-cover rounded-xl"
                  />
                  <figcaption className="mt-2 text-center text-xs uppercase tracking-wider text-stone-500">
                    До
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={browsAfterMain}
                    alt="Брови после процедуры"
                    className="aspect-[4/5] w-full object-cover rounded-xl"
                  />
                  <figcaption className="mt-2 text-center text-xs uppercase tracking-wider text-stone-500">
                    После
                  </figcaption>
                </figure>
              </div>
            </section>

            <section>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-stone-900 border-b border-stone-200 pb-2 mb-4">
                Зажившие губы
              </h3>
              <div className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-4">
                <figure>
                  <img
                    src={lipsBeforeMain}
                    alt="Губы до процедуры"
                    className="aspect-[4/5] w-full object-cover rounded-xl"
                  />
                  <figcaption className="mt-2 text-center text-xs uppercase tracking-wider text-stone-500">
                    До
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={lipsAfterMain}
                    alt="Губы после процедуры"
                    className="aspect-[4/5] w-full object-cover rounded-xl"
                  />
                  <figcaption className="mt-2 text-center text-xs uppercase tracking-wider text-stone-500">
                    После
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
