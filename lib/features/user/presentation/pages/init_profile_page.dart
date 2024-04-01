import 'package:flutter/material.dart';
import 'package:watch_store/config/theme/text_style.dart';
import 'package:watch_store/core/constants/dimens.dart';
import 'package:watch_store/core/constants/strings.dart';
import 'package:watch_store/core/extensions/extensions.dart';
import 'package:watch_store/core/widgets/app_text_field.dart';
import 'package:watch_store/core/widgets/custom_button.dart';

class InitProfilePage extends StatelessWidget {
  const InitProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    final TextEditingController nameController = TextEditingController();

    return Scaffold(
      body: SingleChildScrollView(
        child: SafeArea(
          child: Center(
            child: Column(
              children: [
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: AppDimens.medium),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      IconButton(
                        onPressed: () {
                          Navigator.pop(context);
                        },
                        icon: const Icon(Icons.arrow_back),
                      ),
                      const Text(
                        style: AppTextStyles.title,
                        AppStrings.register,
                      ),
                    ],
                  ),
                ),
                Container(
                  width: 100,
                  height: 100,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(50),
                    color: Colors.grey,
                  ),
                ),
                const Text(
                  style: AppTextStyles.title,
                  AppStrings.chooseProfileImage,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.nameLastName,
                  hint: AppStrings.hintNameLastName,
                  controller: nameController,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.homeNumber,
                  hint: AppStrings.hintHomeNumber,
                  controller: nameController,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.address,
                  hint: AppStrings.hintAddress,
                  controller: nameController,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.postalCode,
                  hint: AppStrings.hintPostalCode,
                  controller: nameController,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.location,
                  hint: AppStrings.hintLocation,
                  icon: const Icon(Icons.place_outlined),
                  controller: nameController,
                ),
                AppDimens.large.height,
                CustomButton(
                  title: AppStrings.register,
                  onTap: () {},
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
