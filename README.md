
## ChokeChronicle

A mobile application designed for jiu-jitsu enthusiasts, ChokeChronicle is your essential tool to record and enhance your skills in the gentle art. With intuitive tracking features, you can document your training, analyze patterns, and set goals for continuous growth. Developed using React Native, TypeScript, React Native Reanimated, React Navigation, Styled-Components, SQLite, and Effector, among other technologies, and fueled by a passion for jiu-jitsu.

## Project Status

This project is currently in development, `Version 2` will be released at some point. For now, users can enter records of their training sessions, viewing them on the home screen and being able to delete them if they wish.

## Project Screen Shot(s)

<img src="https://github.com/heitorgandolfi/levva-coins/assets/113437603/acf05a7a-56b0-41fb-9352-010973e244be.png" width="260px">
<img src="https://github.com/heitorgandolfi/levva-coins/assets/113437603/dafd2658-a161-4b4c-8862-59ac70239ba9.png" width="264px">

## Installation and Setup Instructions

Clone down this repository. You will need  `node`  and  `npm`  installed globally on your machine.

Installation:

`npm install`

To Start Server:

`expo start`

You need to have an emulator running. (Android Studio, for example)

## Reflection

As a passionate jiu-jitsu practitioner, as training sessions passed, I found myself forgetting about my performance, making it challenging to gauge my progress on the mats. Therefore, I decided to create this project with the initial goal of allowing the recording of my activities to periodically compare them.

For this first version of the application, only the initial features (activity logging with the option to delete them) are currently available. However, for the future, the plan is to implement a series of improvements such as integration with Firebase, creating graphs for better data visualization and analysis, setting personal goals, tournament records, and much more.

As mentioned, this is a personal project that, beyond the realm of jiu-jitsu, will also serve as a laboratory to explore and learn technological solutions as it is developed.

Regarding the project itself, I chose to use the Expo platform for several reasons:

-   Abstraction of some complexities involving the configuration of a React Native project, allowing a quicker start in development without worrying about specific device configuration or native code dependencies.
-   Over-the-Air updates.
-   Access to pre-built libraries.
-   EAS (Expo Application Services): You don't need a Mac to build the iOS app. You can build and deploy the code on EAS in the cloud. From there, you can deploy it directly to the store. (Although the project is initially focused on Android, it facilitates future changes if desired.)
-   Native device testing: With Expo, you can have the Expo Go app installed on your phone, connect to the same network, and test your app on any physical device [Android and iOS].

## **License**
The MIT License (**MIT**).
