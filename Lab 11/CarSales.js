// JavaScript Document

function CarSales()
{
	//Declare Variables
		var RETURNING_CUSTOMER = .1;
		var SUN_ROOF = 300;
		var TAX_RATE = .07;

		var tradeIn;
		var carYear;
		var carCondition;
		var tradeInValue;

		var returnCust;
		var sunRoofOption;

		var carPrice;
		var CarReductionPrice;
		var reduction;
		var subtotal;
		var tax;
		var option;


		option = window.prompt("Please select the cars number on the list provided (1, 2, 3)");
		tradeIn = window.prompt("Do you have a trade in vehicle? (yes, no)", "no");

		if (option == '1')
			{
				carPrice == 35000;
			}
		else if (option == '2')
			{
				carPrice == 27750;
			}
		else
			{
				carPrice == 55000;
			}

		if(tradeIn == "yes")
			{
				carYear = window.prompt("What is the car Year?");
				carCondition = window.prompt("What is the cars condition? (best, good, Poor)", "Poor");

				if (carYear >= 2018)
					{
						if(carCondition == "best")
							{
								tradeInValue == 5000;
							}
						else if (carCondition == "good")
							{
								tradeInValue == 3000;
							}
						else
							{
								tradeInValue == 1000;
							}
					}
				else if (carYear >= 2005 && carYear <= 2017)
					{
						if(carCondition == "best")
							{
								tradeInValue == 3000;
							}
						else if (carCondition == "good")
							{
								tradeInValue == 1000;
							}
						else
							{
								tradeInValue == 500;
							}
					}
				else
				{
					document.write("Sorry we cannot accept a car this old as a trade in.")
					tradeInValue == 0;
				}
			}

		sunRoofOption = window.prompt("Would you like a sun roof? (yes, no)", "no")

		if (sunRoofOption == "yes")
			{
				returnCust = window.prompt("Are you a returning customer? (yes, no)", "no")
				if(returnCust == "yes")
					{
						carPrice = carPrice + SUN_ROOF;
						reduction = carPrice * RETURNING_CUSTOMER;
						CarReductionPrice = carPrice - reduction;
						tax = carPrice * TAX_RATE;
						subtotal = carPrice + TAX_RATE;

						document.write("Congratulations, thank you for choosing DC & H Car Sales <br/>")
						document.write("With the included Sun Roof your price is $" + carPrice + "<br/>")
						document.write("With your returning customer discount that comes to $" + CarReductionPrice + "<br/>")
						document.write("You saved $" + reduction + "<br/>")
						document.write("Your subtotal is $" + subtotal)

					}
				else
					{
						carPrice = carPrice + SUN_ROOF;
						tax = carPrice * TAX_RATE;
						subtotal = carPrice + TAX_RATE;

						document.write("Congratulations, thank you for choosing DC & H Car Sales <br/>")
						document.write("With the included Sun Roof your price is $" + carPrice + "<br/>")
						document.write("This does not include a returning customer discount.<br/>")
						document.write("Your subtotal is $" + subtotal)
					}
			}
		else
			{
				returnCust = window.prompt("Are you a returning customer? (yes, no)", "no")
				if(returnCust == "yes")
					{

						reduction = carPrice * RETURNING_CUSTOMER;
						CarReductionPrice = carPrice - reduction;
						tax = carPrice * TAX_RATE;
						subtotal = carPrice + TAX_RATE;

						document.write("Congratulations, thank you for choosing DC & H Car Sales <br/>")
						document.write("You have chosen not to include a sun roof<br/>")
						document.write("With your returning customer discount that comes to $" + CarReductionPrice + "<br/>")
						document.write("You saved $" + reduction + "<br/>")
						document.write("Your subtotal is $" + subtotal)

					}
				else
					{

						tax = carPrice * TAX_RATE;
						subtotal = carPrice + TAX_RATE;

						document.write("Congratulations, thank you for choosing DC & H Car Sales <br/>")
						document.write("You have chosen not to include the sun roof. <br/>")
						document.write("This does not include a returning customer discount.<br/>")
						document.write("Your subtotal is $" + subtotal)
					}
			}
}
