type ItemProps = {
  name: string
  price: string
  description: string
  recipe: string
}

const ItemMenu = ({ name, price, description, recipe }: ItemProps) => {
  return (
    <div className="mb-6 border-b border-dashed border-grey pb-6">
      <div className="flex items-center flex-col md:flex-row">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="ml-auto text-yellow-base font-bold text-2xl mt-2">
          R$ {price}
        </p>
      </div>
      <p className="my-5 text-lg">{description}</p>
      <p className="text-lg">Ingredientes: {recipe}</p>
    </div>
  )
}

export { ItemMenu }
