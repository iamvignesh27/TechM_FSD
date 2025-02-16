package week3_collectionapi;

import java.util.ArrayList;

public class ArrayLists {

	public static void main(String[] args) {
		// Create an ArrayList to hold color strings
		ArrayList<String> colors = new ArrayList<>();

		// Add some colors to the ArrayList
		colors.add("Red");
		colors.add("Green");
		colors.add("Blue");
		colors.add("Yellow");
		colors.add("Purple");

		// Print out the collection of colors
		System.out.println("List of colors:");
		for (String color : colors) {
			System.out.println(color);
		}
	}
}
