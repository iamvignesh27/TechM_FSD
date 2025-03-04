package week3_collectionapi;

import java.util.ArrayList;
import java.util.Scanner;

public class UpdateArrayElement {

	    public static void main(String[] args) {
	        // Create an ArrayList and add some initial elements
	        ArrayList<String> colors = new ArrayList<>();
	        colors.add("Red");
	        colors.add("Green");
	        colors.add("Blue");
	        colors.add("Yellow");
	        colors.add("Purple");

	        // Print the original ArrayList
	        System.out.println("Original ArrayList: " + colors);

	        // Create a Scanner to read user input
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter the index of the element you want to update (0 to " + (colors.size() - 1) + "): ");
	        
	        // Read the index from the user
	        int index = scanner.nextInt();
	        
	        // Check if the index is valid
	        if (index >= 0 && index < colors.size()) {
	            System.out.print("Enter the new value: ");
	            String newValue = scanner.next(); // Read the new value

	            // Update the element at the specified index
	            colors.set(index, newValue);

	            // Print the updated ArrayList
	            System.out.println("Updated ArrayList: " + colors);
	        } else {
	            System.out.println("Invalid index! Please enter a number between 0 and " + (colors.size() - 1) + ".");
	        }

	        scanner.close();
	    }
	}
