'use client';

import { CalendarDays, ChevronLeft, ChevronRight, Gauge, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const DemosProps = () => [
  {
    id: 1,
    img: '/carros/mustang-vermelho.svg',
    title: 'Mustang',
    year: '2015',
    kmh: '180 Km/h',
    energy: '9/10',
    users: '8/10',
    url: '#carros',
  },
  {
    id: 2,
    img: '/carros/mustang-cinza.svg',
    title: 'Mustang',
    year: '2015',
    kmh: '180 Km/h',
    energy: '9/10',
    users: '8/10',
    url: '#carros',
  },
  {
    id: 3,
    img: '/carros/mustang-vermelho-2.svg',
    title: 'Mustang',
    year: '2015',
    kmh: '180 Km/h',
    energy: '9/10',
    users: '8/10',
    url: '#carros',
  },
];

const Demos = () => {

  {/* Aqui está a lógica para o carrossel de cards */}

  const [cards, setCards] = useState(DemosProps());

  const handleNext = () => {
    const updatedCards = [...cards];
    const firstCard = updatedCards.shift(); // Remove o primeiro card
    if (firstCard) updatedCards.push(firstCard); // Adiciona o primeiro no final
    setCards(updatedCards);
  };

  const handlePrev = () => {
    const updatedCards = [...cards];
    const lastCard = updatedCards.pop(); // Remove o último card
    if (lastCard) updatedCards.unshift(lastCard); // Adiciona o último no início
    setCards(updatedCards);
  };

  return (
    <section className="lg:h-[80vh] flex flex-col justify-center items-center" id="carros">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-10">

        {/* Estrutura dos cards */}
        
        {cards.slice(0, 3).map((item) => (
          <article
            key={item.id}
            className="flex flex-col items-center border border-black rounded-3xl shadow-lg bg-background min-h-24 min-w-60 p-6 relative"
          >
            <div className="absolute w-full top-[-60px] left-[136px] transform -translate-x-1/2">
              <Image
                src={item.img}
                width={200}
                height={200}
                alt={`Imagem do ${item.title}`}
                className="border-transparent"
                quality={100}
              />
            </div>
            <h2 className="text-lg font-semibold mt-10">{item.title}</h2>
            <ul className="flex w-full flex-col gap-5 mt-4 text-left">
              <li className="flex items-center gap-2 text-sm">
                <CalendarDays size={16} /> {item.year}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Gauge size={16} /> {item.kmh}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Zap size={16} /> {item.energy}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Users size={16} /> {item.users}
              </li>
            </ul>
            <button
              onClick={() => document.getElementById("carros")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 w-full py-2 border border-black hover:bg-black hover:text-white rounded-xl font-medium  transition-colors duration-200"
            >
              Ver carro
            </button>
          </article>
        ))}
      </div>

      {/* Botões de navegação para rolar os cards */}
      <div className="hidden lg:flex justify-between w-full px-24 absolute">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full hover:bg-neutral-300 transition-colors duration-200"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full hover:bg-neutral-300 transition-colors duration-200"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Demos;
