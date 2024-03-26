import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:watch_store/config/route/route_names.dart';
import 'package:watch_store/core/constants/asset_animations.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashPage> {
  @override
  void initState() {
    Future.delayed(const Duration(seconds: 4)).then((value) {
      Navigator.pushReplacementNamed(context, RouteNames.registerPage);
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Lottie.asset(AssetAnimations.cloak),
      ),
    );
  }
}
