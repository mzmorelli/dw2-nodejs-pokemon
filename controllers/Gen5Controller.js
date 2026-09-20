import express from 'express';
const route = express.Router();

route.get("/gen5",function(req,res){
    const pokemon5 = [
        {dex: 494, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0494_f00_s0.png", nome: "Victini", tipo: "Psíquico/Fogo", nivel: 1},
        {dex: 495, img: "https://resource.pokemon-home.com/battledata/img/pokei128/icon0495_f00_s0.png", nome: "Snivy", tipo: "Planta", nivel: 1}
    ]
    res.render("gen5",{
        pokemon5 : pokemon5
    })
})

export default route;