"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 md:px-24 py-3 flex justify-between items-center relative">
      {/* Menú Hamburguesa - Aparece solo en móviles */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Links - Ocultos en móviles cuando el menú está cerrado */}
      <div
        className={`absolute left-0 top-14 w-full bg-slate-800 p-5 md:p-0 md:bg-transparent md:static md:flex md:space-x-8 
        ${menuOpen ? "block" : "hidden"} md:block`}
      >
        <Link href="/" className="block py-2 md:inline">
          Inicio
        </Link>
        <Link href="/about" className="block py-2 md:inline">
          Nosotros
        </Link>
        <Link href="/contact" className="block py-2 md:inline">
          Contacto
        </Link>
      </div>

      {/* Usuario / Botón de Sign In */}
      {session?.user ? (
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400 shadow-lg">
            <Image
              src={
                session.user.image ||
                "https://upload.wikimedia.org/wikipedia/commons/2/21/Avatar_pagina_de_usuario.svg"
              }
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden md:block">
            <Link href="/dashboard" className="text-lg font-semibold">
              Hola, {session.user.name}
            </Link>
          </div>
          <button
  onClick={async () => {
    await signOut({ callbackUrl: "/" });
  }}
  className="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600"
>
  Logout
</button>

        </div>
      ) : (
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-sky-400 px-3 py-2 rounded-md text-white hover:bg-sky-500"
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navbar;
