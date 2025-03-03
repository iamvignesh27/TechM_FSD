package meeting_room_booking;

import java.util.EnumSet;

public class Testing {
	public static void main(String[] args) {
		RoomScheduler scheduler = new RoomScheduler();

		System.out.println(scheduler.addMeetingRoom(new MeetingRoom("001", "Boardroom", 20,
				EnumSet.of(RoomFeature.PROJECTOR, RoomFeature.CONFERENCE_PHONE, RoomFeature.AIR_CONDITIONING))));

		System.out.println(scheduler.addMeetingRoom(new MeetingRoom("002", "Strategy Room", 10,
				EnumSet.of(RoomFeature.WHITEBOARD, RoomFeature.AIR_CONDITIONING))));

		System.out.println(scheduler.bookRoom("001", EnumSet.of(RoomFeature.PROJECTOR, RoomFeature.CONFERENCE_PHONE)));

		System.out.println(scheduler.listAvailableRooms(EnumSet.of(RoomFeature.AIR_CONDITIONING)));
	}
}