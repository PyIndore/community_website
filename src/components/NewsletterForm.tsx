'use client';

import { useState } from 'react';
import { API_BASE } from '@/lib/api-base';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch(`${API_BASE}/subscribe`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'newsletter' }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return <p className="text-green-400 text-sm">Thanks for subscribing! Check your inbox to confirm.</p>;
  }

  return (
    <form onSubmit={submit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="w-full liquid-glass rounded-xl px-4 py-2.5 text-sm text-dark-text placeholder-dark-tertiary outline-none focus:border-dark-border-strong transition-all mb-2.5 border-0"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-python-blue text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-python-blue-bright btn-glow transition-all duration-200 disabled:opacity-60"
      >
        {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'error' && <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>}
    </form>
  );
}
