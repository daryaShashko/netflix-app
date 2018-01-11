The idea is to create a single page application, which will allow users to search the TMDb
There will be two pages: main page with search and a page with a particular film.

#Task 1
#### Setting up the environment
For this task you will need to setup a simple NodeJS server to implement
server-side rendering. We recommend using the Express.
Please install Webpack and setup Babel for your application.
Try to make your configuration simple, as for the small SPA.
You will also need to install React, Redux, React-Redux, React-Router, Jest
and Redux Form.
---

#Task 2
#### Create the HTML layout with React components for both pages
---
You should only layout these pages using JSX. They will be used in future
tasks.
Try to use all of the React composition power when performing the task:
decompose components into small reusable parts.
---

#Task 3
#### Create routing for your application.
---
Link app states between each other with React router.
By default user lands on a new page with empty results state (caption 0).
When user performs a new search, you should redirect him to:
localhost/search/Search%20Query
When a new user lands on the page with such URL, you should perform
search and display results.
When user clicks on a film item, redirect him to:
localhost/film/Attack%20on%20titan
On switching search type or sorting type you shouldn’t switch any routes.
---

#Task 4
#### Fetching and managing data with Redux
---
Read  API docs:
https://www.themoviedb.org/documentation/api
Make your search component perform real AJAX requests.
Connect redux and store all the data in your Redux store.
---
#Task 5
#### Testing
---
Please create unit tests for some edge cases for each of your components.
Covering redux reducers with tests is a plus.
---

#Task 6
#### Server side rendering
---
Implement server rendering in your NodeJS application.
---
## Start the work.
```
npm i
npm run dev
```

Для сброса данных в базе:
```
npm run reset-db
```
