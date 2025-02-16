package week3_thread;

public class OddThread extends Thread {

	public void run() {
		for (int i = 1; i < 100; i += 2) {
			System.out.println("Odd :" + i);
		}
	}
}
