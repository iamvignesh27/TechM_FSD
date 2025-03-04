package week3_collectionapi;

import java.util.ArrayList;

public class RemoveThirdElement {

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

	        // Check if the ArrayList has at least 3 elements
	        if (fruits.size() >= 3) {
	            // Remove the third element (index 2)
	            fruits.remove(2); // Removes "Cherry"

	            // Print the updated ArrayList
	            System.out.println("Updated ArrayList after removing the third element: " + fruits);
	        } else {
	            System.out.println("The ArrayList does not have enough elements to remove the third one.");
	        }
	    }
	}

