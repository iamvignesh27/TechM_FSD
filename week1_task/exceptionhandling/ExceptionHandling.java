package exceptionhandling;

import java.util.Scanner;

import util.Constants;

public class ExceptionHandling {

	public void processInput() {
		Scanner scanner = new Scanner(System.in);

		try {
			// getting user input
			System.out.println(Constants.ENTER_NUMBER);
			double userInput = scanner.nextInt();
			// input is not zero to prevent division error
			if (userInput == 0) {
				System.out.println(Constants.ZERO_EXCEPTION);
			} else {
				double reciprocal = 1 / userInput;
				System.out.println(Constants.RECIPROCAL_IS + reciprocal);
			}

		} catch (java.util.InputMismatchException e) {
			System.out.println(Constants.INVALID_INPUT);
		}
		scanner.close();
	}

	public static void main(String[] args) {
		ExceptionHandling exceptionHandlings = new ExceptionHandling();
		exceptionHandlings.processInput();

	}
}
