
// Antes de OCP , se modifica la clase existente 

class PaymentService {
    pay(type) {
        if (type === 'paypal') { /* Funcion*/ }
        else if (type === 'stripe') { /* Funcion */ }
    }
}

// Se hace una extensión para agregar nuevas funcionlaidades y no tocar la clase original

class Payment {
    pay() {}
}

class PayPalPayment extends Payment {
    pay() { /* pago con PayPal */ }
}

class StripePayment extends Payment {
    pay() { /* pago con Stripe */ }
}
