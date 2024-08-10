import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto p-4 md:p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Entre em Contato
        </h2>
        <form
          action="https://formspree.io/f/xqazblyd"
          method="POST"
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Telefone</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-3 py-2 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              name="message"
              className="w-full px-3 py-2 border rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
