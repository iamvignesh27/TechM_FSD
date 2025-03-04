package week3_collectionapi;

import java.util.LinkedList;
import java.util.Scanner;

public class InsertAtSpecifiedPosition {

	    public static void main(String[] args) {
	        // Create a LinkedList and add some initial elements
	        LinkedList<String> fruits = new LinkedList<>();
	        fruits.add("Apple");
	        fruits.add("Banana");
	        fruits.add("Cherry");
	        fruits.add("Date");

	        // Print the original LinkedList
	        System.out.println("Original LinkedList: " + fruits);

	        // Create a Scanner to read user input
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter the element to insert: ");
	        String newElement = scanner.nextLine();

	        System.out.print("Enter the position to insert the element (0 to " + fruits.size() + "): ");
	        int position = scanner.nextInt();

	        // Check if the position is valid
	        if (position >= 0 && position <= fruits.size()) {
	            // Insert the specified element at the specified position
	            fruits.add(position, newElement);

	            // Print the updated LinkedList
	            System.out.println("Updated LinkedList after insertion: " + fruits);
	        } else {
	            System.out.println("Invalid position! Please enter a number between 0 and " + fruits.size() + ".");
	        }

	           scanner.close();
	    }
	}

