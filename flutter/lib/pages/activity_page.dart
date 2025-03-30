import 'package:flutter/material.dart';

class ActivityPage extends StatefulWidget {
  const ActivityPage({super.key});

  @override
  State<ActivityPage> createState() => _ActivityPageState();
}

class _ActivityPageState extends State<ActivityPage> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Activity', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: Colors.black,
        elevation: 0,
        bottom: TabBar(
          controller: _tabController,
          isScrollable: true,
          labelColor: Colors.white,
          unselectedLabelColor: Colors.grey,
          indicatorColor: Colors.blue,
          tabs: const [
            Tab(text: 'All'),
            Tab(text: 'Likes'),
            Tab(text: 'Comments'),
            Tab(text: 'Follows'),
          ],
        ),
      ),
      backgroundColor: Colors.black,
      body: TabBarView(
        controller: _tabController,
        children: [
          _activityList(),
          _activityList(filter: 'like'),
          _activityList(filter: 'comment'),
          _activityList(filter: 'follow'),
        ],
      ),
    );
  }

  Widget _activityList({String? filter}) {
    final List<Map<String, String>> activities = [
      {"type": "like", "user": "patrickap_2004", "message": "liked your photo", "image": "https://scontent.cdninstagram.com/v/t51.2885-19/425994901_817533046848268_7028768930980780993_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=103&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=brpH8qxGoiwQ7kNvgEbNhz9&_nc_oc=AdnrHfw1Hm0P7Ty58t1CTM00J1ul6jKhWZqgaw3srV45dKZ5OArATXyLnT8FrSlpkhs&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYGvFSh4107GIbVp9qcxIQu43k8J0SVlIBuoZpyomadFzw&oe=67EEC6EC"},
      {"type": "comment", "user": "praveen_sparkzzz", "message": "commented: Amazing shot!", "image": "https://scontent.cdninstagram.com/v/t51.2885-19/473586022_1124239752579172_6766135231790017309_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=100&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=_Vghfu4uq_cQ7kNvgE-7XDm&_nc_oc=AdlgXlqwjvWcVBrpVoSnznezuFvB8W1L9BE50cAAWGxG3aids_zyg0yleUbwE99cJzI&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYG4NMHIBz6THQCu2kuhw6D0u5Er9yNPf9-M-7mHFPRuyA&oe=67EEC691"},
      {"type": "follow", "user": "raakeshg_19", "message": "started following you", "image": "https://www.iplbetonline.in/wp-content/uploads/2023/04/57.png"},
      {"type": "like", "user": "kavya_vk", "message": "liked your video", "image": "https://cdn.pixabay.com/photo/2023/04/14/19/14/ai-generated-7925787_1280.jpg"},
      {"type": "follow", "user": "gopesh_babu", "message": "started following you", "image": "https://scontent.cdninstagram.com/v/t51.2885-19/94008820_922838578149234_1301658004478754816_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=106&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=y_hVbUmzAbIQ7kNvgGBT80E&_nc_oc=Adlm09HSM9sxj01VUOuxbCrYw8mp9xyXr6qQnkBYtaLLo9cPow-jnuAeG1z2GLY74bc&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYGoLVcGIL4e-YpBxzowzLmfKJe7OlYuM1jPoGitSggtEQ&oe=67EEC11A"},
      {"type": "like", "user": "lokesh_2003", "message": "liked your story", "image": "https://scontent.cdninstagram.com/v/t51.2885-19/482053641_614042991403296_4594645778794937441_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=110&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=lqhA9tE44g8Q7kNvgHJOAi8&_nc_oc=AdmWIAfia3LXoBWmuOwsf_ww_qlI4P8IlC9CDuEJrSBuiO3-e8VTDtRV5vUaDl2kmf8&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYFpbwV_bLrlyMz062IjqG7WgaZWYeSUvd92Kn-aJEOcAQ&oe=67EEBACD"},
      {"type": "comment", "user": "navin_kumar", "message": "commented: Keep up the good work!", "image": "https://scontent.cdninstagram.com/v/t51.2885-19/482626375_1554646958566287_6699127799253978790_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=107&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=WTibulZ2qWMQ7kNvgF9fVNQ&_nc_oc=Adn605AeVDgjbfIFAon6Aqi8kLJclCT85remUWwrzp9su_BUI2sksanVvC2EDg-i-h4&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYFbbcWZCrJE_k6WMfHHDLEC7M_lg96addW2h__6Se3uGw&oe=67EED596"},
      {"type": "follow", "user": "millan_louis", "message": "started following you", "image": "https://scontent.cdninstagram.com/v/t51.2885-19/375789070_688752343102150_7425593854807406414_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=107&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=mSrqwQ5Hw10Q7kNvgEG80Si&_nc_oc=AdmfPqiGkQrkc_Zuv0tE3I6SbA6801enzmQub1C6n1v3uQjmfWgSUp6y9p-zHemRHk8&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYEBAqFU15OVy907aqwqZ2k3PQpzi7SNgDuhvubEUFWCcQ&oe=67EEB231"},
      {"type": "comment", "user": "padmesh_sam", "message": "commented: Great job nanba", "image": "https://scontent.cdninstagram.com/v/t51.2885-19/476159594_1156549508859751_1172814592487800112_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=104&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=nxNXfxUXk6kQ7kNvgFzhwg0&_nc_oc=AdkzUKq91mrLljVxnLWK7cdrByKf0xp3GBqslwoHtxp3Qt13FbKcnET2lfagc1faPrU&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYH1iUa2sblOSAt70tZVBRuyeVDNSSdO7QXr85yZRXO5ig&oe=67EEDF9A"},
    ];

    List<Map<String, String>> filteredActivities = filter == null
        ? activities
        : activities.where((activity) => activity["type"] == filter).toList();

    return filteredActivities.isEmpty
        ? const Center(
            child: Text(
              "No Activity Yet",
              style: TextStyle(color: Colors.grey, fontSize: 16),
            ),
          )
        : ListView.builder(
            padding: const EdgeInsets.all(10),
            itemCount: filteredActivities.length,
            itemBuilder: (context, index) {
              final activity = filteredActivities[index];
              return _activityTile(
                user: activity["user"]!,
                message: activity["message"]!,
                imageUrl: activity["image"]!,
                type: activity["type"]!,
              );
            },
          );
  }

  Widget _activityTile({
    required String user,
    required String message,
    required String imageUrl,
    required String type,
  }) {
    return ListTile(
      leading: CircleAvatar(
        radius: 25,
        backgroundImage: NetworkImage(imageUrl),
      ),
      title: Text(
        user,
        style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
      ),
      subtitle: Text(
        message,
        style: const TextStyle(color: Colors.grey),
      ),
      trailing: _actionButton(type),
    );
  }

  Widget _actionButton(String type) {
    if (type == "follow") {
      return ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.blueAccent,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        ),
        child: const Text("Follow Back", style: TextStyle(color: Colors.white)),
      );
    } else if (type == "comment") {
      return ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.grey[800],
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        ),
        child: const Text("Reply", style: TextStyle(color: Colors.white)),
      );
    } else {
      return ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.blueAccent,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        ),
        child: const Text("View Post", style: TextStyle(color: Colors.white)),
      );
    }
  }
}
