import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:image_picker/image_picker.dart';
import 'package:watch_store/config/theme/text_style.dart';
import 'package:watch_store/core/constants/dimens.dart';
import 'package:watch_store/core/constants/strings.dart';
import 'package:watch_store/core/extensions/extensions.dart';
import 'package:watch_store/core/widgets/app_text_field.dart';
import 'package:watch_store/core/widgets/custom_button.dart';
import 'package:watch_store/core/widgets/profile_widget.dart';

class InitProfilePage extends StatefulWidget {
  const InitProfilePage({super.key});

  @override
  State<InitProfilePage> createState() => _InitProfilePageState();
}

class _InitProfilePageState extends State<InitProfilePage> {
  final picker = ImagePicker();
  final TextEditingController nameController = TextEditingController();
  final TextEditingController homeNumberController = TextEditingController();
  final TextEditingController addressController = TextEditingController();
  final TextEditingController postalCodeController = TextEditingController();
  final TextEditingController locationController = TextEditingController();
  File? _image;

  Future pickGalleryImage() async {
    final pickedFile =
        await picker.pickImage(source: ImageSource.gallery, imageQuality: 20);

    if (pickedFile == null) return;

    setState(() {
      _image = File(pickedFile.path);
    });
  }

  deleteImage() {
    setState(() {
      _image = null;
    });
  }

  @override
  Widget build(BuildContext context) {
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
                GestureDetector(
                  onTap: pickGalleryImage,
                  onLongPress: deleteImage,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(50),
                    child: SizedBox(
                      width: 100,
                      height: 100,
                      child: profileWidget(image: _image),
                    ),
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
                  controller: homeNumberController,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.address,
                  hint: AppStrings.hintAddress,
                  controller: addressController,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.postalCode,
                  hint: AppStrings.hintPostalCode,
                  controller: postalCodeController,
                ),
                AppTextField(
                  textAlign: TextAlign.right,
                  label: AppStrings.location,
                  hint: AppStrings.hintLocation,
                  icon: const Icon(Icons.place_outlined),
                  controller: locationController,
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
