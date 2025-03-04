package week3_collectionapi;

import java.util.LinkedList;
import java.util.Scanner;

public class InsertAtFirstAndLast {

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

	        // Insert an element at the first position
	        System.out.print("Enter the element to insert at the first position: ");
	        String firstElement = scanner.nextLine();
	        fruits.addFirst(firstElement); // Insert at the first position

	        // Insert an element at the last position
	        System.out.print("Enter the element to insert at the last position: ");
	        String lastElement = scanner.nextLine();
	        fruits.addLast(lastElement); // Insert at the last position

	        // Print the updated LinkedList
	        System.out.println("Updated LinkedList after insertions: " + fruits);

	        
	        scanner.close();
	    }
	}

