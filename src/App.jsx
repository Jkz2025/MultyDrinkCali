import { useState } from 'react'

// ⚠️ Cambia por TU número (código de país + número, sin + ni espacios)
const WHATSAPP = '573113901709'
const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
const MSG = 'Hola, quiero pedir Multydrink. ¿Me das más información?'

const links = [
  ['Ingredientes', '#ingredientes'],
  ['Producto', '#producto'],
  ['Cómo usar', '#uso'],
  ['Preguntas', '#faq'],
]

const ingredientes = [
  ['Pulpa de café', 'Fruto del café aprovechado en la mezcla, con polifenoles naturales.'],
  ['Uva', 'Aporta sabor y compuestos antioxidantes de origen vegetal.'],
  ['Sirope de agave', 'Endulzante natural para una bebida suave.'],
  ['Té negro', 'Base clásica rica en antioxidantes como los flavonoides.'],
  ['Ganoderma lucidum', 'Hongo reishi, muy usado en la tradición oriental.'],
]

const faqs = [
  ['¿Cómo hago el pedido?', 'Toca cualquier botón verde: te llevará a mi WhatsApp con el mensaje listo. Te confirmo disponibilidad y envío.'],
  ['¿Cómo se paga?', 'Pregúntame por WhatsApp las opciones de pago disponibles para tu ciudad.'],
  ['¿A qué sabe?', 'Es una mezcla concentrada con sabor a limón.'],
  ['¿Cuántas porciones trae?', 'Cada caja trae 126 sobres de 10 g (1.260 g netos).'],
]

