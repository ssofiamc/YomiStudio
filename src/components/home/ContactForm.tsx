"use client";
import { FormEvent, useState } from "react";
export function ContactForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
      setNotice("Completa un correo válido y cuéntanos cómo puedes aportar al equipo.");
      return;
    }

    setNotice("¡Solicitud enviada! Esta es una simulación: el equipo recibió tus datos y te responderá en los próximos días.");
    setEmail("");
    setMessage("");
  }

  return <form noValidate onSubmit={submit} className="space-y-4 border-2 border-black bg-white p-5 text-black sm:p-7">
    <label className="block text-xs font-bold uppercase tracking-wider">Correo electrónico
      <input required value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="tu-correo@ejemplo.com" className="mt-2 block w-full border-2 border-black bg-white px-3 py-3 text-base font-normal normal-case text-black placeholder:text-zinc-500" />
    </label>
    <label className="block text-xs font-bold uppercase tracking-wider">Área o aporte al equipo
      <textarea required value={message} onChange={(event) => setMessage(event.target.value)} rows={5} placeholder="Cuéntanos en qué área te desempeñas o cómo puedes aportar al equipo." className="mt-2 block w-full resize-y border-2 border-black bg-white px-3 py-3 text-base font-normal normal-case text-black placeholder:text-zinc-500" />
    </label>
    {notice && <p role="status" aria-live="polite" className="border-2 border-black bg-zinc-200 p-3 text-sm">{notice}</p>}
    <button type="submit" className="border-2 border-black bg-black px-5 py-3 text-sm font-bold uppercase text-white hover:bg-zinc-300 hover:text-black">Enviar solicitud</button>
  </form>;
}
