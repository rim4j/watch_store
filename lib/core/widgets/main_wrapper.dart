import 'package:flutter/material.dart';
import 'package:persistent_bottom_nav_bar/persistent_tab_view.dart';
import 'package:watch_store/config/theme/app_colors.dart';
import 'package:watch_store/features/home/presentation/pages/home_page.dart';

class MainWrapper extends StatelessWidget {
  const MainWrapper({super.key});

  @override
  Widget build(BuildContext context) {
    PersistentTabController _controller;

    _controller = PersistentTabController(initialIndex: 0);

    List<Widget> pages = [
      const HomePage(),
      Container(
        color: Colors.red,
        child: const Center(
          child: Text("bookmark page"),
        ),
      ),
      Container(
        color: Colors.blue,
        child: const Center(
          child: Text("shop page"),
        ),
      ),
      Container(
        color: Colors.orange,
        child: const Center(
          child: Text("account page"),
        ),
      ),
    ];
    return Scaffold(
      body: PersistentTabView(
        context,
        controller: _controller,
        screens: pages,
        items: _navBarsItems(),
        confineInSafeArea: true,
        backgroundColor: AppColors.btmNavColor, // Default is Colors.white.
        handleAndroidBackButtonPress: true, // Default is true.
        resizeToAvoidBottomInset:
            true, // This needs to be true if you want to move up the screen when keyboard appears. Default is true.
        stateManagement: true, // Default is true.
        hideNavigationBarWhenKeyboardShows:
            true, // Recommended to set 'resizeToAvoidBottomInset' as true while using this argument. Default is true.
        decoration: NavBarDecoration(
          borderRadius: BorderRadius.circular(10.0),
          colorBehindNavBar: Colors.white,
        ),
        popAllScreensOnTapOfSelectedTab: true,
        popActionScreens: PopActionScreensType.all,
        itemAnimationProperties: const ItemAnimationProperties(
          // Navigation Bar's items animation properties.
          duration: Duration(milliseconds: 200),
          curve: Curves.ease,
        ),
        screenTransitionAnimation: const ScreenTransitionAnimation(
          // Screen transition animation on change of selected tab.
          animateTabTransition: true,
          curve: Curves.ease,
          duration: Duration(milliseconds: 200),
        ),
        navBarStyle:
            NavBarStyle.style12, // Choose the nav bar style with this property.
      ),
    );
  }

  List<PersistentBottomNavBarItem> _navBarsItems() {
    return [
      PersistentBottomNavBarItem(
        icon: Icon(Icons.home),
        title: ("Home"),
        activeColorPrimary: AppColors.dark,
        inactiveColorPrimary: AppColors.hint,
      ),
      PersistentBottomNavBarItem(
        icon: Icon(Icons.bookmark),
        title: ("Bookmark"),
        activeColorPrimary: AppColors.dark,
        inactiveColorPrimary: AppColors.hint,
      ),
      PersistentBottomNavBarItem(
        icon: Icon(Icons.shopping_cart),
        title: ("Shop"),
        activeColorPrimary: AppColors.dark,
        inactiveColorPrimary: AppColors.hint,
      ),
      PersistentBottomNavBarItem(
        icon: Icon(Icons.person),
        title: ("Account"),
        activeColorPrimary: AppColors.dark,
        inactiveColorPrimary: AppColors.hint,
      ),
    ];
  }
}
