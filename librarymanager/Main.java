package librarymanager;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		LibraryManager libraryManager = new LibraryManager();
		Scanner scanner = new Scanner(System.in);

		// Adding Sample Books
		Book book1 = new Book();
		book1.setBookTitle("Rich Dad Poor Dad");
		book1.setAuthor("Robert Kiyosaki and Sharon Lechter");
		book1.setIsbnNumber("13579");
		libraryManager.addBook(book1);

		Book book2 = new Book();
		book2.setBookTitle("The Psychology of Money");
		book2.setAuthor("Morgan Housel");
		book2.setIsbnNumber("24680");
		libraryManager.addBook(book2);

		// Adding Sample Users
		Users user1 = new Users();
		user1.setName("Patrick");
		user1.setUserId("P1744");
		libraryManager.addUser(user1);

		Users user2 = new Users();
		user2.setName("Raakesh");
		user2.setUserId("R1900");
		libraryManager.addUser(user2);

		System.out.println("\n Welcome to the University Library System ");

		while (true) {
			System.out.println("\nChoose an option:");
			System.out.println("1. Borrow a Book");
			System.out.println("2. Return a Book");
			System.out.println("3. Reserve a Book");
			System.out.println("4. Search for a Book");
			System.out.println("5. Exit");

			System.out.print("Enter your choice: ");
			int choice = scanner.nextInt();
			scanner.nextLine();

			switch (choice) {
			case 1:
				System.out.print("Enter User ID: ");
				String borrowUserID = scanner.nextLine();
				System.out.print("Enter Book ISBN: ");
				String borrowISBN = scanner.nextLine();
				try {
					libraryManager.borrowBook(borrowISBN, borrowUserID);
				} catch (Exception e) {
					System.out.println(" Error: " + e.getMessage());
				}
				break;

			case 2:
				System.out.print("Enter User ID: ");
				String returnUserID = scanner.nextLine();
				System.out.print("Enter Book ISBN: ");
				String returnISBN = scanner.nextLine();
				try {
					libraryManager.returnBook(returnISBN, returnUserID);
				} catch (Exception e) {
					System.out.println(" Error: " + e.getMessage());
				}
				break;

			case 3:
				System.out.print("Enter User ID: ");
				String reserveUserID = scanner.nextLine();
				System.out.print("Enter Book ISBN: ");
				String reserveISBN = scanner.nextLine();
				try {
					libraryManager.reserveBook(reserveISBN, reserveUserID);
				} catch (Exception e) {
					System.out.println(" Error: " + e.getMessage());
				}
				break;

			case 4:
				System.out.print("Enter Book Title: ");
				String searchTitle = scanner.nextLine();
				Book foundBook = libraryManager.searchBook(searchTitle);
				if (foundBook != null) {
					System.out.println(" Book Found: " + foundBook.getBookTitle() + " by " + foundBook.getAuthor());
				} else {
					System.out.println(" Book Not Found!");
				}
				break;

			case 5:
				System.out.println(" Thank you for using the University Library System! Exiting ");
				scanner.close();
				System.exit(0);

			default:
				System.out.println(" Invalid choice! Please enter a valid option.");
			}
		}
	}
}