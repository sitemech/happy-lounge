"use client"

import { useEffect, useState } from "react"
import { BedDouble, ChevronLeft, ChevronRight, Coffee, Lock, MapPin, Sparkles, X, Zap } from "lucide-react"

import styles from "./happy-lounge-landing.module.css"

const BOOKING_NEW_TAB_URL =
  "https://booking-online.otelms.com/?hms_system_id=19204/"
const HERO_BACKGROUND =
  'linear-gradient(180deg, rgba(3, 6, 12, 0.18), rgba(3, 6, 12, 0.08) 34%, rgba(3, 6, 12, 0.42) 68%, rgba(3, 6, 12, 0.7) 100%), url("happy-lounge/vert-image.webp")'
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Happy+Lounge+capsule+hotel+63+Merab+Kostava+St+Tbilisi"
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=41.714087,44.782185&z=16&output=embed"

const galleryImages = [
  {
    src: "happy-lounge/gallery/684155150_18098393440895782_4862020916351866538_n.webp",
    alt: "Capsule corridor with colorful lighting",
  },
  {
    src: "happy-lounge/gallery/682069447_18098393422895782_2488191331302629506_n.webp",
    alt: "White capsule with television",
  },
  {
    src: "happy-lounge/gallery/681920488_18098393431895782_4085752355504998857_n.webp",
    alt: "Pink capsule interior with bed",
  },
  {
    src: "happy-lounge/gallery/684150819_18098393386895782_7924636822680206781_n.webp",
    alt: "Bright white capsule room",
  },
  {
    src: "happy-lounge/gallery/684228118_18098393449895782_8203935883988234420_n.webp",
    alt: "Blue illuminated capsule room",
  },
  {
    src: "happy-lounge/gallery/684169367_18098393476895782_5534451310426061828_n.webp",
    alt: "Green illuminated capsule room",
  },
  {
    src: "happy-lounge/gallery/682900250_18098393395895782_5038816440864659210_n.webp",
    alt: "Blue capsule corridor",
  },
  {
    src: "happy-lounge/gallery/682692610_18098393485895782_7078476068532810665_n.webp",
    alt: "Purple capsule room",
  },
]

