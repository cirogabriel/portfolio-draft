'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setSubmitMessage(data.message || 'Message sent successfully!');
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage(data.error || 'Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black font-mono leading-tight">
              Contact me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 font-mono text-sm mb-2">Email</p>
                  <a href="mailto:ciro@example.com" className="text-white font-mono hover:text-gray-300">
                    ciro@example.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 font-mono text-sm mb-2">Location</p>
                  <p className="text-white font-mono">Your City, Country</p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-white text-black font-mono font-semibold hover:bg-gray-200 disabled:bg-gray-500 transition-colors"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </button>
                {submitMessage && (
                  <motion.p
                    className={`text-sm font-mono ${submitMessage.includes('successfully') || submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
