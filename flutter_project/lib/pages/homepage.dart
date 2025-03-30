import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:instagram/pages/activity_page.dart';
import 'package:instagram/pages/chatlist.dart';
import 'package:instagram/pages/chatpage.dart';
import 'package:instagram/pages/explore_page.dart';
import 'package:instagram/pages/feed_page.dart';
import 'package:instagram/pages/profile_page.dart';
import 'package:instagram/pages/reels_page.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;
  final PageController _pageController = PageController();

  final List<Widget> _screens = [
    const FeedPage(),
    const ExplorePage(),
    const ReelsPage(),
    const ActivityPage(),
    const ProfilePage(),
  ];

  void _onTabChange(int index) {
    HapticFeedback.lightImpact(); // Improved vibration feedback
    setState(() {
      _selectedIndex = index;
    });
    _pageController.animateToPage(
      index,
      duration: const Duration(milliseconds: 300), // Smooth transition
      curve: Curves.easeInOut,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: PageView(
        controller: _pageController,
        physics: const BouncingScrollPhysics(),
        onPageChanged: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
        children: _screens,
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.black,
        unselectedItemColor: Colors.grey,
        selectedItemColor: Colors.white,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        type: BottomNavigationBarType.fixed,
        currentIndex: _selectedIndex,
        onTap: _onTabChange,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home, size: 30),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search, size: 30),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.video_library_outlined, size: 30),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.favorite_outline, size: 30),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: CircleAvatar(
              radius: 16, // Slightly larger for better visibility
              backgroundImage: NetworkImage(
                'https://scontent.cdninstagram.com/v/t51.2885-19/485619556_1005332127600056_3698329632634232976_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=101&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=VBJXyRI5NzgQ7kNvgH54wfu&_nc_oc=AdmrQ3i_k7XJ8k84ULIElPIqMCP7w7DtE6Ix3C1FsfFeR7cxq6u0HfHdGiNR2nbR0Vs&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYHGQLVEYD_lNh29H1BHe_xSp3EkIKFPW6zk9ZcwUYrTXg&oe=67EEB8B9', // Use a proper image URL
              ),
            ),
            label: '',
          ),
        ],
      ),
    );
  }
}
