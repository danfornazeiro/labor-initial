import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-28 ">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image src="/logo-labor.png" alt="Logo" width={55} height={50.13} />
        <Image src="/LABOR.png" alt="Labor Texto" width={76} height={27} />
      </div>

      {/* Navegação */}
      <nav className="flex items-center gap-8 text-gray-700 font-semibold">
        <a href="#projeto" className="hover:text-blue-600 transition">
          O projeto
        </a>
        <a href="#sobre" className="hover:text-blue-600 transition">
          Sobre Nós
        </a>
        <a href="#faqs" className="hover:text-blue-600 transition">
          FAQs
        </a>
      </nav>

      {/* Botão */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-8m0 0l-4 4m4-4l4 4m-9 8h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Baixar aplicativo
      </button>
    </header>
  );
};

export default Header;
