package week3_collectionapi;

import java.util.LinkedList;
import java.util.Scanner;

public class IterateListFromPosition {

	    public static void main(String[] args) {
	        // Create a LinkedList and add some elements
	        LinkedList<String> fruits = new LinkedList<>();
	        fruits.add("Apple");
	        fruits.add("Banana");
	        fruits.add("Cherry");
	        fruits.add("Date");
	        fruits.add("Elderberry");

	        // Print the original LinkedList
	        System.out.println("Original LinkedList: " + fruits);

	        // Create a Scanner to read user input
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter the starting position (0 to " + (fruits.size() - 1) + "): ");
	        
	        // Read the starting position from the user
	        int startPosition = scanner.nextInt();

	        // Check if the starting position is valid
	        if (startPosition >= 0 && startPosition < fruits.size()) {
	            // Iterate through the LinkedList starting from the specified position
	            System.out.println("Elements from position " + startPosition + ":");
	            for (int i = startPosition; i < fruits.size(); i++) {
	                System.out.println(fruits.get(i));
	            }
	        } else {
	            System.out.println("Invalid position! Please enter a number between 0 and " + (fruits.size() - 1) + ".");
	        }

	        scanner.close();
	    }
	}

