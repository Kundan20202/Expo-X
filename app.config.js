export default {
  expo: {
    name: "grey_project", // Replace with your app name
    slug: "converter", // Replace with your app slug
    version: "1.0.0",
    sdkVersion: "51.0.0",
    orientation: "portrait",
    icon: "./assets/icon.jpg",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    platforms: ["ios", "android"],

    android: {
      package: "com.appforge.converter", // Add a unique package name here
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#ffffff"
      },
      buildProperties: {
        gradleCommand: "./gradlew wrapper --gradle-version 8.2", // Update Gradle version
        javaVersion: "17" // Ensure compatibility with Gradle 8.2
      }
    },

    ios: {
      bundleIdentifier: "com.appforge.converter", // Use the same pattern for iOS
      buildNumber: "1.0.0"
    },

    plugins: [
      "expo-build-properties" // Add the required plugin
    ],

    extra: {
      eas: {
        projectId: "5c97c5a5-6986-4356-b005-84b63e36dcdf" // Add your EAS project ID
      }
    }
  }
};
