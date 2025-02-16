package week3_collectionapi;

import java.util.ArrayList;

public class InsertAtFirstPosition {

	public static void main(String[] args) {
		// Create an ArrayList and add some initial elements
		ArrayList<String> colors = new ArrayList<>();
		colors.add("Red");
		colors.add("Green");
		colors.add("Blue");

		// Print the original ArrayList
		System.out.println("Original ArrayList: " + colors);

		// Insert a new element at the first position
		colors.add(0, "Yellow"); // 0 is the index for the first position

		// Print the updated ArrayList
		System.out.println("Updated ArrayList after inserting at first position: " + colors);
	}
}
