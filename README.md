ᴇɴɢʟɪꜱʜ | [ᴘᴏʀᴛᴜɢᴜᴇꜱᴇ-ʙʀ](https://github.com/kellymoreira/Timestamp-Microservice/blob/master/README_pt_br.md)

<p align="center">
<img src="./img/clock.png" alt="Clock" width="25%"/>
</p>

<h1 align="center">
    Timestamp Microservice 🗓️
</h1>

<p align="center">
   <b><i>This project is a RESTful API for date manipulation.</i></b><br>
</p>

<p align="center">
        <img alt="Project Made at December 2023" src="https://img.shields.io/badge/%20%20creation-december%2F2023-4682B4">
        <img alt="Code Size in bytes" src="https://img.shields.io/github/languages/code-size/kellymoreira/Timestamp-Microservice?color=4682B4" />
	<img alt="Main Language" src="https://img.shields.io/github/languages/top/kellymoreira/Timestamp-Microservice?color=4682B4"/>
        <img alt="Project Status" src="https://img.shields.io/badge/status-completed-4682B4">
</p>

<p align="center">
    <a href="#About">About</a>
   | <a href="#Technologies">Technologies</a>
   | <a href="#Usage">Usage</a>
   | <a href="#Resources">Resources</a>
   | <a href="#Documentation">Documentation</a>
   | <a href="#Feedbacks">Feedbacks</a>
</p>


<h2 id="About">📜 About</h2>

>*Designed to provide a **RESTful API** that responds to requests made at specific endpoints related to date manipulation for study purposes.
>It's the first project from freeCodeCamp.
>[Tap here to see the instructions](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) <br> 
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


<h2 id="Technologies">🗃️ Technologies</h2>

- `Node.js`
- `Express.js`
- `CSS`
- `HTML`



<!-- <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> -->


<h2 id="Usage">🛎️ Example Usage (Hypothetical Situation)</h2>

### Booking System for Appointments or Reservations:
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


<h2 id="Documentation">📋 Documentation</h2>

I used Swagger for API documentation, although the project itself doesn't contain many APIs,
the purpose of this documentation is to allow manual testing.

To interact with the project, follow these steps:

1. Install the necessary dependencies. This can be done using the command:
```bash
$ npm install
```

2. Generate the documentation at project startup. This is useful if you want to view the current state of the API documentation without starting the project. Use the command:
```bash
$ npm run start-gendoc
```

3. Start the project **without** generating the documentation. This is typically faster than the previous step, especially if you don't need to view the API documentation right away. Use the command:
```bash
$ npm start
```


Once the project has started, you can access the documentation at: 
[http://localhost:3001/api-docs/](http://localhost:3001/api-docs/)


<h2 id="Feedbacks">📨 Feedbacks</h2>
I'm a Junior, and I really would like to hear in case there are any tips, corrections, suggestions, or comments about this little project. <br> 
Your feedback is highly valued, and it helps me improve and learn!

<!--
<details>
  <summary><h2 id="Resources">💡 Resources</h2></summary>
</details>
-->

<h2 id="Resources">💡 Resources</h2>

- [Back End Development and API's](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [freeCodeCamp Forum](https://forum.freecodecamp.org/t/timestamp-microservice-works-for-me-but-fails-one-challenge/498153)
- [Swagger Autogen Docs](https://swagger-autogen.github.io/docs/getting-started/)


<br>
<p align="left">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=kellymoreira/Timestamp-Microservice&right_color=SteelBlue">
</p>

