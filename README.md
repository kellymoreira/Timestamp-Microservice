<p align="center">
<img src="clock.png" alt="Clock" width="20%"/>
</p>

<h1 align="center">
    Timestamp Microservice 🗓️
</h1>

<p align="center">
   <b><i>This project is a RESTful API for date manipulation.</i></b><br>
</p>

<p align="center">
        <img alt="Project Made at December 2023" src="https://img.shields.io/badge/month%20of%20creation-december%2F2023-6272a4">
        <img alt="Code Size in bytes" src="https://img.shields.io/github/languages/code-size/kellymoreira/Timestamp-Microservice?color=6272a4" />
	<img alt="Main Language" src="https://img.shields.io/github/languages/top/kellymoreira/Timestamp-Microservice?color=6272a4"/>
        <img alt="Project Status" src="https://img.shields.io/badge/status-completed-6272a4">
</p>

# 📜 About
>*Designed to provide a RESTful API that responds to requests made at specific endpoints related to date manipulation for study purposes. <br>
>It's the first project from freeCodeCamp. [Tap here to see the instructions](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) <br> 
>It supports three main functionalities:* <br>

### Date Conversion Endpoint:
 - Requests to `/api/:date?` return a JSON object. <br>
 - Valid date input returns `unix timestamp` (in milliseconds) and `utc` representation. <br>
 - Invalid date input results in `{ error: "Invalid Date" }` response. <br>

### Date Parsing:
 - Capable of handling dates parsed by `new Date(date_string)`. <br>

### Default Behavior:
 - An empty date parameter defaults to the current time.
 - Returns JSON object with `unix timestamp` and `utc` representation of the current time.

<br>

# ⚙️ Tech Stack
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<br>

# 🛎️ Example Usage (Hypothetical Situation)
### Booking System for Appointments or Revervations Scenario: 
When users client select a **date** and **time** for an appointment, the API can assist in converting and storing these **timestamps** in a standard way. <br>
This ensures seamless communication between different parts of the system.
```
GET /api/appointment?date=1706544000000
// Returns: { unix: 1706544000000, utc: "Thu, 29 Jun 2023 00:00:00 GMT" }
```
From the **URL** `GET /api/appointment?date=1706544000000`, the parameter `1706544000000` will be captured as `req.params.date` in the code. <br> 
The code then checks if it's a valid `unix timestamp`, and if so, it converts it to a standard format with `unix timestamp` and `utc string`. <br>
If it's not a valid `unix timestamp`, it attempts to parse it as a date string and provides the corresponding `unix timestamp` and `utc string` if successful, or an error message if the parsing fails. <br>
So, when you make a request to `GET /api/appointment?date=1706544000000`, it should return a JSON object with the `unix timestamp` and `utc string`.

```
{
  "unix": 1706544000000,
  "utc": "Thu, 29 Jun 2023 00:00:00 GMT"
}
```

# 💡 Resources

[Back End Development and API's](https://www.freecodecamp.org/learn/back-end-development-and-apis/)


