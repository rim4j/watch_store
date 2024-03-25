import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:watch_store/config/theme/app_colors.dart';
import 'package:watch_store/config/theme/text_style.dart';

class CustomButton extends StatelessWidget {
  final String title;
  final VoidCallback onTap;
  final bool? loading;

  const CustomButton({
    super.key,
    required this.title,
    required this.onTap,
    this.loading,
  });

  @override
  Widget build(BuildContext context) {
    // ColorScheme colorScheme = Theme.of(context).colorScheme;

    return ElevatedButton(
      onPressed: loading == true ? () {} : onTap,
      style: ElevatedButton.styleFrom(
        foregroundColor: Colors.grey,
        backgroundColor: AppColors.title,
        minimumSize: const Size(double.infinity, 60),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
      ),
      child: loading == true
          ? const SizedBox(
              height: 50,
              child: SpinKitRipple(
                color: Colors.white,
                size: 100,
              ),
            )
          : Text(title, style: AppTextStyles.tagTitle),
    );
  }
}
