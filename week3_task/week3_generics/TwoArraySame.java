package week3_generics;

import java.util.Arrays;

public class TwoArraySame {

	public static <T> boolean arraysEqual(int[] array1, int[] array2) {
		return Arrays.equals(array1, array2);
	}

	public static void main(String[] args) {
		int[] array1 = { 11, 12, 13, 14, 15, 16 };
		int[] array2 = { 1, 2, 3, 4, 5 };
		System.out.println(arraysEqual(array1, array2));
	}
}
