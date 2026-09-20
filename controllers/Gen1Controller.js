import express from 'express';
const route = express.Router();

route.get("/gen1",function(req,res){
    const pokemon1 = [
        {dex: "001", img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0001_f00_s0.png", nome: "Bulbasaur", tipo: "Planta/Venenoso", nivel: 1},
        {dex: "002", img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0002_f00_s0.png", nome: "Ivysaur", tipo: "Planta/Venenoso", nivel: 2},
    ]
    res.render("gen1", {
        pokemon1 : pokemon1
    })
})

export default route;