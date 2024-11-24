# Sports_Schedular_Project

It is a Role Based Access Control (RBAC) project that manages access and roles of users and admins.

Project Overview:
This is a Sport Schedular Web Application which is used by the users to join in different sports like Cricket,Volleyball,Football.
When this applictaion is running,at start an openpage is opened which asks to go to Login page or Registration page.
There are 2 different types of logins and Registartions.For Users and Admins.
In admin login,only the admins can check the participants list and can remove them.
In user login,users can login to join in any sports and can they can delete their joining message if they are not able to join the sport.
For user login,there are three sports to join:Cricket,Volleyball,Football.
For every sport to join in,there is an input box that takes name and there is date of joining box where the users or players are going to join the sports training etc.
Users or players can also see other players of the sports to check their team.
There is a logout option that returns back to login page.

Reference for detailed idea and information of the project:
https://drive.google.com/file/d/1v249ak9f5HkLSMGq-tJjLPP3ba77fqJn/view?usp=drive_link

Developed using:
HTML,CSS,Java Script
Nodejs
Ejs
Database:Firebase database

How to run?
This Nodejs application can be run by using npm,nodejs,nodemon.
node todoproject01.js is the command to run this application.

About:
The project is an sports Management System. It is designed to facilitate the 
interaction between the sport manager and the sportsman. In this website the 
customers can book the events by using the registration form. The registered details 
will be stored in database through the details the event manager will contact the 
customers. 

Key Features: 
1.Customers access to vist : 
•Customer can sign up to the website by providing essential details including their email 
ids and passwords. 
2.Customers registration to book the events: 
•After successfully login to the website there will be a register form. Customer can register 
their event by providing required details including event types and event date also. 
•After registration completed successfully then greetings popup will be appear. 

Technologies Used: 
--Node.js and Express.js: These technologies form the core of your web application, 
managing tasks like handling HTTP requests, directing traffic, and displaying web 
pages. 
--Firebase Authentication: You use Firebase for customer authentication, allowing users to 
sign up and login with their email and password. 
Firestore database: Firestore is used as a NoSQL database to store customer data and 
registered details. 
--EJS: Embedded JavaScript 
--Password-Hashing: Password hashing is a way to change a user's password into a 
special code that's hard to read and always the same length. This makes it safer to 
store passwords and protect people's accounts. 
--Body-parse library: It is used to hide the user details in the HTTP requests. It can also 
used as security library. By this the data will be safe. 

Structure of the project: 
It consists of various routes and publics signup, login, home, about, contact us, etc. for handling the customer registration and events management. 
Customer Access: 
•Customer can Sign up and login with their usernames. 
•Email will not be repeated more than one time. 
•Passwords will be hashed while storing in the database. 

User Authentication: 
Users can sign in using their email and password. 
Passwords are securely verified using the hashed password from the database. 

Database: 
In this google firestore database is used. 

Ideas: 
1. Security: Ensure that sensitive data, such as passwords, is stored securely and 
consider implementing additional security measures, such as user authentication rules 
in Firebase. 
2. Validation: Implement data validation and error handling for user inputs to enhance 
the robustness of your application. 
3. Documentation: Provide clear and concise documentation for users and developers 
on how to use your application and its API. 
4. User Experience: Enhance the user experience by adding features like password 
reset, better error messages, and validation on the frontend. 
5. Frontend Enhancement: Consider improving the user interface and making it more 
userfriendly. 
6. Testing: Implement unit and integration testing to ensure your application works as 
expected.
7. Scaling: Think about how the application can be scaled to handle a larger 
number of users and academic records.

Future Ideas: 
.It can be implemented further for more features. 
.We can add the freatures like sending emails to customer for the conformation of the 
registerd events. 
•They can select their theme or they can create own theme which they suggest. 
•Implementing the offers and discounts on the required packages. 
