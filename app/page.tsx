import Link from 'next/link'

const services = [
  { icon: '💻', title: 'طراحی سایت', desc: 'طراحی و پیاده‌سازی سایت‌های شخصی، شرکتی و فروشگاهی به‌صورت سریع و واکنش‌گرا.' },
  { icon: '🎨', title: 'UI/UX', desc: 'طراحی رابط و تجربه کاربری با تمرکز بر سادگی، زیبایی و افزایش نرخ تبدیل.' },
  { icon: '⚙️', title: 'بهینه‌سازی', desc: 'افزایش سرعت، سئو و عملکرد سایت برای دیده‌شدن بهتر در گوگل.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container hero">
        <div>
          <span className="chip mb-4">سلام، خوش آمدید 👋</span>
          <h1 className="hero-title">
            من <span>علیرضا فرامرزی</span> هستم؛
            <br />
            طراح و توسعه‌دهنده وب
          </h1>
          <p className="hero-desc">
            اینجا فضای شخصی من است؛ جایی که نمونه‌کارها، تجربه‌ها و راه‌های ارتباطی‌ام را به اشتراک می‌گذارم.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="btn btn-primary">مشاهده نمونه‌کارها</Link>
            <Link href="/contact" className="btn btn-outline">تماس با من</Link>
          </div>
        </div>
        <div className="avatar">ش</div>
      </section>

      {/* Services */}
      <section className="container section">
        <div className="section-title">
          <h2>خدمات من</h2>
          <p>چه کارهایی می‌توانم برای شما انجام دهم؟</p>
        </div>

        <div className="grid-cards">
          {services.map((s, i) => (
            <div key={i} className="card">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl mb-4">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm leading-7">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-box">
          <h2>آماده همکاری هستید؟</h2>
          <p>پروژه‌تان را با من در میان بگذارید.</p>
          <Link href="/contact" className="cta-btn">
            شروع گفتگو
          </Link>
        </div>
      </section>
    </>
  )
}