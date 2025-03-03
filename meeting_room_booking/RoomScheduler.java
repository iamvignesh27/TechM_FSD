package meeting_room_booking;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RoomScheduler {
	private Map<String, MeetingRoom> meetingRooms;

	public RoomScheduler() {
		this.meetingRooms = new HashMap<>();
	}

	public String addMeetingRoom(MeetingRoom room) {
		meetingRooms.put(room.getRoomId(), room);
		return "Room added: " + room.getRoomName() + ", ID: " + room.getRoomId();
	}

	public String bookRoom(String roomId, EnumSet<RoomFeature> requiredFeatures) {
		MeetingRoom room = meetingRooms.get(roomId);

		if (room == null) {
			return "Room with ID " + roomId + " does not exist.";
		}

		if (room.getFeatures().containsAll(requiredFeatures)) {
			return "Room " + roomId + " booked successfully.";
		} else {
			return "Room " + roomId + " does not meet the required features.";
		}
	}

	public String listAvailableRooms(EnumSet<RoomFeature> requiredFeatures) {
		List<MeetingRoom> availableRooms = new ArrayList<>();

		for (MeetingRoom room : meetingRooms.values()) {
			if (room.getFeatures().containsAll(requiredFeatures)) {
				availableRooms.add(room);
			}
		}

		return "Available rooms with " + requiredFeatures.toString().replace("[", "").replace("]", "") + ": "
				+ availableRooms;
	}
}
