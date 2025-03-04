package week3_streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CaseConversionStream {

	public static void main(String[] args) {
		List<String> words = Arrays.asList("Velu", "Muthupandi", "Dhanalakshmi", "Leo", "Sathya");

		List<String> upperCaseWords = words.stream().map(String::toUpperCase).collect(Collectors.toList());

		List<String> lowerCaseWords = words.stream().map(String::toLowerCase).collect(Collectors.toList());

		System.out.println("Uppercase: " + upperCaseWords);
		System.out.println("Lowercase: " + lowerCaseWords);
	}
}
