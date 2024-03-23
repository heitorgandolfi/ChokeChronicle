
## ChokeChronicle

A mobile application designed for jiu-jitsu enthusiasts, ChokeChronicle is your essential tool to record and enhance your skills in the gentle art. With intuitive tracking features, you can document your training, analyze patterns, and set goals for continuous growth. Developed using React Native, TypeScript, React Native Reanimated, React Navigation, Styled-Components, SQLite, and Effector, among other technologies, and fueled by a passion for jiu-jitsu.

## Project Status

This project is currently under development. For now, users can:

- create records of their workouts, viewing them on the home screen and being able to delete them if they wish.

- filtrate their workouts by days (7, 15 and 30).

- visualize some general metrics in graph form, such as the number of times you submitted someone, the number of people with a certain belt color who you have fought and more.

## Project Screen Shot(s)

<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/5cb0f57a-a230-4495-b52d-2e4bbb61970a.png" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/9f998460-3179-453b-9f6d-8b20690fed6b.png" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/eff74b04-8338-4c79-abec-dadb51edd3a6.png" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/17efbe96-70c3-43b5-ac5a-5b4cfbb78026.png" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/00ff8497-f71c-4e84-bac3-05f4abef045e.png" width="260px">
<img src="https://github.com/heitorgandolfi/ChokeChronicle/assets/113437603/d7bfb353-37b4-4933-a6c7-c3a7c44ef5f3.png" width="260px">

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
