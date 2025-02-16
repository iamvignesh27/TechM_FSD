package week3_thread;

public class SumPrime {
	public static void main(String[] args) {
		int range = 100;
		int mid = range / 2;

		// Create two threads to divide the work
		SumPrimeImplementation t1 = new SumPrimeImplementation(2, mid);
		SumPrimeImplementation t2 = new SumPrimeImplementation(mid + 1, range);

		// Start both threads
		t1.start();
		t2.start();

		// Wait for threads to finish
		try {
			t1.join();
			t2.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		// Sum results from both threads
		int totalSum = t1.getSum() + t2.getSum();
		System.out.println("Sum of Prime Numbers up to " + range + " is: " + totalSum);
	}
}
