package finaL;

public class FinalKeyword {

	public static void main(String[] args) {
		// Using the final class
		FinalVariable finalClassVariable = new FinalVariable();
		System.out.println("Value of G: " + finalClassVariable.getG());
		finalClassVariable.showMessage();

		// Using the final method
		DerivedClass derived = new DerivedClass();
		derived.display();
		derived.showDetails();
	}
}