function Cta({ children = 'Pedir por WhatsApp', className = '' }) {
  return (
    <a
      href={wa(MSG)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-lima px-7 py-3.5 font-bold text-bosque shadow-lg shadow-bosque/20 transition hover:bg-white ${className}`}
    >
      <WaIcon /> {children}
    </a>
  )
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.800 1.500 5.900 1.500 7 0 12.600-5.600 12.600-12.500S23 3 16 3zm0 22.900c-1.900 0-3.700-.5-5.300-1.500l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.200 9.700 10 5 16 5s10.800 4.700 10.800 10.500S22 25.900 16 25.900zm5.900-7.700c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.700 8.700 0 0 1-4.300-3.700c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400s-1.200 1.100-1.200 2.800 1.200 3.300 1.400 3.500 2.400 3.700 5.800 5.100c2.100.9 2.900.9 4 .8.600-.1 1.900-.8 2.200-1.500s.3-1.400.2-1.500-.3-.2-.6-.4z" />
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-bosque/10 bg-crema/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="text-2xl font-extrabold tracking-tight">
            MULTY<span className="text-hoja">DRINK</span>
          </a>

          <nav className="hidden gap-8 font-medium md:flex">
            {links.map(([t, h]) => (
              <a key={h} href={h} className="hover:text-hoja">{t}</a>
            ))}
          </nav>

          <Cta className="hidden !py-2.5 md:inline-flex">Comprar</Cta>

          <button
            className={`burger md:hidden ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-bosque/10 bg-bosque px-5 py-4 text-crema md:hidden">
            {links.map(([t, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2.5 text-lg font-medium">
                {t}
              </a>
            ))}
            <Cta className="mt-2">Pedir por WhatsApp</Cta>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-bosque via-[#1d5a2a] to-hoja text-crema">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full bg-lima/20 px-4 py-1.5 text-sm font-semibold text-lima">
              Bebida antioxidante premium
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Cuida tu cuerpo desde adentro.
            </h1>
            <p className="mt-6 max-w-md text-lg text-crema/85">
              Cinco ingredientes de origen natural en una bebida con sabor a limón. Caja de 126 porciones lista para preparar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta />
              <a href="#ingredientes" className="inline-flex items-center rounded-full border-2 border-crema/40 px-7 py-3.5 font-semibold hover:bg-crema/10">
                Ver ingredientes
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-lima/25 blur-2xl" />
            <img
              src="/multydrink.png"
              alt="Caja de Multydrink con sus ingredientes: pulpa de café, uva, agave, té negro y Ganoderma"
              className="relative mx-auto w-full max-w-md rounded-[2rem] shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      {/* Ingredientes */}
      <section id="ingredientes" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="max-w-xl text-4xl font-extrabold md:text-5xl">
          Cinco componentes, una sola bebida.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ingredientes.map(([n, d], i) => (
            <article
              key={n}
              className={`rounded-3xl p-6 ${i % 2 ? 'bg-bosque text-crema' : 'bg-white ring-1 ring-bosque/10'}`}
            >
              <div className={`mb-4 h-3 w-10 rounded-full ${i % 2 ? 'bg-lima' : 'bg-hoja'}`} />
              <h3 className="text-xl font-bold">{n}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${i % 2 ? 'text-crema/80' : 'text-bosque/75'}`}>{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Producto */}
      <section id="producto" className="bg-bosque text-crema">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="text-4xl font-extrabold md:text-5xl">Lo que trae tu caja</h2>
            <p className="mt-5 max-w-md text-crema/80">
              Mezcla concentrada para preparar bebida, en sobres individuales fáciles de llevar a todos lados.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              ['126', 'porciones por caja'],
              ['10 g', 'por sobre'],
              ['1.260 g', 'contenido neto'],
              ['Limón', 'sabor'],
            ].map(([v, l]) => (
              <div key={l} className="rounded-3xl bg-white/10 p-6">
                <dt className="text-4xl font-extrabold text-lima">{v}</dt>
                <dd className="mt-1 text-sm text-crema/80">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cómo usar */}
      <section id="uso" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="text-4xl font-extrabold md:text-5xl">Cómo prepararlo</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {['Abre un sobre de 10 g.', 'Mézclalo con agua.', 'Revuelve y disfruta el sabor a limón.'].map((t, i) => (
            <li key={t} className="flex gap-4 rounded-3xl bg-white p-6 ring-1 ring-bosque/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hoja font-bold text-white">
                {i + 1}
              </span>
              <p className="pt-1.5 font-medium">{t}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-bosque/60">Confirma la cantidad de agua y la frecuencia de consumo en la etiqueta de tu caja.</p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 pb-16 md:pb-24">
        <h2 className="text-4xl font-extrabold md:text-5xl">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-bosque/15 border-y border-bosque/15">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                {q}
                <span className="text-2xl text-hoja transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-bosque/80">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-hoja to-lima px-5 py-16 text-center text-bosque">
        <h2 className="mx-auto max-w-2xl text-4xl font-extrabold md:text-5xl">
          Escríbeme y recibe tu Multydrink.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-medium">Te respondo por WhatsApp y coordinamos tu pedido.</p>
        <div className="mt-8">
          <a
            href={wa(MSG)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-bosque px-8 py-4 text-lg font-bold text-crema hover:bg-black"
          >
            <WaIcon /> Pedir por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-bosque px-5 py-8 text-center text-sm text-crema/70">
        <p>© {new Date().getFullYear()} Multydrink. Este producto no es un medicamento ni sustituye una alimentación variada.</p>
      </footer>

      {/* Botón flotante */}
      <a
        href={wa(MSG)}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105"
      >
        <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9 3 3.4 8.600 3.400 15.500c0 2.300.6 4.400 1.700 6.300L3 29l7.400-2c1.800 1 3.800 1.500 5.900 1.500 7 0 12.600-5.600 12.600-12.500S23 3 16 3zm5.900 19.300c-.3.800-1.500 1.500-2.100 1.500-.6.100-1.300.1-4-.8-3.400-1.400-5.600-4.900-5.800-5.100s-1.400-1.800-1.400-3.500.9-2.500 1.200-2.800c.3-.3.700-.4.900-.4h.6c.2 0 .5-.1.700.5l1 2.300c.1.100.1.300 0 .5-.6 1.200-1.200 1.100-.9 1.700a8.700 8.700 0 0 0 4.300 3.700c.3.100.5.100.7-.1s.8-1 1-1.200.5-.3.700-.2 1.900.9 2.200 1 .5.200.6.400.1.900-.2 1.500z" />
        </svg>
      </a>
    </div>
  )
}
