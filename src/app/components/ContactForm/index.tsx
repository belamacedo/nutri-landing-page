"use client";

import { useState } from 'react'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica para enviar e-mail aqui
    alert('Formulário enviado com sucesso!')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto p-4 md:p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
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
              className="w-full px-3 py-2 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
