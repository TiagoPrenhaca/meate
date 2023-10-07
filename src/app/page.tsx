import Image from 'next/image'
import { Quote, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

import { Hero } from '@/app/components/hero'
import { ItemMenu } from '@/app/components/itemMenu'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="p-12 md:py-12 md:px-24">
        <h1 className="text-center text-yellow-base text-5xl font-bold uppercase">
          Sobre-nós
        </h1>
        <div className="grid mt-16 lg:grid-cols-3 gap-9">
          <div>
            <h3 className="text-2xl font-medium mb-8 text-center md:text-left">
              Há mais de 50 anos servindo qualidade
            </h3>
            <p className="text-sm leading-9 text-justify mb-10">
              Descubra um mundo de sabores ousados e sensações escaldantes no
              MEATE, onde a paixão por grelhar encontra a arte culinária. Como
              principal destino de grelhados e churrascos de São Paulo,
              convidamos você a experimentar as delícias dos carnívoros. Desde
              bifes de dar água na boca cozinhados na perfeição até costelas
              tenras e sem osso, cada prato do MEATE é uma prova da nossa
              dedicação à qualidade, inovação e à procura do grelhado perfeito.
            </p>
          </div>
          <Image
            src="/restaurant.svg"
            width={411}
            height={434}
            alt=""
            className="justify-self-center mb-10"
          />
          <div>
            <h3 className="text-2xl font-medium mb-8 text-center md:text-left">
              Pensando sempre em você para entregar o melhor
            </h3>
            <ul className="text-sm leading-10 pl-4 list-none md:list-disc text-center md:text-left">
              <li>Excelência Culinaria</li>
              <li>Cardápio Inovador</li>
              <li>Ótimas Avaliações</li>
              <li>Clientes Leais</li>
              <li>Prêmios de Reconhecimento</li>
              <li>Serviço Excepcional</li>
              <li>Consistência</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[url('/menu-mobile.svg')] md:bg-[url('/menu.svg')] w-full h-96 flex items-center justify-center">
          <h1 className="text-center text-white text-5xl font-bold uppercase">
            Cardápio
          </h1>
        </div>
        <div className="p-12 md:py-12 md:px-24">
          <h3 className="text-center mb-10 text-xl font-bold">
            Selecione uma categoria no cardápio abaixo:
          </h3>
          <ul className="flex flex-wrap justify-center items-center gap-8 uppercase text-xl mb-16">
            <li className="text-yellow-base">Entradas</li>
            <li>Saladas</li>
            <li>Burguer</li>
            <li>Steaks</li>
            <li>Sobremesas</li>
            <li>Drinks</li>
            <li>Bebidas</li>
          </ul>

          <ItemMenu
            name="Prato de Amostra"
            price="91,99"
            description="Uma variedade tentadora de nossos melhores aperitivos: asas de churrasco, cascas de batata carregadas e pedaços de linguiça defumada."
            recipe="Asas de frango, casca de batata, linguiça defumada, churrasco, queijo cheddar, bacon, creme de leite."
          />
          <ItemMenu
            name="Asa de Frango BBQ Crocante"
            price="53,99"
            description="Asas de frango crocantes temperadas com nosso exclusivo molho barbecue."
            recipe="Asas de frango, molho barbecue, talos de aipo, molho ranch."
          />
          <ItemMenu
            name="Batata Recheada Carregada"
            price="48,99"
            description="Batata recheada carregada com queijo cheddar, pedaços de bacon e um bocado de creme de leite."
            recipe="Batata, queijo cheddar, pedaços de bacon, creme de leite, cebolinha."
          />
          <ItemMenu
            name="Fatias de Linguiça Defumada"
            price="63,99"
            description="Fatias de linguiça defumada servidas com molho picante especial da casa."
            recipe="Linguiça defumada, molho picante especial da casa."
          />
        </div>
      </section>
      <section className="bg-[url('/ratings-mobile.svg')] md:bg-[url('/ratings.svg')] bg-cover bg-fixed w-full flex flex-col items-center justify-center p-12 md:py-12 md:px-24">
        <h1 className="text-center text-white text-5xl font-bold uppercase mb-12">
          Avaliações
        </h1>
        <Quote color="#CA991A" className="rotate-180 mb-12" size={80} />
        <p className="text-white text-center text-2xl leading-9 md:max-w-3xl mb-9">
          Meate é o sonho de qualquer carnívoro! Os bifes são perfeitamente
          preparados e o ambiente é acolhedor e convidativo. Eu daria seis
          estrelas se pudesse!
        </p>
        <p className="font-bold text-2xl text-white">Sara T.</p>
        <div className="flex items-center gap-6 mt-12">
          <div className="bg-yellow-base w-4 h-4 rounded-full" />
          <div className="border-2 w-4 h-4 rounded-full" />
          <div className="border-2 w-4 h-4 rounded-full" />
        </div>
      </section>
      <section className="p-12 md:py-12 md:px-24">
        <h1 className="text-center text-yellow-base text-5xl font-bold uppercase">
          Contato
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Nome"
              className="border border-grey rounded-lg text-2xl text-placeholder py-2 px-4"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border border-grey rounded-lg text-2xl text-placeholder py-2 px-4"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="border border-grey rounded-lg text-2xl text-placeholder py-2 px-4"
            />
          </div>
          <textarea
            placeholder="Conteúdo do e-mail"
            rows={5}
            className="border border-grey rounded-lg text-2xl text-placeholder py-2 px-4"
          />
        </div>
        <div className="flex justify-end mt-7">
          <button className="bg-yellow-base placeholder:bg-yellow-placeholder text-white text-2xl uppercase w-full md:w-64 py-3 rounded-lg">
            Enviar
          </button>
        </div>
      </section>
      <section className="p-12 md:pt-12 md:pb-8 md:px-24 bg-dark">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <Image src="/logo.svg" width={159} height={39} alt="" />
            <p className="text-sm text-white-dark leading-9 text-center mt-11 w-full md:w-96">
              Obrigado por escolher o Restaurante MEATE. Estamos honrados em ser
              o seu destino para bifes escaldantes, churrascos de dar água na
              boca e experiências gastronômicas inesquecíveis. Estamos ansiosos
              por sua visita!
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 md:mt-0">
            <button className="bg-social-base placeholder:bg-social-placeholder p-2 rounded">
              <Facebook size={34} color="white" />
            </button>
            <button className="bg-social-base placeholder:bg-social-placeholder p-2 rounded">
              <Instagram size={34} color="white" />
            </button>
            <button className="bg-social-base placeholder:bg-social-placeholder p-2 rounded">
              <Twitter size={34} color="white" />
            </button>
            <button className="bg-social-base placeholder:bg-social-placeholder p-2 rounded">
              <Youtube size={34} color="white" />
            </button>
          </div>
        </div>
        <p className="text-center text-white-dark mt-7">
          123 Sizzling Street, Grillington, BBQville
          <br />
          (555) 123-4567 - info@meategrill.com
        </p>
      </section>
      <footer className="p-12 md:pt-12 md:pb-10 md:px-24 bg-darker">
        <p className="text-white text-center font-bold uppercase">
          Este site é fictício, qualquer semelhança com nomes, pessoas, factos
          ou situações da vida real terá sido mera coincidência.
        </p>
        <p className="text-white-dark text-center mt-4">
          &copy; 2023 Meate, Feito por{' '}
          <span className="font-bold text-white">Tiago Prenhaca</span>
        </p>
      </footer>
    </>
  )
}
