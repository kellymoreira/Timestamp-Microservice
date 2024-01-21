<p align="center">
<img src="./img/clock.png" alt="Clock" width="20%"/>
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


<p align="center">
    <a href="#About">About</a>
   | <a href="#Tech Stack">Tech Stack</a>
   | <a href="#Usage">Usage</a>
   | <a href="#Resources">Resources</a>
</p>


<h2 id="About">📜 About</h2>

>*Designed to provide a **RESTful API** that responds to requests made at specific endpoints related to date manipulation for study purposes. <br>
>It's the first project from freeCodeCamp. [Tap here to see the instructions](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) <br> 
>It supports three main functionalities:* <br>

### Date Conversion Endpoint:
 - Requests to `/api/:date?` return a **JSON object**. <br>
 - Valid date input returns `unix timestamp` (in milliseconds) and `utc` representation. <br>
 - Invalid date input results in `{ error: "Invalid Date" }` response. <br>

### Date Parsing:
 - Capable of handling dates parsed by `new Date(date_string)`. <br>

### Default Behavior:
 - An empty date parameter defaults to the current time.
 - Returns **JSON object** with `unix timestamp` and `utc` representation of the current time.


<h2 id="Tech Stack">⚙️ Tech Stack</h2>

<img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>


<h2 id="Usage">🛎️ Example Usage (Hypothetical Situation)</h2>

### Booking System for Appointments or Revervations:
Consider a scenario where users choose a date and time for an appointment. The **API** can assist in converting and storing these timestamps. 
When a user selects a date and time for an appointment, the **API** facilitates the conversion and storage of these timestamps in a standardized format. This ensures smooth communication between different components of the system.


### Request:

Make a **GET** request to `/api/appointment` with the date parameter:

```bash
GET /api/appointment?date=1706544000000
```

### Response:

The **API** returns a **JSON object** with the **Unix timestamp** and **UTC string**:

```json
{
 "unix": 1706544000000,
 "utc": "Thu, 29 Jun 2023 00:00:00 GMT"
}
```

### How It Works:

- The code captures the `date` parameter from the URL (`req.params.date`) and checks if it's a valid **Unix timestamp**.
- If it is, the code converts it to a standard format with **Unix timestamp** and **UTC string**.
- If it's not a valid **Unix timestamp**, the code attempts to parse it as a date string and provides the corresponding **Unix timestamp** and **UTC string** if successful, or an error message if the parsing fails.

<h2 id="Usage">📋 Documentation</h2>

<details>
  <summary><h2 id="Resources">💡 Resources</h2></summary>

- [Back End Development and API's](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [freeCodeCamp Forum](https://forum.freecodecamp.org/t/timestamp-microservice-works-for-me-but-fails-one-challenge/498153)
- [Swagger Autogen Documentation](https://swagger-autogen.github.io/docs)


</details>

