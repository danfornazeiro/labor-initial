// page.tsx
import Image from "next/image";
import Header from "@/components/header";
import FeaturesSection from "@/components/feature-session";
import JobsCarousel from "@/components/vagas";
import AppUnavailableModal from "@/components/app-unavailable-modal";
import { useState } from "react";

export default function Home() {
  const [openApp, setOpenApp] = useState(false);
  return (
    <div className="bg-neutral-100 w-full min-h-screen overflow-hidden">
      <Header />

      {/* Sessão principal responsiva */}
      <main className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-10 pt-10 md:pt-16 min-h-[80vh] gap-10">
        {/* Texto principal */}
        <div className="max-w-xl z-20 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Um clique.
            <br />
            Uma oportunidade.
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Conectamos talentos a quem precisa, com agilidade e propósito.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <button
              className="bg-sky-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-700 transition"
              onClick={() => setOpenApp(true)}
            >
              Comece agora
            </button>
            <button
              className="text-sky-600 font-semibold hover:underline flex items-center gap-2"
              onClick={() => {
                const url =
                  "https://drive.google.com/file/d/1VFyYMAVADFtAs-41NQvRyIO8LVNApkeX/view?usp=sharing";
                window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Assistir pitch
            </button>
          </div>
        </div>

        {/* Imagem do celular com faixas atrás */}
        <div className="relative z-20 flex justify-center w-full md:w-auto">
          {/* Faixa esquerda */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 md:-left-6 z-10 pointer-events-none">
            <div className="md:hidden">
              <Image
                src="/esquerda.svg"
                alt="Faixa esquerda"
                width={150}
                height={50}
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/esquerda.svg"
                alt="Faixa esquerda"
                width={300}
                height={100}
                priority
              />
            </div>
          </div>
          {/* Faixa direita */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 md:-right-6 z-10 pointer-events-none">
            <div className="md:hidden">
              <Image
                src="/direita.svg"
                alt="Faixa direita"
                width={200}
                height={120}
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/direita.svg"
                alt="Faixa direita"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          <Image
            src="/Mobile.svg"
            alt="Aplicativo Labor"
            width={320}
            height={640}
            className="relative z-20 drop-shadow-2xl w-56 sm:w-64 md:w-[320px] h-auto"
            priority
          />
        </div>
      </main>

      {/* Dá um respiro entre as seções */}
      <div className="h-12 bg-neutral-100" />

      <FeaturesSection />
      <JobsCarousel />
      <AppUnavailableModal open={openApp} onClose={() => setOpenApp(false)} />
    </div>
  );
}
