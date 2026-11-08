"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CartSummary, OrderLines } from "@/components/store/CartSummary";
import { useStore } from "@/components/store/StoreProvider";

type PaymentMethod = "card" | "pse" | "transfer";

export default function PaymentPage() {
  const { items, customer, completeOrder, ready } = useStore();
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [status, setStatus] = useState<"idle" | "processing" | "error">("idle");
  const [error, setError] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState("");
  const [document, setDocument] = useState("");
  const router = useRouter();

  if (!ready) return <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">Cargando pago…</main>;
  if (!items.length || !customer.email) return <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><h1 className="font-sans text-4xl uppercase">Primero prepara tu pedido.</h1><Link className="mt-5 inline-flex border-2 border-black px-4 py-3 font-bold uppercase" href="/checkout">Volver a datos del pedido</Link></main>;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const digits = cardNumber.replace(/\D/g, "");
    const nextError = method === "card" && (!cardholder.trim() || digits.length < 16 || !/^\d{2}\/\d{2}$/.test(expiry) || !/^\d{3,4}$/.test(cvv))
      ? "Revisa los datos de tu tarjeta."
      : method === "pse" && (!bank || !document.trim())
        ? "Selecciona tu banco e ingresa tu documento."
        : "";
    setError(nextError);
    if (nextError) {
      setStatus("error");
      return;
    }
    setStatus("processing");
    window.setTimeout(() => {
      completeOrder();
      router.push("/confirmacion");
    }, 700);
  }

  function selectMethod(nextMethod: PaymentMethod) {
    setMethod(nextMethod);
    setStatus("idle");
    setError("");
  }

  return <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
    <p className="text-xs font-bold uppercase tracking-[.2em]">Pago / 2 de 2</p>
    <h1 className="mt-3 font-sans text-5xl uppercase tracking-[-.06em] sm:text-7xl">Finalizar compra</h1>
    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem]">
      <form onSubmit={submit} className="border-2 border-black bg-white p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b-2 border-black pb-5">
          <div><h2 className="font-sans text-2xl uppercase">Método de pago</h2><p className="mt-2 text-sm text-zinc-600">Elige cómo quieres completar tu compra.</p></div>
          <span className="border border-black px-2 py-1 text-[10px] font-bold uppercase">Pago seguro</span>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          {([
            ["card", "Tarjeta"],
            ["pse", "PSE"],
            ["transfer", "Transferencia"],
          ] as const).map(([value, label]) => <button key={value} type="button" onClick={() => selectMethod(value)} className={`min-h-12 border-2 border-black px-3 text-xs font-bold uppercase ${method === value ? "bg-black text-white" : "bg-white hover:bg-zinc-200"}`}>{label}</button>)}
        </div>
        {method === "card" && <div className="mt-6 space-y-4">
          <label className="block text-sm font-bold uppercase">Nombre en la tarjeta<input value={cardholder} onChange={(event) => setCardholder(event.target.value)} autoComplete="cc-name" className="mt-2 block w-full border-2 border-black px-3 py-3 font-normal normal-case" /></label>
          <label className="block text-sm font-bold uppercase">Número de tarjeta<input value={cardNumber} onChange={(event) => setCardNumber(event.target.value.replace(/[^\d\s]/g, "").slice(0, 19))} inputMode="numeric" autoComplete="cc-number" placeholder="0000 0000 0000 0000" className="mt-2 block w-full border-2 border-black px-3 py-3 font-normal normal-case" /></label>
          <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-bold uppercase">Vencimiento<input value={expiry} onChange={(event) => setExpiry(event.target.value.replace(/[^\d/]/g, "").slice(0, 5))} inputMode="numeric" autoComplete="cc-exp" placeholder="MM/AA" className="mt-2 block w-full border-2 border-black px-3 py-3 font-normal normal-case" /></label><label className="block text-sm font-bold uppercase">CVV<input value={cvv} onChange={(event) => setCvv(event.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" autoComplete="cc-csc" className="mt-2 block w-full border-2 border-black px-3 py-3 font-normal normal-case" /></label></div>
        </div>}
        {method === "pse" && <div className="mt-6 space-y-4"><label className="block text-sm font-bold uppercase">Banco<select value={bank} onChange={(event) => setBank(event.target.value)} className="mt-2 block w-full border-2 border-black bg-white px-3 py-3 font-normal normal-case"><option value="">Selecciona tu banco</option><option value="bancolombia">Bancolombia</option><option value="davivienda">Davivienda</option><option value="nequi">Nequi</option><option value="otro">Otro banco</option></select></label><label className="block text-sm font-bold uppercase">Documento<input value={document} onChange={(event) => setDocument(event.target.value)} inputMode="numeric" className="mt-2 block w-full border-2 border-black px-3 py-3 font-normal normal-case" /></label></div>}
        {method === "transfer" && <p className="mt-6 border-2 border-black bg-zinc-100 p-4 text-sm leading-relaxed">Al confirmar, recibirás las instrucciones para realizar la transferencia y completar tu pedido.</p>}
        {error && <p role="alert" className="mt-5 border-2 border-black bg-zinc-200 p-3 text-sm">{error}</p>}
        <p className="mt-6 text-xs leading-relaxed text-zinc-600">Tus datos financieros no se guardan en este dispositivo.</p>
        <button disabled={status === "processing"} className="mt-6 min-h-12 w-full border-2 border-black bg-black px-5 text-sm font-bold uppercase text-white hover:bg-zinc-300 hover:text-black disabled:cursor-wait disabled:opacity-60">{status === "processing" ? "Procesando pago…" : "Confirmar y pagar"}</button>
        <Link href="/checkout" className="mt-5 inline-block text-sm font-bold uppercase underline">← Volver a datos del pedido</Link>
      </form>
      <aside className="space-y-4"><OrderLines items={items} /><CartSummary items={items} /></aside>
    </div>
  </section>;
}
