package week3_collectionapi;

import java.util.ArrayList;

public class CopyList {

	public static void main(String[] args) {
		// Create the first ArrayList and add some elements
		ArrayList<String> originalList = new ArrayList<>();
		originalList.add("Apple");
		originalList.add("Banana");
		originalList.add("Cherry");
		originalList.add("Date");
		originalList.add("Elderberry");

		// Print the original ArrayList
		System.out.println("Original ArrayList: " + originalList);

		// Create a second ArrayList and copy elements from the first ArrayList
		ArrayList<String> copiedList = new ArrayList<>(originalList);

		// Print the copied ArrayList
		System.out.println("Copied ArrayList: " + copiedList);
	}
}
