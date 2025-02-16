package week3_generics;

import java.util.Arrays;
import java.util.List;

public class ElementSearch {

	public static <T> int searchElement(List<T> list, T target) {
		return list.indexOf(target);
	}

	public static void main(String[] args) {
		List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 4, 7, 8, 9, 10);
		List<String> names = Arrays.asList("Raakesh", "Rocky", "Velu", "Muthupandi", "Anniyan");
		System.out.println("The index target is " + searchElement(numbers, 10));
		System.out.println("The index target is " + searchElement(names, "Muthupandi"));
	}
}
