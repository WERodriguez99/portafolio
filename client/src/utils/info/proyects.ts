
import IProyects from "../../interface/proyects";
import wallet from '../../Images/wallet.png'

const info: IProyects[] = [
    {
        title: "Wall-et",
        img: wallet,
        
        tec: {
            front: " React | Redux | Css Modules  ",
            back: " Express | Sequelize | Postgres ",
        },
        
        ENG: "",
        ESP: " Aplicación pensada con el objetivo de que los usuarios puedan transferir, y retirar dinero, entre otras. ",
        
    }, {
        title: "MyNotes",
        img: wallet,
        
        tec: {
            front: " React | Redux | Sass  ",
            back: " Express | MongoDB | Mongoose ",
        },

        ENG: "",
        ESP: " Con MyNotas vas a poder crearte una cuenta en la cual vas a poder crear tus notas, modificar y eliminar las mismas.",
        
        
    }, {
        title: "Poke-app",
        img: wallet,
        tec: {
            front: " React | Redux | Css Modules  ",
            back: " Express | Sequelize | Postgres ",
        },        
        
        ENG: "",
        ESP: " Poke-app es una aplicacion diseñada para que los usuarios puedan buscar, con diversas filtros, a pokemones y ver sus datos. En la app tambien es posible crear pokemones. ",
        

    }
]

export default info;