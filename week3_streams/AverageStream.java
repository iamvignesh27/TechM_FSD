package week3_streams;

import java.util.Arrays;
import java.util.List;

public class AverageStream {

	public static void main(String[] args) {
		List<Integer> numbers = Arrays.asList(27, 45, 18, 17, 33);

		double average = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);

		System.out.println("The Average is : " + average);
	}
}
