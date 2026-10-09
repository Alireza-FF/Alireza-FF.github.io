export const metadata = { title: 'نمونه‌کارها' }

const projects = [
  { icon: '🛒', title: 'فروشگاه اینترنتی', desc: 'فروشگاه سریع با پنل مدیریت، درگاه پرداخت و سیستم انبارداری.', tags: ['React', 'Node.js', 'MongoDB'] },
  { icon: '📱', title: 'اپلیکیشن مدیریت کار', desc: 'وب‌اپلیکیشن مدیریت وظایف تیمی با تقویم و گزارش‌گیری.', tags: ['Next.js', 'Firebase', 'Tailwind'] },
  { icon: '🌐', title: 'سایت شرکتی', desc: 'طراحی مدرن و واکنش‌گرا برای شرکت مشاوره با تمرکز بر برندینگ.', tags: ['Next.js', 'Tailwind', 'SEO'] },
  { icon: '📊', title: 'داشبورد تحلیلی', desc: 'داشبورد نمایش داده‌ها با نمودارهای تعاملی و فیلترهای پیشرفته.', tags: ['React', 'Chart.js', 'API'] },
  { icon: '🎓', title: 'پلتفرم آموزشی', desc: 'سیستم مدیریت دوره با پخش ویدیو و پیگیری پیشرفت دانشجو.', tags: ['Next.js', 'Prisma', 'Stripe'] },
  { icon: '🍔', title: 'سفارش آنلاین رستوران', desc: 'سیستم سفارش غذا با منوی داینامیک و پیگیری لحظه‌ای سفارش.', tags: ['React', 'Socket.io', 'Node.js'] },
]

export default function Projects() {
  return (
    <section className="container section">
      <div className="section-title">
        <h1>نمونه‌کارها</h1>
        <p>چند نمونه از پروژه‌هایی که به آن‌ها افتخار می‌کنم</p>
      </div>

      <div className="grid-cards">
        {projects.map((p, i) => (
          <article key={i} className="card p-0 overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-5xl">
              {p.icon}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm leading-7 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">مشاهده دمو →</a>
                <a href="#" className="text-gray-500 dark:text-slate-400 hover:text-blue-600">سورس کد</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}