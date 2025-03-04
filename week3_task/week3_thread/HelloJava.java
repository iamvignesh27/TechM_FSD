package week3_thread;

public class HelloJava {
	public static void main(String[] args) {
		// Create a new thread using a lambda expression
		Thread thread = new Thread(() -> System.out.println("Hello, Java!"));

		// Start the thread
		thread.start();

	}
}
