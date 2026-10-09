'use client'

import { useState } from 'react'

const contactInfo = [
  { icon: '📧', label: 'ایمیل', value: 'email@example.com' },
  { icon: '📱', label: 'تلفن', value: '۰۹۱۲ ۰۰۰ ۰۰۰۰' },
  { icon: '📍', label: 'موقعیت', value: 'تهران، ایران' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="container section">
      <div className="section-title">
        <h1>تماس با من</h1>
        <p>برای همکاری، مشاوره یا هر سؤالی بنویسید</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div>
          <p className="text-gray-500 dark:text-slate-400 leading-8 mb-8">
            اگر پروژه‌ای دارید یا می‌خواهید درباره همکاری صحبت کنیم، از راه‌های زیر یا فرم کنار با من در تماس باشید.
          </p>

          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400 dark:text-slate-500">{item.label}</div>
                  <div className="text-gray-700 dark:text-slate-300">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card">
          {sent && (
            <div className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 rounded-xl px-4 py-3 mb-4 text-sm">
              ✅ پیام شما ثبت شد.
            </div>
          )}

          <div className="mb-4">
            <label className="form-label">علیرضا فرامرزی</label>
            <input
              type="text"
              className="form-input"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">ایمیل</label>
            <input
              type="email"
              className="form-input"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label className="form-label">پیام</label>
            <textarea
              rows={5}
              className="form-input resize-y"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">ارسال پیام</button>
        </form>
      </div>
    </section>
  )
}