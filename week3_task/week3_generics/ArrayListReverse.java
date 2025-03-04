package week3_generics;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArrayListReverse {

	public static <T> List<T> reverseList(List<T> list) {
		List<T> reversedList = new ArrayList<>(list);
		Collections.reverse(reversedList);
		return reversedList;
	}

	public static void main(String[] args) {
		List<Integer> numbers = List.of(12, 23, 34, 45, 56);// List to be reversed
		System.out.println(reverseList(numbers));
	}
}
