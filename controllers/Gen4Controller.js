import express from 'express';
const route = express.Router();

route.get("/gen4",function(req,res){
    const pokemon4 = [
        {dex: 387, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0387_f00_s0.png", nome: "Turtwig", tipo: "Planta", nivel: 1},
        {dex: 388, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0388_f00_s0.png", nome: "Grotle", tipo: "Planta", nivel: 2}
    ]
    res.render("gen4",{
        pokemon4 : pokemon4
    })
})

export default route;