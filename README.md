# Getting Started with DashBoard App
The app can work in three basic steps.

* login using Google Auth (the API request doesn’t work without authentication)
* hit the API endpoint with the access token from the previous step
* process the results and render your real-time view 

## Required:
* ClientID
* Google Account (email) 
* Google Analytics Account

## Step 1 — create a new project 

(try the upper-left corner pulldown menu)**https://console.cloud.google.com/

## Step 2 — create credentials for this new project: 
https://console.cloud.google.com/apis/

First … you need a OAuth 2.0 client ID, so hit the blue “create credentials” button and create one for “web application”

And second, we need to ensure your dev and LIVE domains can access this project. Under “Authorised JavaScript origins”, lets add your local dev and live domains (e.g. http://localhost, http://emptycan.com, etc).

## Step 3 — Enable the API for this project.

From the main API dashboard for your project… click “Enable APIS and Services”.

You need to “enable” “Analytics API” (not the Google Analytics API… confusing, yes, but ignore that one).

## Step 5 — The Google Analytics viewID

This one is easy… sign into your Google Analytics account and go to the Admin area. Find the property that you’re interested in streaming real-time data (middle column). In the subsequent far-right column, title “View”… click on “View Settings”. At the top, you’ll see the view ID. Copy that somewhere for later.

