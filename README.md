<p align="center">
<img src="clock.png" alt="Clock" width="20%"/>
</p>

<h1 align="center">
    Timestamp Microservice ⌚
</h1>

<p align="center">
   <b><i>This project is a RESTful API for date manipulation.</i></b><br>
</p>

<p align="center">
        <img alt="Code Size in bytes" src="https://img.shields.io/github/languages/code-size/kellymoreira/Timestamp-Microservice?color=6272a4" />
	<img alt="Main Language" src="https://img.shields.io/github/languages/top/kellymoreira/Timestamp-Microservice?color=6272a4"/>
        <img alt="Project Made at December 2023" src="https://img.shields.io/badge/month%20of%20creation-december%2F2023-6272a4">
        <img alt="Project Status" src="https://img.shields.io/badge/status-completed-6272a4">
</p>

## 📜 About

>*Designed to provide a **RESTful API** that responds to requests made to specific endpoints related to date manipulation. <br>
>It is the first project from the freeCodeCamp project's. <br>
_[Tap here to see the instructions](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)_ <br> 
>It supports three main functionalities:* <br>

### Date Conversion Endpoint:
 - Requests to `/api/:date?` return a JSON object. <br>
 - Valid date input returns `unix` timestamp (in milliseconds) and `utc` representation. <br>
 - Invalid date input results in `{ error: "Invalid Date" }` response. <br>

### Date Parsing:

 - Capable of handling dates parsed by `new Date(date_string)`. <br>

### Default Behavior:

 - An empty date parameter defaults to the current time.
 - Returns JSON object with `unix` timestamp and `utc` representation of the current time.


## ⚙️ Tech Stack

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>


## 💡 Acknowledgements

[Back End Development and API's](https://www.freecodecamp.org/learn/back-end-development-and-apis/)


