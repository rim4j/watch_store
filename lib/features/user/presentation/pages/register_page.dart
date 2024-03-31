import 'package:flutter/material.dart';
import 'package:watch_store/config/route/route_names.dart';
import 'package:watch_store/core/constants/asset_images.dart';
import 'package:watch_store/core/constants/dimens.dart';
import 'package:watch_store/core/constants/strings.dart';
import 'package:watch_store/core/extensions/extensions.dart';
import 'package:watch_store/core/widgets/app_text_field.dart';
import 'package:watch_store/core/widgets/custom_button.dart';

class RegisterPage extends StatelessWidget {
  const RegisterPage({super.key});

  @override
  Widget build(BuildContext context) {
    final TextEditingController inputController = TextEditingController();
    final Size size = MediaQuery.of(context).size;
    final ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      backgroundColor: colorScheme.background,
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Image.asset(AssetImages.logo),
            AppDimens.large.height,
            AppTextField(
              label: AppStrings.enterYourNumber,
              hint: AppStrings.hintPhoneNumber,
              controller: inputController,
            ),
            AppDimens.large.height,
            SizedBox(
              width: size.width * .75,
              child: CustomButton(
                // loading: true,
                title: AppStrings.sendOtpCode,
                onTap: () {
                  Navigator.pushNamed(context, RouteNames.otpPage);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
