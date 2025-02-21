const fs = require('fs');
const path = require('path');

const gradleWrapperFilePath = path.join(
  __dirname,
  '../android/gradle/wrapper/gradle-wrapper.properties'
);

const targetVersion = '8.2-all';

if (fs.existsSync(gradleWrapperFilePath)) {
  console.log('Updating Gradle version in gradle-wrapper.properties...');
  const content = fs.readFileSync(gradleWrapperFilePath, 'utf8');
  const updatedContent = content.replace(/gradle-[\d.]+-all.zip/, `gradle-${targetVersion}.zip`);
  fs.writeFileSync(gradleWrapperFilePath, updatedContent, 'utf8');
  console.log('Gradle version updated successfully!');
} else {
  console.log('gradle-wrapper.properties file not found. Skipping update.');
}
