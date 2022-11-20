class Store {
	constructor(paymentProcessor)
	{
		//this.paypal = new Paypal();
		//this.user = user;
		//this.stripe = new Stripe(user)
		this.paymentProcessor = paymentProcessor
	}

	purchaseBike(quantity)
	{
		this.paymentProcessor.pay(200 * quantity);
		//this.stripe.makePayment(200*quantity*100)
	}
	purchaseHelmet(quantity)
	{
		this.paymentProcessor.pay(15 * quantity);
		
		//this.stripe.makePayment(16*quantity*100)
	}
}

class StripePaymentProcessor {
	constructor(user){

		this.stripe = new Stripe(user);
	}

	pay(amountInDollars)
	{
		this.stripe.makePayment(amountInDollars*100)
	}
}

class PaypalPaymentProcessor {
	constructor(user){

		this.paypal = new Paypal(user);
	}

	pay(amountInDollars)
	{
		this.paypal.makePayment(amountInDollars*100)
	}
}

class Stripe{
	constructor(user)
	{
		this.user = user
	}
	makePayment(amountInCents){
		console.log(`${this.user} make payment of $${amountInCents/100} with Stripe`)
	}
}

class Paypal {
	constructor(user)
	{
		this.user = user
	}
	makePayment(amountInCents){
		console.log(`${this.user} make payment of $${amountInCents/100} with Paypal`)
	}
}

const store = new Store(new StripePaymentProcessor('John'))
store.purchaseBike(2)
store.purchaseHelmet(2)
