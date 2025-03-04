package week3_collectionapi;

import java.util.LinkedList;
import java.util.Scanner;

public class InsertAtFirst {

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
		System.out.print("Enter the element to insert at the front: ");
		String newElement = scanner.nextLine();

		// Insert the specified element at the front of the LinkedList
		fruits.addFirst(newElement); // Insert at the front

		// Print the updated LinkedList
		System.out.println("Updated LinkedList after insertion at the front: " + fruits);

		scanner.close();
	}
}
