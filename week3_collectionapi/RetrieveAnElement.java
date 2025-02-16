package week3_collectionapi;

import java.util.ArrayList;
import java.util.Scanner;

public class RetrieveAnElement {

	public static void main(String[] args) {
		// Create an ArrayList and add some elements
		ArrayList<String> fruits = new ArrayList<>();
		fruits.add("Apple");
		fruits.add("Banana");
		fruits.add("Cherry");
		fruits.add("Date");
		fruits.add("Elderberry");

		// Print the original ArrayList
		System.out.println("Original ArrayList: " + fruits);

		// Create a Scanner to read user input
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter the index of the element you want to retrieve (0 to " + (fruits.size() - 1) + "): ");

		// Read the index from the user
		int index = scanner.nextInt();

		// Check if the index is valid
		if (index >= 0 && index < fruits.size()) {
			// Retrieve and print the element at the specified index
			String element = fruits.get(index);
			System.out.println("Element at index " + index + ": " + element);
		} else {
			System.out.println("Invalid index! Please enter a number between 0 and " + (fruits.size() - 1) + ".");
		}

		scanner.close();
	}
}
