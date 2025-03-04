package week3_exceptionhandling;

public class TryCatch {
	public static void main(String[] args) {
		try {
			// Attempt to set an invalid age
			setAge(-5);
		} catch (IllegalArgumentException e) {

			System.out.println("Caught an exception: " + e.getMessage());
		}
	}

	// Method that checks the age and throws an exception if it's invalid
	public static void setAge(int age) {
		if (age < 0) {
			throw new IllegalArgumentException("Age cannot be negative: " + age);
		}
		System.out.println("Age set to: " + age);
	}
}