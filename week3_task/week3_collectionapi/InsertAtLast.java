package week3_collectionapi;

import java.util.LinkedList;
import java.util.Scanner;

public class InsertAtLast {
	public static void main(String[] args) {
		// Create a LinkedList and add some initial elements
		LinkedList<String> fruits = new LinkedList<>();
		fruits.add("Apple");
		fruits.add("Banana");
		fruits.add("Cherry");

		// Print the original LinkedList
		System.out.println("Original LinkedList: " + fruits);

		// Create a Scanner to read user input
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter the element to insert at the end: ");
		String newElement = scanner.nextLine();

		// Insert the specified element at the end of the LinkedList
		fruits.add(newElement); // Insert at the end

		// Print the updated LinkedList
		System.out.println("Updated LinkedList after insertion at the end: " + fruits);

		scanner.close();
	}
}
