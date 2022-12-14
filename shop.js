var shop = [
	{"item":"Apple","price":6.00},
	{"item":"Banana","price":2.00},
	{"item":"Orange","price":1.00}
]
var cart = [];
var userinput;
function startApp(){
	var list = '';
	for(i=0;i<shop.length;i++){
		list += `${i}. ${shop[i].item} - ₵${shop[i].price}\n`;
	}
	userinput = prompt(`Welcome to My Shop!\nWhat would you like to buy?\n${list}\n\nPress 12 to list cart`);
	if(!isNaN(userinput)) {
		if(userinput == 12){
			if(cart.length > 0){
				var myCart = '';
				var totalPrice;
				for(i=0;i<cart.length;i++){
					myCart += `${i}. ${cart[i].item} - ₵${cart[i].price}\n`;
					totalPrice += cart[i].price;
				}
				checkout = confirm(`Your cart\nList of items you have?\n${myCart}\n\nWould you like to checkout?
				`);
				if(checkout){
					alert("Thanks for shopping with us");
					cart = [];;
					startApp();
				}else{
					startApp();
				}
			}else{
				alert("You have no items in your cart");
				startApp();
			}
		}else{
			var selected = shop[userinput];
			userinput = prompt('How many '+selected.item+'s would you like to buy');
			if(!isNaN(userinput)){
				var quantity = userinput;
				var price = (selected.price*quantity);
				addToCart = confirm('Okay that will be ₵'+price+'\n Add to cart?');
				if(addToCart){
					cart.push({"item":selected.item,"price":price});
					alert(selected.item+' of ₵'+price+' added to cart');
					startApp();
				}else{
					startApp();
				}
			}else{
				alert("Please a number");
				startApp();
			}
		}
	}else{
		alert("Please Enter Item number");
		startApp();
	}
}
startApp();
