package week3_iostreams;

import java.io.File;

//8. Write a Java program to get the file size in bytes, KB, MB.
public class FileSize {

	public static void main(String[] args) {

		String filePath ="\"C:\\Users\\91944\\Downloads\\Core Java Consolidated Tasks.pdf\"";

		File file = new File(filePath);

		if (file.exists() && file.isFile()) {
			// Get file size in bytes
			long fileSizeBytes = file.length();

			// Convert to KB and MB
			double fileSizeKB = fileSizeBytes / 1024.0;
			double fileSizeMB = fileSizeKB / 1024.0;

			// Display the results
			System.out.println("File Size: ");
			System.out.println(fileSizeBytes + " Bytes");
			System.out.printf("%.2f KB\n", fileSizeKB);
			System.out.printf("%.2f MB\n", fileSizeMB);
		} else {
			System.out.println("File does not exist or is not a valid file.");
		}

	}
}
