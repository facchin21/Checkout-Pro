import express from 'express';
import cors from 'cors'

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
    accessToken : "TU ACEESS TOKEN"
})

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hello World, Mercado Pago!")
})


app.post("/create_preference", async (req,res)=>{
    try{
        const body = {
            items : [
                {
                    title : req.body.title,
                    unit_price : Number(req.body.price),
                    quantity : 1,
                    currency_id : "ARS"
                },
            ],
            back_urls : {
                success : "https://ferminfacchin.website/",
                failure : "https://ferminfacchin.website/",
                pending : "https://ferminfacchin.website/"
            },
            auto_return : "approved"
        }
        const preference = new Preference(client)
        const result = await preference.create({body})
        res.json({
            id: result.id
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            error : "Error al crate la preferencia!"
        })
    }
})

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})
