export const metadata = { title: 'وبلاگ' }

const posts = [
  { slug: 'faster', title: '۵ نکته برای سریع‌تر شدن سایت', date: '۱۴۰۴/۰۱/۱۵', excerpt: 'بهینه‌سازی تصاویر، کش و چند تکنیک ساده اما مؤثر.', category: 'عملکرد' },
  { slug: 'responsive', title: 'طراحی واکنش‌گرا یعنی چه؟', date: '۱۴۰۴/۰۲/۱۰', excerpt: 'چرا سایت باید روی موبایل هم عالی دیده شود.', category: 'طراحی' },
  { slug: 'freelance', title: 'شروع فریلنسری در وب', date: '۱۴۰۴/۰۳/۰۵', excerpt: 'از ساختن نمونه‌کار تا اولین مشتری واقعی.', category: 'شغلی' },
  { slug: 'nextjs', title: 'Next.js یا React خالص؟', date: '۱۴۰۴/۰۳/۲۰', excerpt: 'مقایسه کاربردی برای انتخاب درست.', category: 'توسعه' },
  { slug: 'css', title: 'ترفندهای CSS', date: '۱۴۰۴/۰۴/۰۱', excerpt: 'مجموعه‌ای از ترفندهای کاربردی CSS.', category: 'CSS' },
  { slug: 'dark', title: 'Dark Mode به روش درست', date: '۱۴۰۴/۰۴/۱۵', excerpt: 'روش‌های پیاده‌سازی تم تاریک در وب.', category: 'طراحی' },
]

export default function Blog() {
  return (
    <section className="container section">
      <div className="section-title">
        <h1>وبلاگ</h1>
        <p>نوشته‌هایی درباره طراحی، توسعه و تجربه‌های کاری</p>
      </div>

      <div className="grid-cards">
        {posts.map(post => (
          <article key={post.slug} className="card">
            <span className="chip mb-4">{post.category}</span>
            <h3 className="text-lg font-bold mb-2 leading-8">{post.title}</h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm leading-7 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-slate-500">
              <span>{post.date}</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">ادامه مطلب →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}