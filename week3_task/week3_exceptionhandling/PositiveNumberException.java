package week3_exceptionhandling;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class PositiveNumberException {

	    public static void main(String[] args) {
	        String filePath = "numbers.txt"; // Change this to the path of your input file

	        try {
	            readNumbersFromFile(filePath);
	        } catch (FileNotFoundException e) {
	            System.out.println("Caught an exception: " + e.getMessage());
	        } catch (IllegalArgumentException e) {
	            System.out.println("Caught an exception: " + e.getMessage());
	        }
	    }

	    // Method that reads numbers from a file and throws an exception if any number is positive
	    public static void readNumbersFromFile(String filePath) throws FileNotFoundException {
	        File file = new File(filePath);
	        Scanner scanner = new Scanner(file); // This line can throw FileNotFoundException

	        while (scanner.hasNextLine()) {
	            String line = scanner.nextLine();
	            try {
	                int number = Integer.parseInt(line.trim()); // Parse the number
	                if (number > 0) {
	                    throw new IllegalArgumentException("Positive number found: " + number);
	                }
	            } catch (NumberFormatException e) {
	                System.out.println("Invalid number format: " + line);
	            }
	        }
	        scanner.close();
	    }
	}

