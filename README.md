# Mern-Estate App ⭐

Real estate app using **Node.js, Express JS, MongoDB, React JS and the EJS templating engine** based application designed to help users operating an online marketplace for short and long-term homestays and experiences. .


![Mern Estate app ss](https://github.com/divyansh369/Mern-Estate/blob/main/upload/Screenshot%20(138).png)
![Mern Estate app ss](https://github.com/divyansh369/Mern-Estate/blob/main/upload/Screenshot%20(139).png)


### Built With 🏗️

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
* ![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
* ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)



## Installation ⚒ 

Follow these steps to set up the application:

1. Open Powershell/Terminal and Clone the repository to your local machine:

   ```bash
   gh repo clone divyansh369/Mern-Estate
   ```

2. Navigate to the project directory for frontend:

   ```bash
   cd client
   ```

3. Navigate to the project directory for backend:

   ```bash
   cd api
   ```

3. Install the required dependencies:
  
   ```bash
   npm install
   ```

4. Install additional packages:

   ```bash
   npm install mongoose 
   ```

## Get Started 📕

To run the MERN Estate, perform the following actions:

1. Open a new PowerShell window.

2. Start the MongoDB:

   ```bash
   mongodb
   ```

3. Open another PowerShell window.

4. Launch the MongoDB shell:

   ```bash
   mongoose
   ```

5. Open another PowerShell window and Navigate to the project directory:

   ```bash
   cd client
   ```

6. Start the application using nodemon:

   ```bash
   npm run dev
   ```

7. Open a web browser and navigate to [localhost:3000](http://localhost:3000) to access the application. Use [localhost:3000](http://localhost:3000) and whatever you want to create on file sharing app.

## Usage 🔥 

* __Home Page (http://localhost:3000):__ This is the default page that shows the estate marketplace front page. 
You can view estates and sign-in and if new user then sign-up and create a account .

* __Search:__ You can search the estates from the search panel and apply many filters. 

* __Profile :__ user can view their profile and can view their listing which uploaded by the user.

* __About Page :__ This page give the user interface tells about the mern estate owner.

* __CreateListing Page :__ This page give the user to create the estate by uploading many information regarding estate . 



## Project Structure 📁 
The project structure is as follows:

* `Api:` The main entry point of the application. It configures the server, sets up the routes, and connects to the database.
   
   * `Models:`  "_listing.nodel.js_" contains the database model for the listing schema.
                "_user.nodel.js_" contains the database model for the user profile schema.

   * `routes:` Routes for the post,delete,create,update and get listing .

   * `Controller:` Controller for the bussiness logic of the routes .

    * `Utils:`  General purposed utility class using which we can reuse the existing block of code without creating instance of the class .

* `Client:` This directory contains dynamic files for the user interface.
   * `app.js:` This file contains how the uploading works

   * `Pages:` This directory contains the EJS templates used to render the user interface pages.
   
      * `About.jsx:` This page give the user interface tells about the mern estate owne
        
      * `CreateListing.jsx:` This page creates the listing to provide the user to upload the estate they want .
   
      * `Home.jsx:` This page give the user interface for the home page.
   
      * `Profile.jsx:` The template contains the interface for the profile of the user .
        
      * `Search.jsx:` The template contains the search page for the user to search the estate according to their and apply the filter.
      
      *  `SignIn.jsx:` The template contains the sign in page for the user to sign in.
      
      *  `SignUp.jsx:` The template contains the sign up page for the user to sign up if user not exist.
   
   * `Components:` This directory contains the logic for the reusable code.
   
      * `Contact.jsx:` This page give the user to contact the landlord of the estate owner .
        
      * `Header.jsx:` This page contains the header of the mern estate app .
   
      * `ListingItem.jsx:` This page contains the listing which is uploaded by the user .
   
      * `OAuth.jsx:` The template contains the google authorization for the user giving the user to directly sign in directly using google acccount.
        
     
---

## Contributing 🤝
Contributions are welcome! 

If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

---
## Acknowledgements 👍
This project was created using React.js, Node.js, Express.js and MongoDB .

Special thanks to the authors and contributors of these technologies for their valuable work. 

---

## About Me 🚀

* I'm a final year B.tech undergraduate and a full-stack developer.


## Get in touch 💬
* Email: divyanshsrivastava215@gmail.com

* LinkedIn Profile: [@Divyansh Srivastava](https://www.linkedin.com/in/divyansh-srivastava-5a5956206/)

---


![Mern Estate app ss](https://github.com/divyansh369/Mern-Estate/blob/main/upload/Screenshot%20(140).png)
![Mern Estate app ss](https://github.com/divyansh369/Mern-Estate/blob/main/upload/Screenshot%20(141).png)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Express JS]: https://expressjs.com/
[MongoDB]: https://www.mongodb.com/
[Node JS]: https://nodejs.org/en 


