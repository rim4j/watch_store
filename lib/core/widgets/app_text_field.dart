import 'package:flutter/material.dart';
import 'package:watch_store/config/theme/app_colors.dart';
import 'package:watch_store/config/theme/text_style.dart';
import 'package:watch_store/core/constants/dimens.dart';
import 'package:watch_store/core/extensions/extensions.dart';

class AppTextField extends StatelessWidget {
  const AppTextField({
    super.key,
    required this.label,
    required this.hint,
    this.icon = const SizedBox(),
    this.prefixLabel = '',
    this.textAlign = TextAlign.center,
    this.inputType,
    required this.controller,
  });

  final String label;
  final String prefixLabel;
  final String hint;
  final TextEditingController controller;
  final Widget icon;
  final TextAlign textAlign;
  final TextInputType? inputType;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Padding(
      padding: const EdgeInsets.all(AppDimens.medium),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          SizedBox(
            width: size.width * .75,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  prefixLabel,
                  style: AppTextStyles.title,
                ),
                Text(
                  label,
                  style: AppTextStyles.title,
                ),
              ],
            ),
          ),
          AppDimens.medium.height,
          SizedBox(
            height: size.height * .07,
            width: size.width * .75,
            child: TextField(
              cursorColor: AppColors.title,
              textAlign: textAlign,
              controller: controller,
              keyboardType: inputType,
              decoration: InputDecoration(
                hintStyle: AppTextStyles.hint.copyWith(
                  fontSize: 12,
                ),
                hintText: hint,
                prefixIcon: icon,
              ),
            ),
          )
        ],
      ),
    );
  }
}
