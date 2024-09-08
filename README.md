1. First Create Two folders frontend and backend
2. Then in backend folder run command **npm init -y and  npm i express nodemon**
3. Then in package.json file in the script section add these 2 lines  and alsoo this **"type": "module",**

 **"start":"node index.js",**

 **"dev":"nodemon index.js "**

4. Then create config.js in that file file define PORT number and write this **export const PORT=5555;**
5. Then create index.js file and in that file import express ,port and define app=express and add appp.listen function
6. Then write get request.
7. Then connect mongodb to your project
8. Then install mongoose npm i mongoose then import in index.js
9. Then make  a models folder and make models file and add models in them
10. Then in that file only create schema for project
11. Then in index.js write post request
