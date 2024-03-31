import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
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
    final ColorScheme colorScheme = Theme.of(context).colorScheme;

    final Size size = MediaQuery.of(context).size;

    return ElevatedButton(
      onPressed: loading == true ? () {} : onTap,
      style: ElevatedButton.styleFrom(
        foregroundColor: Colors.grey,
        backgroundColor: colorScheme.primary,
        minimumSize: Size(size.width * .75, size.height * .07),
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
          : Text(
              title,
              style: AppTextStyles.tagTitle,
            ),
    );
  }
}
