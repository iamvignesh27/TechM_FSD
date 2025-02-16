package week3_streams;

import java.util.Arrays;
import java.util.List;

public class MaxMinStream {

	public static void main(String[] args) {
		List<Integer> numbers = Arrays.asList(15, 18, 29, 68, 160, 3);

		int max = numbers.stream().reduce(Integer.MIN_VALUE, Integer::max);
		int min = numbers.stream().reduce(Integer.MAX_VALUE, Integer::min);

		System.out.println("Maximum Value: " + max);
		System.out.println("Minimum Value: " + min);
	}
}
