# PLACEMENT CELL

An interface for the employees of a company to fill in the data into the database and then download it in CSV format.

Visit Live site on -> https://placement-cell-2vae.onrender.com

<img width="960" alt="Sign In Page" src="https://user-images.githubusercontent.com/100505172/213485454-e57ecb48-8795-42be-bb3c-8c5302c49f44.png">

<img width="960" alt="Sign Up Page" src="https://user-images.githubusercontent.com/100505172/213485614-f3710108-32a4-45f9-a43b-217f7dc524e3.png">

<img width="960" alt="Home Page" src="https://user-images.githubusercontent.com/100505172/213485728-5ebff091-c456-4166-9325-27d8be6fc063.png">

<img width="960" alt="Interview Page" src="https://user-images.githubusercontent.com/100505172/213485843-40810e8b-1a04-4e90-8dff-6ec1999d83e0.png">

# FEATURES

- Eployees can register themselve and then sign in into the dashboard
- Add a new student to the list of students
- Allocate and schedule interview with different companies and update their result status
- Download reports of students in csv format

# TECH STACK

Node.Js, MongoDB, Express, Passport, Fast-csv, ejs

# SETUP

1) Run `npm install` command in the terminal to install required dependencies
2) Create a .env file in config directory of this project
3) Write environment variables in .env file:

- SECRET=`Anything`
- MONGO_URL=mongodb://localhost:27017/`DB Name`
