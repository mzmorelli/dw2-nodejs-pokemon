import express from 'express';
const route = express.Router();

route.get("/gen2",function(req,res){
    const pokemon2 = [
        {dex: 152, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0152_f00_s0.png", nome: "Chikorita", tipo: "Planta", nivel: 1},
        {dex: 153, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0153_f00_s0.png", nome: "Bayleef", tipo: "Planta", nivel: 2}
    ]
    res.render("gen2",{
        pokemon2 : pokemon2
    })
})

export default route;