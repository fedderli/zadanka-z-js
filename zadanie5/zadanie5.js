class Product{
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}


class Cart{
  
    constructor(){
        this.prodcutsList = []
    }


    addProduct(product){
        this.prodcutsList.push(product)
    }
    removeProduct(){

    }
    showCart(){

    }
}



const mleko = new Product("mleko",4,2)
const piwo = new Product("Piwo",5,1)

const cart = new Cart()
cart.addProduct(mleko)
cart.addProduct(piwo)

console.log(cart.prodcutsList[0].name)

