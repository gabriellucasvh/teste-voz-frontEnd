import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderProps = () => [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Sobre',
    url: '#sobre'
  },
  {
    title: 'Tabela',
    url: '#carros'
  },
  {
    title: 'Fale conosco',
    url: '/'
  }
];

const Header = () => {
  return (
    <header className="hidden lg:flex justify-center items-center h-20 w-full text-xl bg-transparent absolute z-50 text-white">
      <div className="flex items-center justify-between w-full px-14">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={65} height={65} />
        </Link>

        {/* Menu com os itens de navegação */}
        <nav>
          <ul className="flex gap-44">
            {HeaderProps().map((item) => (
              <li key={item.title}>
                <Link href={item.url} className="text-white hover:text-neutral-300 transition-colors duration-200">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações para o usuário */}
        <div className="flex items-center gap-5">
          <Link href="/">
            <span className='hover:underline'>Entrar</span>
          </Link>
          <Link href="/">
            <User size={40} className="hover:bg-white hover:text-black p-2 transition-colors duration-200 rounded-full"/>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
