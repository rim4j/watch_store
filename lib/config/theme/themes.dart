import 'package:flutter/material.dart';
import 'package:watch_store/config/theme/app_colors.dart';
import 'package:watch_store/core/constants/dimens.dart';

ThemeData lightTheme = ThemeData(
  brightness: Brightness.light,
  colorScheme: const ColorScheme.light(
    background: AppColors.mainBg,
    primary: AppColors.dark,
    // onPrimary: AppColorsDark.grey,
    // secondary: AppColorsLight.secondary,
    // onSecondary: AppColorsLight.primary,
    // onSecondaryContainer: AppColorsLight.grey2,
  ),
  iconTheme: const IconThemeData(color: Color.fromRGBO(0, 0, 0, 1)),
  primaryColor: AppColors.dark,
  elevatedButtonTheme: const ElevatedButtonThemeData(
    style: ButtonStyle(
      backgroundColor: MaterialStatePropertyAll(AppColors.primaryColor),
    ),
  ),
  scaffoldBackgroundColor: AppColors.scaffoldBackgroundColor,
  inputDecorationTheme: InputDecorationTheme(
    filled: true,
    fillColor: MaterialStateColor.resolveWith((states) {
      if (states.contains(MaterialState.focused)) {
        return AppColors.focusedTextField;
      } else {
        return AppColors.unFocusedTextField;
      }
    }),
    contentPadding: const EdgeInsets.all(AppDimens.medium),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(AppDimens.medium),
      borderSide: const BorderSide(color: AppColors.borderColor),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(AppDimens.medium),
      borderSide: const BorderSide(color: AppColors.title),
    ),
  ),
);
