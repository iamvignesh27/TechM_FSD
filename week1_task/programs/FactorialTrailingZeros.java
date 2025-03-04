package programs;

public class FactorialTrailingZeros {
	public static void main(String[] args) {
		int number = 925; // user input
		int count = 0; // counting number of trailing zeros
		while (number >= 5) {
			number = number / 5;
			count = count + number;
		}
		System.out.println(count);
	}
}
