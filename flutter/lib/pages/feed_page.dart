import 'package:flutter/material.dart';
import 'package:instagram/pages/chatlist.dart';
import 'package:instagram/widgets/posts_widget.dart';

class FeedPage extends StatefulWidget {
  const FeedPage({super.key});

  @override
  State<FeedPage> createState() => _FeedPageState();
}

class _FeedPageState extends State<FeedPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Instagram",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.add_box_outlined),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.message_outlined),
            onPressed: () {
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (context) => const ChatList()));
            },
          ),
        ],
      ),
      backgroundColor: Colors.black,
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Stories Section
            Container(
              padding: const EdgeInsets.all(5),
              height: 100,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: 10, // Added itemCount for better performance
                itemBuilder: (context, index) {
                  final String url = "https://picsum.photos/seed/$index/400/400";
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 5),
                    child: CircleAvatar(
                      backgroundImage: NetworkImage(url),
                      radius: 35,
                    ),
                  );
                },
              ),
            ),
            const Divider(color: Colors.grey),

            // Posts Section
            ListView.builder(
              physics: const NeverScrollableScrollPhysics(), // Prevents nested scroll conflicts
              shrinkWrap: true,
              itemCount: 10, // Reduced for better efficiency
              itemBuilder: (context, index) {
                return PostWidget(index: index);
              },
            ),
          ],
        ),
      ),
    );
  }
}
