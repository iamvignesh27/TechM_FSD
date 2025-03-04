package week3_collectionapi;

import java.util.LinkedList;

public class IterateThroughAll {

	public static void main(String[] args) {
		// Create a LinkedList and add some elements
		LinkedList<String> fruits = new LinkedList<>();
		fruits.add("Apple");
		fruits.add("Banana");
		fruits.add("Cherry");
		fruits.add("Date");
		fruits.add("Elderberry");

		System.out.println("Using for-each loop:");
		for (String fruit : fruits) {
			System.out.println(fruit);
		}

	}
}
