window.onload=initFunction;

function initFunction() 
{
	var date = new Date();
	var formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
	document.getElementById("date").innerHTML = formatted_date;
}

function confirmPurchase()
{
	var vegPrice = 30.00;
	var fruitPrice = 20.00;
	var chicken = 4.00;
	var pork =  5.00;

	var name = document.getElementById("Name").value;
	var address = document.getElementById("address").value;
	var pOrD = document.querySelector('input[name="PorD"]:checked').value;

	var vegTotal = vegPrice * document.getElementById("vegAmt").value;
	var fruitTotal = fruitPrice * document.getElementById("fruitAmt").value;
	var chickTotal = chicken * document.getElementById("chickAmt").value;
	var porkTotal = pork * document.getElementById("porkAmt").value;

	document.getElementById("output").style.display = "inline";

	var result = "";
	if(name != "") {
		result += name + "<br>";
	}
	if(address != "") {
		result += address + "<br>";
	}
	if(pOrD != "") {
		result += pOrD + "<br>";
	}

	document.getElementById("clientInfo").innerHTML = result;

	var purchase = "";
	if(vegTotal != 0) {
		purchase += document.getElementById("vegAmt").value + 
			"  Veggie Hamper $" + vegTotal.toFixed(2) + "<br>";
	}
	if(fruitTotal != 0) {
		purchase += document.getElementById("fruitAmt").value +
			"  Fruit Hamper $" + fruitTotal.toFixed(2) + "<br>";
	}
	if(chickTotal != 0) {
		purchase += document.getElementById("chickAmt").value + 
			"  Fresh Chicken $" + chickTotal.toFixed(2) + "<br>";
	}
	if(porkTotal != 0) {
		purchase += document.getElementById("porkAmt").value + " kg " + 
			" Pork $" + porkTotal.toFixed(2) + "<br>";
	}

	var total = vegTotal + fruitTotal + chickTotal + porkTotal;
	document.getElementById("orderDetails").innerHTML = purchase + "<br>" + 
		"Total:  $" + total.toFixed(2);
}