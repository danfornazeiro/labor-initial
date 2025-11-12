// page.tsx
import Image from "next/image";
import Header from "@/components/header";
import FeaturesSection from "@/components/feature-session";
import JobsCarousel from "@/components/vagas";

export default function Home() {
  return (
    <div className="bg-neutral-100 w-full min-h-screen overflow-hidden">
      <Header />

      {/* Sessão principal ocupa 100vh */}
      <main className="relative flex items-center justify-between px-10 pt-10 min-h-screen">
        {/* Fundo decorativo esquerdo */}
        <div className="absolute left-0 bottom-10 z-10 pointer-events-none">
          <Image
            src="/esquerda.svg"
            alt="Faixa esquerda"
            width={300}
            height={100}
            priority
          />
        </div>

        {/* Fundo decorativo direito */}
        <div className="absolute right-0 bottom-10 z-10 pointer-events-none">
          <Image
            src="/direita.svg"
            alt="Faixa direita"
            width={500}
            height={300}
            priority
          />
        </div>

        {/* Texto principal */}
        <div className="max-w-lg z-20">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Um clique.
            <br />
            Uma oportunidade.
          </h1>
          <p className="text-gray-600 mt-5 text-lg">
            Conectamos talentos a quem precisa, com agilidade e propósito.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="bg-sky-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-700 transition">
              Comece agora
            </button>
            <button className="text-sky-600 font-semibold hover:underline flex items-center gap-2">
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

        {/* Imagem do celular */}
        <div className="relative z-20">
          <Image
            src="/Mobile.svg"
            alt="Aplicativo Labor"
            width={320}
            height={640}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </main>

      {/* Dá um respiro entre as seções */}
      <div className="h-12 bg-neutral-100" />

      <FeaturesSection />
      <JobsCarousel />
    </div>
  );
}
