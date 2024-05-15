import imageAirForce from '../../src/assets/Image/zapatilla.jpeg'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { useState } from 'react'

export const Tarjet = () => {

  const [preferenceId, setPreferenceId] = useState(null)
  initMercadoPago('INGRESAR TU CLAVE PUBLIC',{
    locale: "es-AR",
});

const zapatilla = [
  {
    name : "Nike Air Force One",
    price : 12000,
    type: "Zapatilla de Moda",
    srcImage : imageAirForce
    
  },
]
const createPreference = async () => {
  try{
    const response = await axios.post("http://localhost:3000/create_preference", {
    title : "Nike Air Force One",
    quantity : 1,
    price: 12000,
  })

  const { id } = response.data;
  return id;
  }catch(error){
    console.log(error)
  }
}  

const handleBuy = async () => {
  const id = await createPreference()
  if(id){
    setPreferenceId(id)
  }
}
return (
    <article className='bg-slate-300 py-16 px-8 rounded-3xl mt-16
    flex flex-col justify-center items-center'>
        {zapatilla.map((zapatilla, key) => (
            <div key={key}>
                <h2 className='text-center font-bold
                text-xl pb-4'>{zapatilla.name}</h2>
                <img src={zapatilla.srcImage} 
                alt='Imagen de zapatilla' className='transition-all
                duration-300 hover:translate-x-1'/>
                <p className='text-sm font-medium pt-4'>{zapatilla.type}</p>
                <h3 className='text-xl font-bold py-1'>${zapatilla.price}</h3>
                <button className='w-full bg-black text-white
                    font-bold py-2 rounded-3xl transition-all
                    duration-300 hover:bg-slate-700' onClick={handleBuy}>
                  Comprar Ahora
                  </button>
                {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
            </div>
        ))}
    </article>
  )
}
