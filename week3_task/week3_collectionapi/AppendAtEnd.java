package week3_collectionapi;

import java.util.LinkedList;

public class AppendAtEnd {

	    public static void main(String[] args) {
	        // Create a LinkedList and add some initial elements
	        LinkedList<String> fruits = new LinkedList<>();
	        fruits.add("Apple");
	        fruits.add("Banana");
	        fruits.add("Cherry");

	        // Print the original LinkedList
	        System.out.println("Original LinkedList: " + fruits);

	        // Element to be appended
	        String newFruit = "Date";

	        // Append the specified element to the end of the LinkedList
	        fruits.add(newFruit);

	        // Print the updated LinkedList
	        System.out.println("Updated LinkedList after appending: " + fruits);
	    }
	}

