import 'package:flutter/material.dart';
import 'package:toastification/toastification.dart';
import 'package:watch_store/config/theme/text_style.dart';

class CustomToast {
  static showToastSuccess(context, String message) {
    toastification.show(
      direction: TextDirection.rtl,
      type: ToastificationType.success,
      style: ToastificationStyle.flatColored,
      alignment: Alignment.topCenter,
      showProgressBar: false,
      context: context,
      closeOnClick: true,
      title: Text(
        message,
        style: AppTextStyles.title,
      ),
      autoCloseDuration: const Duration(seconds: 5),
      icon: const Icon(Icons.check, color: Colors.green),
    );
  }

  static showToastError(context, String message) {
    toastification.show(
      direction: TextDirection.rtl,
      type: ToastificationType.error,
      style: ToastificationStyle.flatColored,
      alignment: Alignment.topCenter,
      showProgressBar: false,
      context: context,
      closeOnClick: true,
      title: Text(message, style: AppTextStyles.title),
      autoCloseDuration: const Duration(seconds: 5),
      icon: const Icon(Icons.error, color: Colors.red),
    );
  }
}