const content = {
  en: {
    locale: "en-US",
    langLabel: "ENGLISH",
    langOptions: [
      { code: "ru", label: "РУССКИЙ" },
      { code: "ka", label: "ქართული" },
    ],
    brandSub: "Capsule Hotel | Tbilisi",
    heroTitle:
      "Discover a new format of staying - efficient, atmospheric, and unforgettable",
    heroText:
      "Modern, seamless, and thoughtfully designed - your stay begins the moment you arrive.",
    heroButton: "Book Now!",
    introTitle:
      "Stay at the crossroads of the city - and step into another reality.",
    introParagraphs: [
      {
        label: "Comfortable Accommodations:",
        text: "Capsule Hotel Happy Lounge in Tbilisi offers air-conditioned rooms with private check-in and check-out services, a lounge, and a 24-hour front desk. Guests enjoy free WiFi, daily housekeeping, and luggage storage.",
      },
      {
        label: "Modern Amenities:",
        text: "Each room features a refrigerator, shared bathroom, seating area, shower, dining area, and kitchenware. Additional amenities include a TV, ensuring a pleasant stay.",
      },
    ],
    comfortTitle: "Find the stay that fits you perfectly",
    comfortLead: "Everything you need for a",
    comfortAccent: "comfortable stay",
    comfortLeadSuffix: "in Tbilisi",
    features: [
      {
        title: "Capsule Types",
        text: "Minimal basic - simple, smart, and comfortable. Immersive full - enhanced experience with a built-in Smart TV. Double capsule - designed for two without compromising personal comfort.",
      },
      {
        title: "Personalized Comfort",
        text: "All capsules feature adjustable RGB lighting and ventilation, so you can create your ideal atmosphere.",
      },
      {
        title: "Secure Storage",
        text: "Each stay includes a safe locker for your belongings - peace of mind, always.",
      },
      {
        title: "Prime Location",
        text: "Situated in the very heart of the city, at the intersection of major transport routes.",
      },
      {
        title: "Effortless Check-In",
        text: "Open 24/7. No delays, no complications - just your passport and you're in.",
      },
      {
        title: "Breakfast Option",
        text: "Start your day right - add breakfast to your booking anytime. Please note: breakfast is optional during the low season.",
      },
    ],
    featuresToggle: "Show more",
    reviewsTitle: "What Our Guests Say",
    reviewsLead: "Based on recent",
    reviewsLink: "Google reviews",
    reviewsLeadSuffix: "for Happy Lounge",
    reviewsSource: "Google Reviews",
    reviewsCta: "Read all on Google",
    galleryTitle: "Gallery",
    galleryLead: "Photos from",
    galleryAccent: "Happy Lounge capsule hotel",
    locationLine: "63 Merab Kostava St, Tbilisi, Georgia",
    openBookingNewTab: "Open booking in new tab",
    openInGoogleMaps: "Open in Google Maps",
    mapCredit: "Interactive map powered by Google Maps",
    reviews: [
      {
        title: "Clean and comfortable",
        text: "Guests repeatedly mention clean capsules, good privacy, and a cozy layout for short stays in Tbilisi.",
      },
      {
        title: "Helpful staff",
        text: "Reviews often highlight friendly service, smooth check-in, and a calm atmosphere in the shared areas.",
      },
      {
        title: "Convenient location",
        text: "Travelers say the hotel is easy to reach, close to transit, and practical for exploring the city center.",
      },
    ],
  },
  ru: {
    locale: "ru-RU",
    langLabel: "РУССКИЙ",
    langOptions: [
      { code: "en", label: "ENGLISH" },
      { code: "ka", label: "ქართული" },
    ],
    brandSub: "Капсульный отель | Тбилиси",
    heroTitle:
      "Откройте новый формат проживания - эффективный, атмосферный и незабываемый",
    heroText:
      "Современно, удобно и продуманно - ваше пребывание начинается с момента прибытия.",
    heroButton: "Забронировать",
    introTitle:
      "Остановитесь на перекрёстке города - и шагните в другую реальность.",
    introParagraphs: [
      {
        label: "Комфортное размещение:",
        text: "Capsule Hotel Happy Lounge в Тбилиси предлагает кондиционированные номера, индивидуальную регистрацию заезда и выезда, лаунж-зону и круглосуточную стойку регистрации. Гостям доступны бесплатный Wi‑Fi, ежедневная уборка и хранение багажа.",
      },
      {
        label: "Современные удобства:",
        text: "В каждом номере есть холодильник, общая ванная комната, зона отдыха, душ, обеденная зона и кухонные принадлежности. Также предусмотрен телевизор для приятного пребывания.",
      },
    ],
    comfortTitle: "Найдите формат проживания, который подходит именно вам",
    comfortLead: "Всё, что нужно для",
    comfortAccent: "комфортного проживания",
    comfortLeadSuffix: "в Тбилиси",
    features: [
      {
        title: "Типы капсул",
        text: "Minimal basic - просто, продуманно и комфортно. Immersive full - расширенный опыт с встроенным Smart TV. Double capsule - вариант для двоих без компромиссов в личном комфорте.",
      },
      {
        title: "Персональный комфорт",
        text: "Во всех капсулах есть регулируемая RGB-подсветка и вентиляция, чтобы вы могли создать идеальную атмосферу.",
      },
      {
        title: "Безопасное хранение",
        text: "В каждое проживание входит надёжный шкафчик для ваших вещей - спокойствие всегда рядом.",
      },
      {
        title: "Удобное расположение",
        text: "Отель расположен в самом сердце города, на пересечении основных транспортных маршрутов.",
      },
      {
        title: "Быстрый заезд",
        text: "Открыто 24/7. Без задержек и сложностей - нужен только паспорт, и вы уже внутри.",
      },
      {
        title: "Завтрак по желанию",
        text: "Начните день правильно - добавьте завтрак к бронированию в любое время. Обратите внимание: в низкий сезон завтрак предоставляется опционально.",
      },
    ],
    featuresToggle: "Показать ещё",
    reviewsTitle: "Что говорят наши гости",
    reviewsLead: "По материалам недавних",
    reviewsLink: "отзывов в Google",
    reviewsLeadSuffix: "о Happy Lounge",
    reviewsSource: "Google Отзывы",
    reviewsCta: "Читать все в Google",
    galleryTitle: "Галерея",
    galleryLead: "Фотографии",
    galleryAccent: "Happy Lounge capsule hotel",
    locationLine: "63 Merab Kostava St, Тбилиси, Грузия",
    openBookingNewTab: "Открыть бронирование в новой вкладке",
    openInGoogleMaps: "Открыть в Google Maps",
    mapCredit: "Интерактивная карта на базе Google Maps",
    reviews: [
      {
        title: "Чисто и удобно",
        text: "Гости регулярно отмечают чистые капсулы, хорошую приватность и уютный формат для короткого проживания в Тбилиси.",
      },
      {
        title: "Дружелюбный персонал",
        text: "Во многих отзывах хвалят приветливый сервис, быстрый заезд и спокойную атмосферу в общих зонах.",
      },
      {
        title: "Удобная локация",
        text: "Путешественники пишут, что отель легко найти, он расположен рядом с транспортом и удобен для поездок по центру города.",
      },
    ],
  },
  ka: {
    locale: "ka-GE",
    langLabel: "ქართული",
    langOptions: [
      { code: "en", label: "ENGLISH" },
      { code: "ru", label: "РУССКИЙ" },
    ],
    brandSub: "კაფსულური სასტუმრო | თბილისი",
    heroTitle:
      "აღმოაჩინეთ დარჩენის ახალი ფორმატი - ეფექტური, ატმოსფერული და დაუვიწყარი",
    heroText:
      "თანამედროვე, მარტივი და გააზრებულად შექმნილი - თქვენი დასვენება იწყება ჩამოსვლისთანავე.",
    heroButton: "დაჯავშნა",
    introTitle: "დარჩით ქალაქის გზაჯვარედინზე - და გადადით სხვა რეალობაში.",
    introParagraphs: [
      {
        label: "კომფორტული განთავსება:",
        text: "Capsule Hotel Happy Lounge თბილისში გთავაზობთ კონდიცირებულ ოთახებს, ინდივიდუალურ შესვლასა და გასვლას, ლაუნჯ-სივრცეს და 24-საათიან მისაღებს. სტუმრებს აქვთ უფასო Wi‑Fi, ყოველდღიური დალაგება და ბარგის შენახვა.",
      },
      {
        label: "თანამედროვე კომფორტი:",
        text: "თითოეულ ოთახში არის მაცივარი, საერთო სააბაზანო, დასასვენებელი სივრცე, შხაპი, სასადილო ზონა და სამზარეულოს ნივთები. სასიამოვნო ყოფნისთვის ასევე ხელმისაწვდომია ტელევიზორი.",
      },
    ],
    comfortTitle: "იპოვეთ დარჩენის ფორმატი, რომელიც ზუსტად თქვენ გერგებათ",
    comfortLead: "ყველაფერი, რაც გჭირდებათ",
    comfortAccent: "კომფორტული დარჩენისთვის",
    comfortLeadSuffix: "თბილისში",
    features: [
      {
        title: "კაფსულის ტიპები",
        text: "Minimal basic - მარტივი, ჭკვიანი და კომფორტული. Immersive full - გაუმჯობესებული გამოცდილება ჩაშენებული Smart TV-ით. Double capsule - შექმნილია ორისთვის, პირადი კომფორტის დათმობის გარეშე.",
      },
      {
        title: "პერსონალური კომფორტი",
        text: "ყველა კაფსულას აქვს რეგულირებადი RGB განათება და ვენტილაცია, რათა შექმნათ თქვენთვის იდეალური ატმოსფერო.",
      },
      {
        title: "უსაფრთხო შენახვა",
        text: "ყოველ დარჩენაში შედის უსაფრთხო საკეტი თქვენი ნივთებისთვის - სიმშვიდე ყოველთვის თქვენთანაა.",
      },
      {
        title: "მოხერხებული მდებარეობა",
        text: "სასტუმრო მდებარეობს ქალაქის გულში, ძირითადი სატრანსპორტო მარშრუტების გადაკვეთაზე.",
      },
      {
        title: "მარტივი შესვლა",
        text: "ღიაა 24/7. დაყოვნებისა და სირთულეების გარეშე - მხოლოდ პასპორტი და უკვე შიგნით ხართ.",
      },
      {
        title: "საუზმის არჩევანი",
        text: "დაიწყეთ დღე სწორად - საუზმე შეგიძლიათ დაამატოთ ჯავშანს ნებისმიერ დროს. გაითვალისწინეთ: დაბალ სეზონზე საუზმე არჩევითია.",
      },
    ],
    featuresToggle: "მეტის ჩვენება",
    reviewsTitle: "რას ამბობენ ჩვენი სტუმრები",
    reviewsLead: "დაფუძნებულია ბოლო",
    reviewsLink: "Google შეფასებებზე",
    reviewsLeadSuffix: "Happy Lounge-ის შესახებ",
    reviewsSource: "Google შეფასებები",
    reviewsCta: "ყველას ნახვა Google-ში",
    galleryTitle: "გალერეა",
    galleryLead: "ფოტოები",
    galleryAccent: "Happy Lounge capsule hotel-დან",
    locationLine: "63 Merab Kostava St, თბილისი, საქართველო",
    openBookingNewTab: "დაჯავშნის გახსნა ახალ ჩანართში",
    openInGoogleMaps: "გახსნა Google Maps-ში",
    mapCredit: "ინტერაქტიული რუკა Google Maps-ისგან",
    reviews: [
      {
        title: "სუფთა და კომფორტული",
        text: "სტუმრები ხშირად აღნიშნავენ სუფთა კაფსულებს, კარგ პირად სივრცეს და მყუდრო გარემოს მოკლე დარჩენისთვის თბილისში.",
      },
      {
        title: "კარგი მომსახურება",
        text: "შეფასებებში ხშირად ჩანს მეგობრული პერსონალი, მარტივი check-in და მშვიდი ატმოსფერო საერთო სივრცეებში.",
      },
      {
        title: "მოხერხებული მდებარეობა",
        text: "მოგზაურები წერენ, რომ სასტუმრო ადვილად მისადგომია, ახლოს არის ტრანსპორტთან და მოსახერხებელია ქალაქში გადაადგილებისთვის.",
      },
    ],
  },
} as const

