package week3_exceptionhandling;

public class OddNumberException {
	public static void main(String[] args) {
		try {
			// Test with an odd number
			checkEvenNumber(7);
		} catch (IllegalArgumentException e) {
			// Catching the exception and printing the error message
			System.out.println("Caught an exception: " + e.getMessage());
		}

		try {
			// Test with an even number
			checkEvenNumber(4);
		} catch (IllegalArgumentException e) {
			// This block will not be executed
			System.out.println("Caught an exception: " + e.getMessage());
		}
	}

	// Method that checks if the number is even and throws an exception if it's odd
	public static void checkEvenNumber(int number) {
		if (number % 2 != 0) {
			throw new IllegalArgumentException("The number is odd: " + number);
		}
		System.out.println("The number is even: " + number);
	}
}
