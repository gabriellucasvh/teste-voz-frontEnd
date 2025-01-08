'use client'

import React from 'react'

{/*Aqui está o centúdo da seção sobre o mustang*/}

const Sobre = () => {
    return (
        <section className='bg-no-repeat bg-cover w-full h-screen' style={{ backgroundImage: 'url(/sobre.png)' }} id='sobre'>
            <div className='w-full lg:w-1/2 right-0 h-screen absolute'>
                <div className='flex flex-col justify-center items-center lg:items-end p-10 text-white w-1/2 h-full space-y-7 lg:px-20 glass'>
                    <h1 className='text-6xl lg:text-7xl'>
                        Mustang
                    </h1>
                    <p className='text-xl font-thin text-center lg:text-right'>
                        O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World&apos;s Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
                    </p>
                    <button className='rounded border border-white py-2 px-16 bg-transparent hover:bg-white hover:text-black transition-colors duration-200' onClick={() => document.getElementById("carros")?.scrollIntoView({ behavior: "smooth" })}>Ver carros</button>
                </div>
            </div>
        </section>
    )
}

export default Sobre
