import 'package:flutter/material.dart';
import 'package:pin_code_fields/pin_code_fields.dart';
import 'package:watch_store/config/route/route_names.dart';
import 'package:watch_store/config/theme/app_colors.dart';
import 'package:watch_store/config/theme/text_style.dart';
import 'package:watch_store/core/constants/asset_images.dart';
import 'package:watch_store/core/constants/dimens.dart';
import 'package:watch_store/core/constants/strings.dart';
import 'package:watch_store/core/extensions/extensions.dart';
import 'package:watch_store/core/utils/toast.dart';
import 'package:watch_store/core/widgets/custom_button.dart';

class OtpPage extends StatefulWidget {
  const OtpPage({super.key});

  @override
  State<OtpPage> createState() => _OtpPageState();
}

class _OtpPageState extends State<OtpPage> {
  final TextEditingController _otpController = TextEditingController();

  @override
  Widget build(BuildContext context) {
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
            _pinCodeWidget(colorScheme),
            AppDimens.large.height,
            SizedBox(
              width: size.width * .75,
              child: CustomButton(
                // loading: true,
                title: AppStrings.next,
                onTap: () {
                  _submitCode();
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _pinCodeWidget(ColorScheme colorScheme) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 50),
      child: Column(
        children: <Widget>[
          const Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "2:00",
                style: AppTextStyles.title,
              ),
              Text(
                AppStrings.enterVerificationCode,
                style: AppTextStyles.title,
              ),
            ],
          ),
          PinCodeTextField(
            appContext: context,
            length: 6,
            obscureText: false,
            animationType: AnimationType.fade,
            animationDuration: const Duration(milliseconds: 300),
            controller: _otpController,
            backgroundColor: colorScheme.background,
            textStyle: AppTextStyles.title,
            pinTheme: PinTheme(
              shape: PinCodeFieldShape.underline,
              borderRadius: BorderRadius.circular(5),
              fieldHeight: 50,
              fieldWidth: 40,
              activeFillColor: Colors.white,
              activeColor: colorScheme.primary,
              errorBorderColor: colorScheme.primary,
              inactiveColor: AppColors.hint,
              selectedColor: colorScheme.primary,
            ),
            onChanged: (value) {},
          ),
          AppDimens.medium.height,
        ],
      ),
    );
  }

  void _submitCode() {
    if (_otpController.text.length == 6 && _otpController.text.isNotEmpty) {
      print("success");
      Navigator.pushNamed(context, RouteNames.initProfilePage);
    } else {
      CustomToast.showToastError(context, AppStrings.enterVerificationCode);
    }
  }
}
