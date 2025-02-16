package week3_streams;

import java.util.Arrays;
import java.util.List;

public class CountStream {

	public static void main(String[] args) {
		List<String> words = Arrays.asList("Velu", "Muthupandi", "Dhanalakshmi", "Leo", "Sathya");

		char targetLetter = 'L';
		long count = words.stream().filter(word -> word.startsWith(String.valueOf(targetLetter))).count();

		System.out.println("Number of words starting with '" + targetLetter + "': " + count);
	}
}
