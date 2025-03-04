package warehousemanager;

import java.util.Comparator;
import java.util.List;

public class Order {

	private String orderID;
	private List<String> productIDs;
	private Priority priority;

	public enum Priority {
		STANDARD, EXPEDITED
	}

	public Order(String orderID, List<String> productIDs, Priority priority) {
		this.orderID = orderID;
		this.productIDs = productIDs;
		this.priority = priority;
	}

	public String getOrderID() {
		return orderID;
	}

	public List<String> getProductIDs() {
		return productIDs;
	}

	public Priority getPriority() {
		return priority;
	}
}

class OrderComparator implements Comparator<Order> {
	@Override
	public int compare(Order o1, Order o2) {
		return o1.getPriority().compareTo(o2.getPriority());
	}
}

class OutOfStockException extends Exception {
	public OutOfStockException(String message) {
		super(message);
	}
}

class InvalidLocationException extends Exception {
	public InvalidLocationException(String message) {
		super(message);
	}
}
