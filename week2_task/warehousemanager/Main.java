package warehousemanager;

import java.util.Arrays;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		InventoryManager inventoryManager = new InventoryManager();

		// Initialize inventory with some products
		inventoryManager.addProduct(new Product("P001", "Widget", 10, new Location(1, 1, 1)));
		inventoryManager.addProduct(new Product("P002", "Gadget", 5, new Location(1, 1, 2)));
		inventoryManager.addProduct(new Product("P003", "Thingamajig", 0, new Location(1, 1, 3))); // Out of stock

		// Create orders
		List<String> order1Products = Arrays.asList("P001", "P002");
		Order order1 = new Order("O001", order1Products, Order.Priority.STANDARD);

		List<String> order2Products = Arrays.asList("P003"); // This will cause an OutOfStockException
		Order order2 = new Order("O002", order2Products, Order.Priority.EXPEDITED);

		// Add orders to the inventory manager
		inventoryManager.addOrder(order1);
		inventoryManager.addOrder(order2);

		// Process orders in a separate thread
		Thread orderProcessingThread = new Thread(inventoryManager::fulfillOrders);
		orderProcessingThread.start();

		try {
			orderProcessingThread.join(); // Wait for the order processing to finish
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		// Final inventory state
		System.out.println("Final inventory state:");
		for (Product product : inventoryManager.products.values()) {
			System.out.println(product);
		}
	}
}
