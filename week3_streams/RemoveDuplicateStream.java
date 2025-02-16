package week3_streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class RemoveDuplicateStream {

	public static void main(String[] args) {
		List<Integer> numbers = Arrays.asList(57, 57, 52, 25, 42, 5, 88, 17, 17, 32, 2, 4, 5, 1);

		List<Integer> uniqueNumbers = numbers.stream().distinct().collect(Collectors.toList());

		System.out.println("List without duplicates: " + uniqueNumbers);
	}
}
