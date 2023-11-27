# 
Real estate app using mern and tailwind css

# Mern-Estate App ⭐

Real estate app using **Node.js, Express JS, MongoDB, React JS and the EJS templating engine** based application designed to help users operating an online marketplace for short and long-term homestays and experiences. .


![Mern Estate app ss](https://github.com/divyansh369/Mern-Estate/blob/main/upload/Screenshot%20(138).png)


### Built With 🏗️

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
* ![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)



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

## Usage

* __Home Page (http://localhost:3000):__ This is the default page that shows the estate marketplace front page. 
You can view estates and sign-in and if new user then sign-up and create a account .

* __Search:__ You can search the estates from the search panel and apply many filters. 

* __Profile :__ user can view their profile and can view their listing which uploaded by the user.

* __About Page :__ This page give the user interface tells about the mern estate owner.

* __CreateListing Page :__ This page give the user to create the estate by uploading many information regarding estate . 



## Project Structure
The project structure is as follows:

* `Api:` The main entry point of the application. It configures the server, sets up the routes, and connects to the database.
   
   * `Models:`  "_listing.nodel.js_" contains the database model for the listing schema.
                "_user.nodel.js_" contains the database model for the user profile schema.

   * `routes:` The model for file schema .

* `public:` This directory contains static files such as CSS stylesheets.
   * `styles.css:` This file contains the CSS stylesheets for the application.
   * `app.js:` This file contains how the uploading works

* `views:` This directory contains the EJS templates used to render the HTML pages.

   * `cleanup.ejs:` The cleanup template that is included in other EJS files.

   * `download.ejs:` The download template that is included in other EJS files .

   * `filePreview.ejs:` The template for the preview of the file whether file send is correct or not.

   * `files.ejs:` The template for the time limit .
     
   * `home.ejs:` The template for the home section for user to interact with app.
     
---

## Contributing 
Contributions are welcome! 

If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

---
## Acknowledgements 👍
This project was created using Node.js, Express, MongoDB, and the EJS templating engine. 

Special thanks to the authors and contributors of these technologies for their valuable work. 

---

## 🚀 About Me

* I'm a final year B.tech undergraduate and a full-stack developer.


## Get in touch 💬
* Email: divyanshsrivastava215@gmail.com

* LinkedIn Profile: [@Divyansh Srivastava](https://www.linkedin.com/in/divyansh-srivastava-5a5956206/)

---


https://github.com/divyansh369/File-sharing/assets/71817815/515b5618-808f-432c-b35b-ea70c19492ab

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


