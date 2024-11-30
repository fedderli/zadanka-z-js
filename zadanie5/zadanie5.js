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
    removeProduct(productName){
        this.prodcutsList = this.prodcutsList.filter(product => product.name != productName)
    }
    showCart(){
        console.log("w wózku jest:")
    this.prodcutsList.forEach(product => {console.log(product.name)})
        }
}



const mleko = new Product("mleko",4,2)
const piwo = new Product("Piwo",5,1)

const cart = new Cart()
cart.addProduct(mleko)
cart.addProduct(piwo)

cart.showCart()

cart.removeProduct("Piwo")

cart.showCart()


