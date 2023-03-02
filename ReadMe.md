# How to run the app locally

## Prerequisites
- .Net Core 7
- Latest NodeJS LTS

## Steps

### Visual Studio / Visual Studio Code Method

1. Open the `.sln` file in Visual Studio
2. Run the app in debug mode (Should be the `SP23.P03.Web` project)
3. Open Visual Studio Code in the `SP23.P03.Web\ClientApp` folder
4. Open a terminal in VS Code
5. Run `npm i` and `npm start`
6. A Swagger window should have opened after step 2. Remove everything after the `localhost:7031`
7. You should see the Entrack App at this point

### Command Line Method
1. Open a terminal in the `SP23.P03.Web` folder
2. Run `dotnet run`
3. Open a terminal in the `SP23.P03.Web\ClientApp` folder
4. Run `npm i` and `npm start`
5. A Swagger window should have opened after step 2. Remove everything after the `localhost:7031`
6. You should see the Entrack App at this point