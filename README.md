# appt-task

# Installation steps

1. clone this repo
2. go to project directory in terminal
3. run $$ npm install
4. after installing nodemodules run below command in project directory
   $$
   npx react-native run-android
   or
   $$ npx react-native run-ios
   $$
5. Incase metro not started automatically then run below command in project directory
   $$ npx react-native start

# Package Info

# Issue may occure while building app for android

1.The Android Gradle plugin supports only kotlin-android-extensions Gradle plugin version 1.6.20 and higher.
reference -https://github.com/mrousavy/react-native-vision-camera/issues/1449

How to solve - go to path
==> node_modules/react-native-vision-camera/android/gradle.properties
--> change VisionCamera_kotlinVersion=1.5.30 to VisionCamera_kotlinVersion=1.6.20

2. App may get crash in some Realme devices when using Camer
   reference- https://github.com/mrousavy/react-native-vision-camera/issues/907

How to solve - go to path
==> android/app/build.gradles
--> add below 6 lines in "android/app/build.gradles" inside the "dependencies" script.

implementation "androidx.camera:camera-core:1.1.0"
implementation "androidx.camera:camera-camera2:1.1.0"
implementation "androidx.camera:camera-lifecycle:1.1.0"
implementation "androidx.camera:camera-video:1.1.0"
implementation "androidx.camera:camera-view:1.1.0"
implementation "androidx.camera:camera-extensions:1.1.0"
