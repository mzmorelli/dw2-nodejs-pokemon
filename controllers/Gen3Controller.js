import express from 'express';
const route = express.Router();

route.get("/gen3",function(req,res){
    const pokemon3 = [
        {dex: 252, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0252_f00_s0.png", nome: "Treecko", tipo: "Planta", nivel: 1},
        {dex: 253, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0253_f00_s0.png", nome: "Grovyle", tipo: "Planta", nivel: 2}
    ]
    res.render("gen3",{
        pokemon3 : pokemon3
    })
})

export default route;