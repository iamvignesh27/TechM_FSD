package week3_thread;

public class EvenThread extends Thread {
	public void run() {
		for (int i = 2; i < 10; i += 2) {
			System.out.println("Even :" + i);
		}
	}
}