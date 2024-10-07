# Playwright Automation Framework with TypeScript

## Overview

CatFact Ninza API Automation - 

CatFact has provided user a API services where a user can get Information about : 
    1. cat breed (GET /breeds)
    2. facts about Cat (GET /fact or /facts)
    3. put cat fact (POST /fact)

This project is an automation framework built with Playwright, and TypeScript. we have adopted the API object model approach which has focused on initialize the API request and process associated methods are added as a part of these Objects.

It is designed to facilitate end-to-end testing for back-end-testing, providing a scalable and maintainable structure.

## Features

- **TypeScript:** Strongly typed language to catch errors early and improve code quality.
- **Playwright:** Provides a robust and flexible automation tool.
- **API Object Model:** Design pattern to enhance code reusability and maintainability.
- **Back-End Testing:** Configuration to run tests for different Back End APis.
- **Reports:** Detailed test execution reports using the Spec reporter.

## Folder Structure

|-- test

| |-- APIobjects

|   |-- GET_Breed_API_Object.ts

|   |-- GET_Facts_API_Object.ts

|   |-- POST_Fact_API_Object.ts

| |-- RequestData

|   |-- GET_Fact_RequestPayload.json

|   |-- POST_Fact_RequestPayload.json

| |-- ResponeData

|   |-- GET_Breed_ResponsePayload.json

|   |-- GET_Fact_ResponsePayload.json

| |-- tests

|   |-- RegressionTests

|   	|-- 01_Validate_GET_Breed_API.spec.ts

|   	|-- 02_Validate_GET_Facts_API.spec.ts

|   	|-- 03_Validate_POST_Facts_API.spec.ts

|-- .env

|   |-- .env.uat

|-- reports

|-- package.json

|-- tsconfig.json

|-- README.md


## Getting Started

In order to get started, you will need to have Node.js, Typescript, npm, 
Playwright libraries installed.

 - Node.js: Download and install from Node.js official site.
 - npm: Comes bundled with Node.js. Verify installation by running: **npm -v**
 - TypeScript: Install globally by running **npm install -g typescript**
 - Playwright Libraries: Install the necessary Playwright packages
 - **npm install --save-dev @playwright/test**
 - Source - This project is out on GIT

### Prerequisites

- Node.js (v12 or higher)
- npm 

### Installation

1. **Clone the repository:**

   git clone "repo path"
   cd your-repo

2. **install Dependencies:**
   Run `npm install` from either the command line/terminal window in that project, 
   or from the terminal within VS Code when the project is open.
   npm install

3. **Configuration:**
   The main configuration file is located at playwright.config.ts You can modify the following sections as per your requirements:

    Project: Add or remove services like Browser, Device, etc.
    Reporters: Configure test reporters for generating reports.

4. **Running Tests:**
     Switch-into your Workspace **cd yourworkspacepath** 

   run cmd **npm run <defined test script>**
