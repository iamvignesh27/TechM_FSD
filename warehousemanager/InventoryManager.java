package warehousemanager;

import java.util.Map;
import java.util.PriorityQueue;
import java.util.concurrent.ConcurrentHashMap;

public class InventoryManager {

	Map<String, Product> products;
	private PriorityQueue<Order> orderQueue;
	private final Object lock = new Object();

	public InventoryManager() {
		products = new ConcurrentHashMap<>();
		orderQueue = new PriorityQueue<>(new OrderComparator());
	}

	public void addProduct(Product product) {
		products.put(product.getProductID(), product);
	}

	public void processOrder(Order order) throws OutOfStockException {
		synchronized (lock) {
			for (String productID : order.getProductIDs()) {
				Product product = products.get(productID);
				if (product == null || product.getQuantity() <= 0) {
					throw new OutOfStockException("Product " + productID + " is out of stock.");
				}
				product.setQuantity(product.getQuantity() - 1);
				System.out.println("Processed order for product: " + product);
			}
		}
	}

	public void addOrder(Order order) {
		orderQueue.add(order);
	}

	public void fulfillOrders() {
		while (!orderQueue.isEmpty()) {
			Order order = orderQueue.poll();
			try {
				processOrder(order);
				System.out.println("Fulfilled order: " + order.getOrderID());
			} catch (OutOfStockException e) {
				System.err.println(e.getMessage());
			}
		}
	}
}
