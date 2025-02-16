package week3_collectionapi;

import java.util.LinkedList;
import java.util.ListIterator;

public class IterateReverseOrder {

	    public static void main(String[] args) {
	        // Create a LinkedList and add some elements
	        LinkedList<String> fruits = new LinkedList<>();
	        fruits.add("Apple");
	        fruits.add("Banana");
	        fruits.add("Cherry");
	        fruits.add("Date");
	        fruits.add("Elderberry");

	        // Print the original LinkedList
	        System.out.println("Original LinkedList: " + fruits);

	        // Create a ListIterator to iterate in reverse
	        ListIterator<String> iterator = fruits.listIterator(fruits.size());

	        // Iterate through the LinkedList in reverse order
	        System.out.println("LinkedList in reverse order:");
	        while (iterator.hasPrevious()) {
	            System.out.println(iterator.previous());
	        }
	    }
	}

