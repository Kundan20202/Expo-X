#!/bin/bash
echo "Updating Gradle wrapper properties..."
sed -i 's/gradle-8.0.1-all.zip/gradle-8.2-all.zip/' android/gradle/wrapper/gradle-wrapper.properties
