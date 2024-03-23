
## ChokeChronicle

A mobile application designed for jiu-jitsu enthusiasts, ChokeChronicle is your essential tool to record and enhance your skills in the gentle art. With intuitive tracking features, you can document your training, analyze patterns, and set goals for continuous growth. Developed using React Native, TypeScript, React Native Reanimated, React Navigation, Styled-Components, SQLite, and Effector, among other technologies, and fueled by a passion for jiu-jitsu.

## Project Status

This project is currently under development. For now, users can:

- create records of their workouts, viewing them on the home screen and being able to delete them if they wish.

- filtrate their workouts by days (7, 15 and 30).

- visualize some general metrics in graph form, such as the number of times you submitted someone, the number of people with a certain belt color who you have fought and more.

## Project Screen Shot(s)

<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/a0e96a0f-c90a-4a24-b28c-c1fa7d94dced.png" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/dbbcf7e9-4741-4326-bbac-55a0574968c2.png" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/5f7be929-897c-4e8a-a89d-7cbfac8679f9" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/9b4f7bf9-2be2-4f02-b7b1-d4a4336321d4" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/f7673f4b-be4e-476f-ba62-35e5f4606397" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/070e1a07-635f-4602-a961-303b7f544d77.png" width="260px">

## Installation and Setup Instructions

Clone down this repository. You will need  `node`  and  `npm`  installed globally on your machine.

Installation:

`npm install`

To Start Server:

`expo start`

You need to have an emulator running. (Android Studio, for example)

## Reflection

As a passionate jiu-jitsu practitioner, as training sessions passed, I found myself forgetting about my performance, making it challenging to gauge my progress on the mats. Therefore, I decided to create this project with the initial goal of allowing the recording of my activities to periodically compare them.

This is a personal project that, beyond the realm of jiu-jitsu, will also serve as a laboratory to explore and learn technological solutions as it is developed.

Regarding the project itself, I chose to use the Expo platform for several reasons:

-   Abstraction of some complexities involving the configuration of a React Native project, allowing a quicker start in development without worrying about specific device configuration or native code dependencies.
-   Over-the-Air updates.
-   Access to pre-built libraries.
-   EAS (Expo Application Services): You don't need a Mac to build the iOS app. You can build and deploy the code on EAS in the cloud. From there, you can deploy it directly to the store. (Although the project is initially focused on Android, it facilitates future changes if desired.)
-   Native device testing: With Expo, you can have the Expo Go app installed on your phone, connect to the same network, and test your app on any physical device [Android and iOS].

## **License**
The MIT License (**MIT**).
