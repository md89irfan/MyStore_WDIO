# WebdrvierIO_Cucucmber_Typescript
# Description: 
This project is created to do automated test of Test Store application using WebDriverIO Cucumber Typescript framework

# Setup:
To setup the prjoect into your local system make sure nodeJS (v16+) is installed into system
create a folder into your local system and clone the project using: 
 git clone https://github.com/md89irfan/MyStore_WDIO.git

Then run 'npm install' command to download required libraries

# Execution:
To execute run command 'npm run wdio'
If you want to run a specific feature file, update the filename into wdio.conf.ts specs section
Allure report will be generated into project allure-results folder.

# Tips: 
If your local chrome browser version is different than chromedriver version in package.json file, then update the chromedriver version and run the 'npm install' command again to download required chromedriver
