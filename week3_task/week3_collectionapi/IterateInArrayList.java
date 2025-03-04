package week3_collectionapi;

import java.util.ArrayList;

public class IterateInArrayList {

	public static void main(String[] args) {
		// Create an ArrayList and add some elements
		ArrayList<String> fruits = new ArrayList<>();
		fruits.add("Apple");
		fruits.add("Banana");
		fruits.add("Cherry");
		fruits.add("Date");
		fruits.add("Elderberry");

		for (String fruit : fruits) {
			System.out.println(fruit);
		}

	}
}