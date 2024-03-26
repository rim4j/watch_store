import 'package:flutter/material.dart';
import 'package:watch_store/config/route/on_generate_route.dart';
import 'package:watch_store/config/theme/themes.dart';
import 'package:watch_store/features/intro/presentation/pages/splash_page.dart';
import 'package:watch_store/features/user/presentation/pages/register_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Watch Store',
      theme: lightTheme,
      onGenerateRoute: OnGenerateRoute.route,
      routes: {"/": (context) => const SplashPage()},
    );
  }
}
