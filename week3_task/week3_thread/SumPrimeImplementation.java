package week3_thread;

public class SumPrimeImplementation extends Thread {
	private int start, end, sum = 0;

	public SumPrimeImplementation(int start, int end) {
		this.start = start;
		this.end = end;
	}

	public int getSum() {
		return sum;
	}

	private boolean isPrime(int num) {
		if (num < 2)
			return false;
		for (int i = 2; i * i <= num; i++) {
			if (num % i == 0)
				return false;
		}
		return true;
	}

	public void run() {
		for (int i = start; i <= end; i++) {
			if (isPrime(i)) {
				sum += i;
			}
		}
	}
}
