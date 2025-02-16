package week3_thread;

public class MultilplicationMatrix {

	public static void main(String[] args) {
		int[][] A = { { 11,12, 13 }, { 4, 50, 6 } };
		int[][] B = { { 71, 18 }, { 29, 10 }, { 11, 12 } };

		int rowsA = A.length; // Number of rows in A
		int colsB = B[0].length; // Number of columns in B
		int[][] C = new int[rowsA][colsB]; // Result matrix

		Thread[] threads = new Thread[rowsA]; // Create an array of threads

		// Create and start a thread for each row
		for (int i = 0; i < rowsA; i++) {
			threads[i] = new MatrixMultiplicationThread(i, A, B, C);
			threads[i].start();
		}

		// Wait for all threads to finish
		for (int i = 0; i < rowsA; i++) {
			try {
				threads[i].join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		// Print result matrix
		System.out.println("Result Matrix:");
		for (int i = 0; i < rowsA; i++) {
			for (int j = 0; j < colsB; j++) {
				System.out.print(C[i][j] + " ");
			}
			System.out.println();
		}
	}
}
