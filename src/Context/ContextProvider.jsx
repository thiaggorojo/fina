import React,{createContext, useContext, useState} from 'react'


const Context = createContext()


const ContextProvider = ({children}) => {
    const products=[
        {
            img:'https://www.infobae.com/new-resizer/UziR9oywZI1oNo49QREJeXS4lA8=/600x600/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/667AFAFLSNCJNGWECJC47KRXO4.jpg',
            nombre:"PC/PS5",
            Tituo:"FIFA 23",
            precio:"1950",
            id:1,
            stock: 10,

            descripcion:"FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA"

        },
        {
            img:"https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/11/Call-of-Duty-Modern-Warfare-II-Wallpaper.jpg",
            nombre:"PC/PS4",
            Tituo:"CALL OF DUTY MW",
            precio:"2950",
            descripcion:"Call of DutyModern Warfare es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision. Es el decimosexto juego de la saga Call of Duty y es un reinicio de la serie Modern Warfare.​​​ Fue lanzado el 25 de octubre de 2019",
            id:2,
           stock: 10,


        },
        {
            img:"https://image.api.playstation.com/vulcan/ap/rnd/202106/0117/I558OkMNBieAq24dzWwjjE4K.png",
            nombre:"PC",
            Tituo:"BATTLEFIELD 2042",
            precio:"1950",
            id:3,
            descripcion:"Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por EA Digital Illusion CE, Criterion Games, Ripple Effect y distribuido por Electronic Arts.​",
            stock: 10,

        },
        {
            img:"https://passion-stickers.com/2701-large_default/counter-strike-global-offensive-decals.jpg",
            nombre:"PC",
            Tituo:"COUNTER STRIKE GO",
            precio:"1000",
            id:4,
            descripcion:"Counter-Strike: Global Offensive es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment. Es el cuarto juego de la saga Counter-Strike." ,
             stock: 10,

        },
        {
            img:"https://images.nintendolife.com/6dd1e032c4406/fortnite-cover.cover_large.jpg",
            nombre:"PC",
            Tituo:"FORTNITE",
            precio:"250",
            id:5,
            descripcion:"Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas." ,
            stock: 10,

        },
        {
            img:"https://image.api.playstation.com/vulcan/ap/rnd/202103/1501/enihR6QwSYiWCNl2HdPfV6R6.png",
            nombre:"PC",
            Tituo:"RUST",
            precio:"950",
            id:6,
            descripcion:"Rust es un juego de supervivencia creado por Facepunch Studios​. La inspiración del videojuego viene de múltiples juegos del género de supervivencia. Su lanzamiento oficial se produjo el 8 de febrero de 2018, ​ aunque estuvo en acceso anticipado desde 2013." ,
            stock: 10,

        },
        {
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/640px-Rocket_League_coverart.jpg",
            nombre:"PC/PS4",
            Tituo:"ROCKET LEAGUE",
            precio:"950",
            id:7,
            descripcion:"Rocket League es un videojuego que combina el fútbol con los vehículos. Fue desarrollado por Psyonix y lanzado el 7 de julio de 2015. Fue lanzado Free to play en septiembre de 2020. Se encuentra disponible en español, y tiene modos de juego cooperativo, de un jugador y en línea." ,
            stock: 10,

        },
        {
            img:"https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
            nombre:"PC",
            Tituo:"MINECRAFT",
            precio:"450",
            id:8,
            descripcion:"Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, ​ y posteriormente desarrollado por Mojang Studios.​" ,
stock: 10,

        },
        {
            img:"https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/4/3/7/d/ac8f-0a10-439e-8884-0867014b94a0.jpg",
            nombre:"PC/PS4/PS5",
            Tituo:"GRAN TURISMO 4",
            precio:"950",
            id:9,
            descripcion:"Gran Turismo 4 es un videojuego para la consola PlayStation 2. Fue comercializado el 7 de septiembre de 2004 en Japón y Hong Kong, el 20 de octubre de 2004 en los Estados Unidos y el 9 de junio de 2005 en Europa." ,
stock: 10,

        },
        {
            img:"https://sm.ign.com/ign_es/game/r/rainbow-si/rainbow-six-siege_d2b2.jpg",
            nombre:"PC/PS4/PS5",
            Tituo:"RAINBOW SIX",
            precio:"950",
            id:10,
            descripcion:"Tom Clancy's Rainbow Six: Siege es un videojuego de disparos táctico en línea desarrollado por Ubisoft Montreal y distribuidor por Ubisoft. Salió a la venta en todo el mundo para Microsoft Windows, PlayStation 4 y Xbox One el 1 de diciembre de 2015 y para PlayStation 5 y Xbox Series X|S el 1 de diciembre de 2020." ,
stock: 10,

        },
        {
            img:"https://image.api.playstation.com/cdn/JP0365/CUSA08806_00/D9W8V0pZd3Q36y4xD3x9HqwRqeoxX7oSYz9uA8Nyviev43ixO04rsXAsNh9OC14g.png",
            nombre:"PC/PS4",
            Tituo:"ARK",
            precio:"450",
            id:11,
            descripcion:"Ark: Survival Evolved es un videojuego de acción-aventura y supervivencia desarrollado por Studio Wildcard, Instinct Games, Efecto Studio y Virtual Basement. Lanzado oficialmente el 29 de agosto de 2017 para Windows, Xbox One, Nintendo Switch, PlayStation 4, IOS y Android." ,
stock: 10,

        },
        {
            img :"https://images.immediate.co.uk/production/volatile/sites/3/2022/04/God-of-War-Ragnarok-release-date-7ce4b11.jpg?quality=90&resize=620,414",
            nombre:"PC/PS4/PS5",
            Tituo:"GOD OF WAR",
            precio:"950",
            id:12,
            stock: 10,

            descripcion:"God of War es una franquicia de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment. Se basa en las aventuras de un semidiós espartano, Kratos, quien se enfrenta a diversos personajes de la mitología griega y nórdica." ,
        }

    ]

 const getProductById = (id) =>{
    return products.find(producto => producto.id === Number(id))
 }
 const getProductCartById = (id) => {
    return cart.find(producto => producto.id === Number(id))
 }

 const [cart, setCart] = useState([])
 const isInCart = (id) => (cart.some(producto => producto.id === Number(id)))
 
 const addProductCart = (id, quantity) => {
    if(isInCart (id)){
        setCart(cart.map(producto =>{
            if(producto.id == id){
                producto.quantity = quantity
            }
            return producto
        }))
        
    } else{
 
        setCart([...cart, { ... getProductById (id) , quantity : quantity}])
 
  } 
  }
 
 const getTotal = () => {
    let total = 0
    cart.forEach(producto => total += producto.precio * producto.quantity)
    return total
 }
    return (
    <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
  }

export const useCustomContext = () => useContext(Context)

export default ContextProvider