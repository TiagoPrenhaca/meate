import Image from 'next/image'
import { Row } from 'antd'

export default function Home() {
  return (
    <div className="p-8">
      <div className="absolute left-0 top-0 -z-0 w-full h-full flex items-center justify-center flex-col p-8">
        <Image
          src="/carousel.svg"
          alt=""
          width={1440}
          height={720}
          className="absolute hidden md:block"
        />
        <Image
          src="/carousel-mobile.svg"
          alt=""
          width={393}
          height={852}
          className="absolute block md:hidden"
        />
        <h2 className="relative text-white text-5xl text-center font-bold leading-[87px] p-6">
          Nós entendemos de comida!
        </h2>
        <button className="relative text-yellow border border-yellow rounded-lg p-3 w-full mt-8 uppercase">
          Saiba Mais
        </button>
      </div>
      <header className="z-10 relative">
        <Row justify={'space-between'}>
          <Image src="/logo.svg" alt="" width={163} height={40} />
          <Image
            src="/menu.svg"
            alt=""
            width={36}
            height={36}
            className="cursor-pointer"
          />
        </Row>
      </header>
    </div>
  )
}
