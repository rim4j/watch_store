import 'package:flutter/material.dart';
import 'package:watch_store/config/route/route_names.dart';
import 'package:watch_store/config/theme/text_style.dart';
import 'package:watch_store/core/constants/strings.dart';
import 'package:watch_store/features/user/presentation/pages/register_page.dart';

class OnGenerateRoute {
  OnGenerateRoute._();
  static Route<dynamic> route(RouteSettings settings) {
    final args = settings.arguments;
    switch (settings.name) {
      case RouteNames.registerPage:
        return routeBuilder(const RegisterPage());

      default:
        return routeBuilder(const NoPageFound());
    }
  }
}

MaterialPageRoute routeBuilder(Widget child) {
  return MaterialPageRoute(builder: (_) => child);
}

class NoPageFound extends StatelessWidget {
  const NoPageFound({super.key});
  @override
  Widget build(BuildContext context) {
    final ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      backgroundColor: colorScheme.background,
      appBar: AppBar(
        backgroundColor: colorScheme.primary,
        title:
            const Text(AppStrings.noPageFound, style: AppTextStyles.tagTitle),
      ),
      body: const Center(
        child: Text(
          AppStrings.noPageFound,
          style: AppTextStyles.title,
        ),
      ),
    );
  }
}
