import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-[url('/carousel-mobile.svg')] md:bg-[url('/carousel.svg')] h-full bg-cover bg-fixed relative p-10 md:py-12 md:px-16">
      <header className="z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center">
          <Image src="/logo.svg" alt="" width={163} height={40} />
          <div className="hidden md:block justify-self-center">
            <ul className="flex items-center gap-8 text-white uppercase">
              <li className="text-yellow border-b border-yellow pb-1">Home</li>
              <li className="pb-1">Sobre-Nós</li>
              <li className="pb-1">Cardápio</li>
              <li className="pb-1">Contato</li>
            </ul>
          </div>
          <div className="justify-self-end">
            <button className="block md:hidden">
              <Image
                src="/menu.svg"
                alt=""
                width={36}
                height={36}
                className="cursor-pointer"
              />
            </button>
            <button className="hidden md:flex items-center justify-center bg-yellow text-white w-40 h-10 rounded-xl uppercase">
              Reserve Agora
            </button>
          </div>
        </div>
      </header>
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-6xl text-center text-white font-bold">
          Nós entendemos de comida!
        </h2>
        <p className="text-lg md:text-2xl text-white text-justify md:text-center leading-10 mt-11">
          Somos especializados na elaboração de pratos de dar água na boca.{' '}
          <br />
          <br className="block md:hidden" />
          Utilizando os melhores cortes de carne, ingredientes premium e
          técnicas culinárias exclusivas.
        </p>
        <button className="flex items-center justify-center border border-yellow w-full md:w-56 h-12 rounded-xl uppercase text-xl text-yellow mt-20">
          Saiba Mais
        </button>
      </div>
    </div>
  )
}

export { Hero }
