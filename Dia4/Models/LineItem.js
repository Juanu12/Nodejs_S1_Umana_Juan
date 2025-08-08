// Un pedido conoce sus LineItem
// Pero cada lineItem no conoce su pedido


class LineItem {

    constructor(producto, cantidad, precioUnitario){
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;


    }

    subtotal() {
        return this.cantidad * this.precioUnitario;
    }



}

module.exports = LineItem;