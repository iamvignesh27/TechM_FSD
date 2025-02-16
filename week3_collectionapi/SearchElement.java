package week3_collectionapi;

import java.util.ArrayList;
import java.util.Scanner;

public class SearchElement {

	public static void main(String[] args) {
		// Create an ArrayList and add some initial elements
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
		System.out.print("Enter the element you want to search for: ");
		String searchElement = scanner.nextLine();

		// Search for the element in the ArrayList
		if (fruits.contains(searchElement)) {
			System.out.println(searchElement + " is found in the ArrayList.");
		} else {
			System.out.println(searchElement + " is not found in the ArrayList.");
		}

		scanner.close();
	}
}
