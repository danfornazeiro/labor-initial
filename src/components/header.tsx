"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppUnavailableModal from "./app-unavailable-modal";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openApp, setOpenApp] = useState(false);

  return (
    <>
      <header className="w-full h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-28 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/LOGO.svg"
            alt="Logo"
            width={40}
            height={36}
            className="sm:hidden"
          />
          <Image
            src="/LOGO.svg"
            alt="Logo"
            width={55}
            height={50.13}
            className="hidden sm:block"
          />
          <Image
            src="/LABOR.svg"
            alt="Labor Texto"
            width={64}
            height={24}
            className="sm:hidden"
          />
          <Image
            src="/LABOR.svg"
            alt="Labor Texto"
            width={76}
            height={27}
            className="hidden sm:block"
          />
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-neutral-900 font-semibold">
          <Link
            href="#projeto"
            className="hover:text-blue-600 transition text-[14px]"
          >
            O projeto
          </Link>
          <Link
            href="#sobre"
            className="hover:text-blue-600 transition text-[14px]"
          >
            Sobre Nós
          </Link>
          <Link
            href="#faqs"
            className="hover:text-blue-600 transition text-[14px]"
          >
            FAQs
          </Link>
        </nav>

        {/* Botão */}
        <button
          className="hidden md:flex bg-sky-600 text-white px-5 py-2 rounded-md items-center gap-2 hover:bg-sky-700 transition"
          onClick={() => setOpenApp(true)}
        >
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
        {/* Hamburger mobile */}
        <button
          aria-label="Abrir menu"
          onClick={() => setOpenMenu((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:bg-neutral-200/60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {openMenu ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile dropdown */}
        {openMenu && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-white shadow-md border-t border-neutral-200">
            <div className="px-4 py-3 flex flex-col gap-3">
              <Link
                href="#projeto"
                className="py-2 text-neutral-900"
                onClick={() => setOpenMenu(false)}
              >
                O projeto
              </Link>
              <Link
                href="#sobre"
                className="py-2 text-neutral-900"
                onClick={() => setOpenMenu(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="#faqs"
                className="py-2 text-neutral-900"
                onClick={() => setOpenMenu(false)}
              >
                FAQs
              </Link>
              <button
                className="mt-2 bg-sky-600 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setOpenMenu(false);
                  setOpenApp(true);
                }}
              >
                Baixar aplicativo
              </button>
            </div>
          </div>
        )}
      </header>
      <AppUnavailableModal open={openApp} onClose={() => setOpenApp(false)} />
    </>
  );
};

export default Header;
