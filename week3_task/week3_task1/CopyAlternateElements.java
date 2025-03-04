package week3_task1;

import java.util.Arrays;

public class CopyAlternateElements {

	public static void main(String[] args) {
		// Input array
		int[] originalArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

		int newSize = (originalArray.length + 1) / 2;
		int[] newArray = new int[newSize];

		// Copy alternative elements
		for (int i = 0, j = 0; i < originalArray.length; i += 2, j++) {
			newArray[j] = originalArray[i];
		}

		System.out.println("Original Array: " + Arrays.toString(originalArray));
		System.out.println("New Array with Alternative Elements: " + Arrays.toString(newArray));
	}
}
