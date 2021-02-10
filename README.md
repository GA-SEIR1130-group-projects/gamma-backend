# Finsta Proxy Backend
The finsta proxy API is a fully functional RESTful API that stores data of all the users that have made an account on the finsta proxy application. This api can utalize a full CRUD method on the user data.    

## Collaborators
[Biprajit Majumder](https://github.com/biprajit163)
[Nazeer Davis](https://github.com/nazeerhere)
[Jeff Simons](https://github.com/jephrae)
[Abdirizak Hussein](https://github.com/azack22)

## Technologies used 
Express.js, Mongoose, Heroku, MongoDB Atlas, bcrypt, mocha,

## Development
The Finsta Proxi utalizes Express.js to make HTTP requests such as GET, POST, PUT, and DELETE to manipulate the user data which is hosted on MongoDB Atlas. In order to get our database set up we created a MOngoDB Atlas account and we hosted the database as a organization. Once we had our MongoDB project running we created a collection and via a Database Url which we configured to heroku. Once our database was set up we launched our RESTful Api through Heroku. We wanted out backend to be able to create a user, get a user, make changes to the users profile, and even add images to the user profile. We used Mongoose models and Express routers to make dynamic paths for out API which would allow the users to have full control of their profile. Once we had our backend running we used axios on our front end to make the HTTP requests.


## Wireframes 
![image](https://media.git.generalassemb.ly/user/32615/files/53a6e600-6b4e-11eb-8887-53de35e74a1a)

#### Sample data from API
![image](https://media.git.generalassemb.ly/user/32615/files/3fafb400-6b4f-11eb-9994-f219eb24439b)

## User Stories
- As a user I want to be able to create my account
- I should be able to update my information
- change my password and username
- I can delete my account 
- I can upload photos on the site

## For the future
In the future our team hopes to give the user more funcitonality. As of now they can only add a picture but the user should be able to delete a picture as well. We would also like to add some sort of encription or OAuth so the user can secure their account
