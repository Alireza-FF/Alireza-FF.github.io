export const metadata = { title: 'درباره من' }

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Node.js', 'Git', 'Figma']

const stats = [
  { value: '+۵', label: 'سال تجربه' },
  { value: '+۴۰', label: 'پروژه موفق' },
  { value: '+۳۰', label: 'مشتری راضی' },
  { value: '+۱۰', label: 'مقاله' },
]

const timeline = [
  { date: '1404 - اکنون', title: 'توسعه‌دهنده ارشد وب', desc: 'همکاری با تیم محصول برای طراحی و توسعه پلتفرم‌های تحت وب.' },
  { date: '1403 - 1404', title: 'توسعه‌دهنده فرانت‌اند', desc: 'پیاده‌سازی رابط‌های کاربری واکنش‌گرا برای چند پروژه.' },
  { date: 'اکنون - 1403', title: 'کارشناسی مهندسی کامپیوتر', desc: 'تحصیل در دانشگاه، کسب تجربه و آشنایی با حوزه های مختلف.' },
]

export default function About() {
  return (
    <section className="container section">
      <div className="section-title">
        <h1>درباره من</h1>
        <p>کمی بیشتر با من و مسیرم آشنا شوید</p>
      </div>

      {/* Bio */}
      <div className="about-bio">
        <p className="text-gray-500 dark:text-slate-400 leading-8 mb-4">
          من چند سالی است در حوزه طراحی و توسعه وب فعالیت می‌کنم و عاشق ساختن تجربه‌های کاربری ساده، سریع و زیبا هستم. تمرکز من روی پروژه‌های واقعی و حل مسئله است.
        </p>
        <p className="text-gray-500 dark:text-slate-400 leading-8">
          در این مسیر با تیم‌ها و کسب‌وکارهای مختلفی همکاری کرده‌ام و همیشه سعی کرده‌ام یادگیری را متوقف نکنم.
        </p>
        <br/>
        <div className="flex flex-wrap gap-2 mt-8">
          {skills.map(s => <span key={s} className="skill-badge">{s}</span>)}
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline-wrapper">
        <h2 className="timeline-heading">مسیر شغلی</h2>

        <div className="timeline">
          {timeline.map((t, i) => (
            <div key={i} className="timeline-item">
              <span className="timeline-date">{t.date}</span>
              <h3 className="timeline-title">{t.title}</h3>
              <p className="timeline-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}