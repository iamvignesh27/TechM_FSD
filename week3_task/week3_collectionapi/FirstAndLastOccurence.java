package week3_collectionapi;

import java.util.LinkedList;
import java.util.Scanner;

public class FirstAndLastOccurence {

	    public static void main(String[] args) {
	        // Create a LinkedList and add some initial elements
	        LinkedList<String> fruits = new LinkedList<>();
	        fruits.add("Apple");
	        fruits.add("Banana");
	        fruits.add("Cherry");
	        fruits.add("Date");
	        fruits.add("Banana"); // Duplicate for testing
	        fruits.add("Elderberry");

	        // Print the original LinkedList
	        System.out.println("Original LinkedList: " + fruits);

	        // Create a Scanner to read user input
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter the element to search for: ");
	        String searchElement = scanner.nextLine();

	        // Find the first occurrence
	        int firstIndex = fruits.indexOf(searchElement);
	        // Find the last occurrence
	        int lastIndex = fruits.lastIndexOf(searchElement);

	        // Print the results
	        if (firstIndex != -1) {
	            System.out.println("First occurrence of '" + searchElement + "' is at index: " + firstIndex);
	            System.out.println("Last occurrence of '" + searchElement + "' is at index: " + lastIndex);
	        } else {
	            System.out.println("'" + searchElement + "' is not found in the LinkedList.");
	        }

	        scanner.close();
	    }
	}

