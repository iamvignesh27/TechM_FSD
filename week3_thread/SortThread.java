package week3_thread;

import java.util.Arrays;

class SortThread extends Thread {
	private int[] arr;

	public SortThread(int[] arr) {
		this.arr = arr;
	}

	public void run() {
		mergeSort(arr);
	}

	private void mergeSort(int[] arr) {
		if (arr.length < 2)
			return;

		int mid = arr.length / 2;
		int[] left = Arrays.copyOfRange(arr, 0, mid);
		int[] right = Arrays.copyOfRange(arr, mid, arr.length);

		SortThread leftThread = new SortThread(left);
		SortThread rightThread = new SortThread(right);

		leftThread.start();
		rightThread.start();

		try {
			leftThread.join(); // Wait for left half to be sorted
			rightThread.join(); // Wait for right half to be sorted
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		merge(arr, left, right);
	}

	private void merge(int[] arr, int[] left, int[] right) {
		int i = 0, j = 0, k = 0;
		while (i < left.length && j < right.length) {
			arr[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];
		}
		while (i < left.length)
			arr[k++] = left[i++];
		while (j < right.length)
			arr[k++] = right[j++];
	}
}
