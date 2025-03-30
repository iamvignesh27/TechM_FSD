import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  File? _profileImage; // Store profile image

  Future<void> _pickProfileImage() async {
    final pickedFile = await ImagePicker().pickImage(source: ImageSource.gallery);
    if (pickedFile != null) {
      setState(() {
        _profileImage = File(pickedFile.path);
      });
    }
  }

  void _showBottomSheet() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 15),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _buildSheetItem(Icons.settings, "Settings"),
              _buildSheetItem(Icons.archive, "Archive"),
              _buildSheetItem(Icons.qr_code, "QR Code"),
              _buildSheetItem(Icons.bookmark_border, "Saved"),
              _buildSheetItem(Icons.access_time, "Your Activity"),
              _buildSheetItem(Icons.logout, "Log Out"),
            ],
          ),
        );
      },
    );
  }

  Widget _buildSheetItem(IconData icon, String title) {
    return ListTile(
      leading: Icon(icon, color: Colors.black),
      title: Text(title, style: const TextStyle(fontSize: 16)),
      onTap: () => Navigator.pop(context), // Close the bottom sheet
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("vicky_kroos"),
        actions: [
          IconButton(
            icon: const Icon(Icons.add_box_outlined),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.menu_outlined),
            onPressed: _showBottomSheet,
          ),
        ],
      ),
      backgroundColor: Colors.black,
      body: Column(
        children: [
          // Profile Header
          Padding(
            padding: const EdgeInsets.all(15),
            child: Row(
              children: [
                GestureDetector(
                  onTap: _pickProfileImage,
                  child: CircleAvatar(
                    radius: 40,
                    backgroundColor: Colors.grey[800],
                    backgroundImage: _profileImage != null
                        ? FileImage(_profileImage!)
                        : const NetworkImage("https://scontent.cdninstagram.com/v/t51.2885-19/485619556_1005332127600056_3698329632634232976_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=101&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=VBJXyRI5NzgQ7kNvgH54wfu&_nc_oc=AdmrQ3i_k7XJ8k84ULIElPIqMCP7w7DtE6Ix3C1FsfFeR7cxq6u0HfHdGiNR2nbR0Vs&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYHGQLVEYD_lNh29H1BHe_xSp3EkIKFPW6zk9ZcwUYrTXg&oe=67EEB8B9") as ImageProvider,
                  ),
                ),
                const SizedBox(width: 20),
                Expanded(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: const [
                      _ProfileStat("10", "Posts"),
                      _ProfileStat("250", "Followers"),
                      _ProfileStat("180", "Following"),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // Profile Name & Bio
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 15),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Vignesh",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                    fontSize: 18,
                  ),
                ),
                Text(
                  "Flutter Developer | Tech Enthusiast",
                  style: TextStyle(color: Colors.grey),
                ),
              ],
            ),
          ),

          const SizedBox(height: 10),

          // Edit Profile Button
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15),
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.grey[850],
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              onPressed: () {},
              child: const Center(
                child: Text("Edit Profile", style: TextStyle(color: Colors.white)),
              ),
            ),
          ),

          const SizedBox(height: 10),

          // Profile Posts Grid
          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.all(2),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3, // 3 posts per row
                crossAxisSpacing: 2,
                mainAxisSpacing: 2,
              ),
              itemCount: 12, // Simulated posts
              itemBuilder: (context, index) {
                final imageUrl = "https://picsum.photos/seed/${index + 1}/400/400";
                return Container(
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: NetworkImage(imageUrl),
                      fit: BoxFit.cover,
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

// Profile Stats Widget
class _ProfileStat extends StatelessWidget {
  final String count;
  final String label;

  const _ProfileStat(this.count, this.label, {super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          count,
          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
        ),
        Text(
          label,
          style: const TextStyle(fontSize: 14, color: Colors.grey),
        ),
      ],
    );
  }
}