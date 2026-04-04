'use client';

import { useState, useMemo } from 'react';
import { WA_NUMBER } from '@/lib/constants';
import { WHATSAPP_INQUIRY_OPTIONS } from '@/lib/home-content';

interface WhatsAppFormProps {
  compact?: boolean;
  className?: string;
}

export default function WhatsAppForm({ compact = false, className = '' }: WhatsAppFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const waHref = useMemo(() => {
    const { name, email, phone, subject, message } = form;
    const text =
      `*New Inquiry from CorePlus Website*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Subject:* ${subject}%0A` +
      `*Message:* ${message}`;
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fields: { name: 'name' | 'email' | 'phone'; label: string; type: string; span?: boolean }[] = compact
    ? [
        { name: 'name', label: 'Your Name', type: 'text' },
        { name: 'phone', label: 'Phone Number', type: 'tel', span: true },
      ]
    : [
        { name: 'name', label: 'Your Name', type: 'text' },
        { name: 'email', label: 'Your Email', type: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel', span: true },
      ];

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ${className}`}>
      {/* Decorative corner */}
      <div
        className="absolute top-0 right-0 opacity-10"
        style={{
          width: 150,
          height: 150,
          background: '#0F2C59',
          borderRadius: '0 0 0 100%',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="grid grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.name} className={f.span ? 'col-span-2' : 'col-span-1'}>
            <input
              type={f.type}
              name={f.name}
              id={f.name}
              placeholder={f.label}
              value={form[f.name]}
              onChange={handleChange}
              className="w-full rounded-xl border-0 bg-gray-100 px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        ))}
        <div className="col-span-2">
          <select
            name="subject"
            id="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-xl border-0 bg-gray-100 px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select enquiry type</option>
            {WHATSAPP_INQUIRY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={compact ? 3 : 4}
            className="w-full resize-none rounded-xl border-0 bg-gray-100 px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
        <div className="col-span-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-white shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            style={{ background: '#0F2C59' }}
          >
            {compact ? 'Send on WhatsApp' : 'Send Message'} <i className="bi bi-send-fill" />
          </a>
        </div>
      </div>
    </div>
  );
}