type Language = keyof typeof content

const featureIcons = [BedDouble, Sparkles, Lock, MapPin, Zap, Coffee]

function getGalleryColumns(width: number) {
  if (width <= 540) return 1
  if (width <= 900) return 2
  return 4
}

export function HappyLoungeLanding() {
  const [language, setLanguage] = useState<Language>("en")
  const [menuOpen, setMenuOpen] = useState(false)
  const [featuresExpanded, setFeaturesExpanded] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [viewportWidth, setViewportWidth] = useState(1440)

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    const previousLang = root.lang
    root.lang = language

    if (lightboxIndex !== null) {
      const previousOverflow = body.style.overflow
      body.style.overflow = "hidden"
      return () => {
        body.style.overflow = previousOverflow
        root.lang = previousLang
      }
    }

    return () => {
      root.lang = previousLang
    }
  }, [language, lightboxIndex])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setLightboxIndex(null)
      }

      if (lightboxIndex === null) return

      if (event.key === "ArrowLeft") {
        setLightboxIndex(
          (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
        )
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [lightboxIndex])

  const copy = content[language]
  const reviews = copy.reviews
  const galleryColumns = getGalleryColumns(viewportWidth)
  const visibleGalleryItems = galleryImages

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header
          className={styles.hero}
          id="top"
          style={{ backgroundImage: HERO_BACKGROUND }}
        >
          <nav className={styles.nav} aria-label="Main navigation">
            <a className={styles.brand} href="#top">
              HAPPY LOUNGE
              <span className={styles.brandSub}>{copy.brandSub}</span>
            </a>

            <div className={styles.languagePicker}>
              <button
                className={styles.languageButton}
                type="button"
                aria-label="Language"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                {copy.langLabel}
              </button>

              {menuOpen && (
                <div className={styles.languageMenu}>
                  {copy.langOptions.map((option) => (
                    <button
                      key={option.code}
                      className={styles.languageOption}
                      type="button"
                      onClick={() => {
                        setLanguage(option.code as Language)
                        setMenuOpen(false)
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>{copy.heroTitle}</h1>
            <p className={styles.heroText}>{copy.heroText}</p>
            <div className={styles.bookingBar}>
              <button
                className={styles.heroButton}
                type="button"
                onClick={() => window.open(BOOKING_NEW_TAB_URL, "_blank", "noopener,noreferrer")}
              >
                {copy.heroButton}
              </button>
            </div>
          </div>
        </header>

        <div className={styles.intro}>
          <h2 className={styles.introTitle}>{copy.introTitle}</h2>
          {copy.introParagraphs.map((paragraph) => (
            <p key={paragraph.label} className={styles.introText}>
              <strong className={styles.accent}>{paragraph.label}</strong>{" "}
              {paragraph.text}
            </p>
          ))}
        </div>

        <section className={styles.section} aria-labelledby="comfort-title">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="comfort-title">
              {copy.comfortTitle}
            </h2>
            <p className={styles.lead}>
              {copy.comfortLead} <span className={styles.accent}>{copy.comfortAccent}</span>{" "}
              {copy.comfortLeadSuffix}
            </p>
          </div>

          <div className={styles.features}>
            {copy.features.map((feature, index) => {
              const Icon = featureIcons[index]
              const hiddenOnMobile = index >= 2 && !featuresExpanded
              return (
                <article
                  key={feature.title}
                  className={`${styles.feature} ${
                    hiddenOnMobile
                      ? styles.featureHiddenMobile
                      : styles.featureVisibleMobile
                  }`}
                >
                  <div className={styles.featureIcon} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </article>
              )
            })}
          </div>

          {!featuresExpanded && (
            <button
              className={styles.featuresToggle}
              type="button"
              aria-expanded={featuresExpanded}
              onClick={() => setFeaturesExpanded(true)}
            >
              {copy.featuresToggle} <span aria-hidden="true">⌄</span>
            </button>
          )}
        </section>

        <section
          className={`${styles.section} ${styles.reviews}`}
          aria-labelledby="reviews-title"
        >
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="reviews-title">
              {copy.reviewsTitle}
            </h2>
            <p className={styles.lead}>
              {copy.reviewsLead}{" "}
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
                {copy.reviewsLink}
              </a>{" "}
              {copy.reviewsLeadSuffix}
            </p>
          </div>

          <div className={styles.reviewWrap}>
            <button
              className={styles.arrow}
              type="button"
              aria-label="Previous review"
              onClick={() =>
                setReviewIndex(
                  (reviewIndex - 1 + reviews.length) % reviews.length,
                )
              }
            >
              ‹
            </button>

            <article className={styles.reviewCard} aria-live="polite">
              <div>
                <div className={styles.stars} aria-label="Five stars">
                  *****
                </div>
                <p className={styles.reviewSource}>{copy.reviewsSource}</p>
                <h3 className={styles.reviewTitle}>{reviews[reviewIndex].title}</h3>
                <p className={styles.quote}>{reviews[reviewIndex].text}</p>
                <a
                  className={styles.reviewLink}
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.reviewsCta}
                </a>
              </div>
            </article>

            <button
              className={styles.arrow}
              type="button"
              aria-label="Next review"
              onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
            >
              ›
            </button>
          </div>
        </section>

        <section className={styles.section} id="gallery" aria-labelledby="gallery-title">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle} id="gallery-title">
              {copy.galleryTitle}
            </h2>
            <p className={styles.lead}>
              {copy.galleryLead} <span className={styles.accent}>{copy.galleryAccent}</span>
            </p>
          </div>

          <div className={styles.galleryCarousel} aria-label="Photo gallery">
            <div className={styles.galleryWindow}>
              <div
                className={styles.galleryGrid}
                style={{
                  gridTemplateColumns: `repeat(${Math.min(visibleGalleryItems.length, galleryColumns)}, minmax(0, 1fr))`,
                }}
              >
                {visibleGalleryItems.map((image) => {
                  const actualIndex = galleryImages.findIndex(
                    (item) => item.src === image.src && item.alt === image.alt,
                  )
                  return (
                    <button
                      key={`${image.src}-${image.alt}`}
                      className={styles.galleryItem}
                      type="button"
                      onClick={() => setLightboxIndex(actualIndex)}
                    >
                      <img src={image.src} alt={image.alt} />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <p className={styles.location}>
            <strong>Happy Lounge capsule hotel</strong>{" "}
            <span>{copy.locationLine}</span>
          </p>

          <div className={styles.map} aria-label="Map showing Happy Lounge capsule hotel location">
            <iframe
              className={styles.mapFrame}
              title="Happy Lounge capsule hotel on Google Maps"
              src={GOOGLE_MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className={styles.mapCredit}>
              {copy.mapCredit}{" "}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                {copy.openInGoogleMaps}
              </a>
            </p>
          </div>
        </section>
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxIndex(null)
          }}
        >
          <button
            className={styles.close}
            type="button"
            aria-label="Close preview"
            onClick={() => setLightboxIndex(null)}
          >
            <X />
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            type="button"
            aria-label="Previous large photo"
            onClick={(event) => {
              event.stopPropagation()
              setLightboxIndex(
                (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
              )
            }}
          >
            <ChevronLeft />
          </button>
          <img
            className={styles.lightboxImage}
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
          />
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            type="button"
            aria-label="Next large photo"
            onClick={(event) => {
              event.stopPropagation()
              setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}

    </main>
  )
}
