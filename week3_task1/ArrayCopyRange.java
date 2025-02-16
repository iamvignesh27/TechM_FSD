package week3_task1;

import java.util.Arrays;

public class ArrayCopyRange {

	public static void main(String[] args) {
		int[] arr = { 5, 7, 11, 45, 18, 17, 10, 3, 48, 333, 1, 33, 93 };
		int[] range = Arrays.copyOfRange(arr, 0, 3);
		for (int x : range) {
			System.out.println(x);
		}
	}
}
