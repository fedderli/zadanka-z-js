const produkty = [
    {name:'Mleko',price:4,category:'nabial'},
    {name:'Ser',price:3,category:'nabial'},
    {name:'pomidor',price:2,category:'warzywo'},
    {name:'marchew',price:3,category:'warzywo'},
    {name:"woda",price:1,category:'napoj'},
    {name:"sok pomaranczowy",price:7,category:'napoj'},
]
const filtrowanie = (produkty , {category ,minPrice,maxPrice}) =>{
    
    return produkty
        .filter(produkt =>  (produkt.price >= minPrice) && (produkt.price <= maxPrice))
        .filter(produkt =>  produkt.category === category)
    
    
}


const przefiltrowanyProdukt = filtrowanie(produkty,{category:'warzywo',minPrice:1,maxPrice:3})

przefiltrowanyProdukt.forEach(produkt => console.log(`produkt: ${produkt.name}, Kategoria : ${produkt.category}, cena: ${produkt.price}`));

