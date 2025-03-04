package programs;

import util.Constants;

public class Division {
	public static void main(String[] args) {
		int dividend = 100;
		int divisor = 5;

		int quotient = 0;
		int tempDividend = dividend;

		while (tempDividend >= divisor) {
			tempDividend -= divisor;
			quotient++;
		}

		int remainder = dividend;
		while (remainder >= divisor) {
			remainder -= divisor;
		}

		System.out.println(Constants.QUOTIENT + quotient);
		System.out.println(Constants.REMAINDER + remainder);
	}
}
