import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    const newErrors = { email: '', phone: '', message: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }

    if (!validatePhone(phone)) {
      newErrors.phone = 'Por favor, insira um telefone válido.';
    }

    if (message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const form = e.currentTarget as HTMLFormElement;
      form.submit();
      form.reset()
    } else {
      alert('Por favor, corrija os erros no formulário antes de enviar.');
    }
  };

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
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder='email@email.com'
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Telefone</label>
            <input
              type="tel"
              name="phone"
              mask="(99) 99999-9999"
              placeholder='(00) 00000-0000'
              className="w-full px-3 py-2 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              name="message"
              placeholder='Digite aqui a sua mensagem'
              className="w-full px-3 py-2 border rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
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
