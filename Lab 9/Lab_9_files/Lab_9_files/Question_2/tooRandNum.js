function CalculateMysteryNumber() 
{
	/*  Purpose: This function produces a 'random' number the user is
	    supposed to guess.  This number is an integer between
	    one and four.
		Precondition: This function does not require any external values.
		Postcondition: The value, 1-4 is returned to the main
	    				program.			  	 
	*/

		
     var intAnswer;	//'random' number created and returned to main program
     var intSeed;           //number to help produce 'random' value

       // get input from user and convert string to number
     intSeed = window.prompt("Please enter a number to help me create the secret number.");

     intSeed = parseInt(intSeed);

       // calculation to get "random" number
   	 intAnswer = Math.floor(Math.random() * 10 + intSeed) % 4;
    
	intAnswer++;		// makes the number an integer between 1 and 4

       // Let user know that the number has been created
     document.write("<BR>I've now created the secret number!<BR>");

       // return value to main program section
     return intAnswer;
}