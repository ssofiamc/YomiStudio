import Link from "next/link";

export function CacciatoriTV() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative rounded-[3rem] border-[14px] border-zinc-800 bg-zinc-700 p-6 shadow-[14px_14px_0_#000] sm:p-10">
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-3" aria-hidden="true">
          <span className="size-4 rounded-full border-2 border-black bg-zinc-300" />
          <span className="size-4 rounded-full border-2 border-black bg-zinc-300" />
          <span className="h-16 w-4 rounded-full border-2 border-black bg-zinc-300" />
        </div>
        <div className="aspect-video overflow-hidden border-8 border-black bg-black p-3">
          <Link href="/cacciatori" aria-label="Entrar al universo Cacciatori" className="group grid h-full w-full place-items-center border border-zinc-700 bg-[repeating-linear-gradient(0deg,#111_0,#111_2px,#181818_2px,#181818_4px)] text-center text-white transition-colors hover:bg-zinc-900">
            <span>
              <span className="block text-xs font-bold uppercase tracking-[.28em] text-zinc-400">Conoce</span>
              <strong className="mt-2 block font-sans text-5xl uppercase tracking-[-.08em] transition-colors group-hover:text-yellow-300 sm:text-7xl">Cacciatori</strong>
              <span className="mt-4 block text-xs uppercase tracking-[.18em] text-zinc-300">Entrar al universo ↗</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/cacciatori" className="inline-flex border-2 border-black bg-black px-5 py-3 text-sm font-bold uppercase text-white hover:bg-zinc-300 hover:text-black">Explorar el universo Cacciatori ↗</Link>
      </div>
    </div>
  );
}
