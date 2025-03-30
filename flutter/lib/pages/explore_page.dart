import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ExplorePage extends StatefulWidget {
  const ExplorePage({super.key});

  @override
  State<ExplorePage> createState() => _ExplorePageState();
}

class _ExplorePageState extends State<ExplorePage> {
  final List<String> images = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300?random=4",
    "https://picsum.photos/300/300?random=5",
    "https://picsum.photos/300/300?random=6",
    "https://picsum.photos/300/300?random=7",
    "https://picsum.photos/300/300?random=8",
    "https://picsum.photos/300/300?random=9",
    "https://picsum.photos/300/300?random=10",
    "https://picsum.photos/300/300?random=11",
    "https://picsum.photos/300/300?random=12",
    "https://picsum.photos/300/300?random=13",
    "https://picsum.photos/300/300?random=14",
    "https://picsum.photos/300/300?random=15",
    "https://picsum.photos/300/300?random=16",
    "https://picsum.photos/300/300?random=17",
    "https://picsum.photos/300/300?random=18",
    "https://picsum.photos/300/300?random=19",
    "https://picsum.photos/300/300?random=20",
  ];

  final List<String> trendingTags = [
    "#Nature",
    "#Photography",
    "#Travel",
    "#Foodie",
    "#Fashion",
    "#Tech",
    "#Art",
    "#Music",
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        elevation: 0,
        title: CupertinoSearchTextField(
          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 10),
          backgroundColor: Colors.grey[900],
          placeholder: "Search",
          prefixIcon: const Icon(Icons.search, color: Colors.white),
          placeholderStyle: const TextStyle(color: Colors.grey),
          style: const TextStyle(color: Colors.white),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildTrendingTags(),
          Expanded(child: _buildGrid()),
        ],
      ),
    );
  }

  Widget _buildTrendingTags() {
    return SizedBox(
      height: 50,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        itemCount: trendingTags.length,
        itemBuilder: (context, index) {
          return Container(
            margin: const EdgeInsets.symmetric(horizontal: 5),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(
              color: Colors.grey[800],
              borderRadius: BorderRadius.circular(20),
            ),
            child: Text(
              trendingTags[index],
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
            ),
          );
        },
      ),
    );
  }

  Widget _buildGrid() {
    return Padding(
      padding: const EdgeInsets.all(5),
      child: GridView.builder(
        physics: const BouncingScrollPhysics(),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3,
          crossAxisSpacing: 4,
          mainAxisSpacing: 4,
        ),
        itemCount: images.length,
        itemBuilder: (context, index) {
          return GestureDetector(
            onTap: () {
              _openPost(images[index]);
            },
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8),
              child: Image.network(
                images[index],
                fit: BoxFit.cover,
                loadingBuilder: (context, child, loadingProgress) {
                  if (loadingProgress == null) return child;
                  return const Center(
                    child: CircularProgressIndicator(color: Colors.white),
                  );
                },
                errorBuilder: (context, error, stackTrace) {
                  return Container(
                    color: Colors.grey[900],
                    child: const Icon(Icons.broken_image, color: Colors.white, size: 50),
                  );
                },
              ),
            ),
          );
        },
      ),
    );
  }

  void _openPost(String imageUrl) {
    showDialog(
      context: context,
      builder: (context) => Dialog(
        backgroundColor: Colors.transparent,
        child: ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: Image.network(imageUrl, fit: BoxFit.cover),
        ),
      ),
    );
  }
}
