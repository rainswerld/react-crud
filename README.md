[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React CRUD

## Prerequisites

- [react](https://git.generalassemb.ly/ga-wdi-boston/react)
- [react-router](https://git.generalassemb.ly/ga-wdi-boston/react-router)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests to an API from within a React app using [axios](https://www.npmjs.com/package/axios):
  - (R)EAD resource collection.
  - (R)EAD specific resource.
  - (D)ELETE specific resource.
  - (U)PDATE specific resource.
  - (C)REATE new resource.

## Preparation

1. Fork and clone this repository. [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Book API

This project is meant to work along side [this book API](https://library-express-api.herokuapp.com)
to demonstrate creating a basic single page application in React that talks to an
Express API.

Navigate to [`/books`](https://library-express-api.herokuapp.com/books) in your
browser. You should see an object with a key `'books'` that points to an array
of book objects. We will use this book data throughout this lesson.

### Discussion: `react-template`

This repo includes a copy of [react-template](git@git.generalassemb.ly:ga-wdi-boston/react-template.git).
This template is quite minimal. Most of the functionality comes from [create-react-app](https://facebook.github.io/create-react-app/),
which is a command line tool that lets you create new React projects out of
thin air, with all the nececssary packages and configuration to get right to
work.
**Take a minute to read their website**. If you ever want to start a new
React-project without using our template, `create-react-app` is they way to go.

Our template comes with a few extra features though. Try running `npm run start`
and see what comes up. Take a look through the `src` directory to get a sense
of the starter code there.

The main features that the template has that are not included in `create-react-app`:

- `react-router`
- A deployment script
- An SCSS compiler
- A custom linter config

## CRUD a Book

### Methodical Approach

1. Test API in browser (if possible)
1. Test API with cURL script
1. Add feature to react application
    1. Add route to `src/components/App.js`
    1. Create component to render for route
        1. Add component constructor
        1. Add component render
        1. Add component event
        1. Add component `axios` call

### Code-along: (R)EAD books collection

- Browser
- cURL
- React

### Code along: (R)EAD specific book

- Browser
- cURL
- React

### Lab: (D)ELETE specific book

- cURL
- React

### Code along: (U)PDATE specific book

- cURL
- React

*Hint: [Handling Multiple Inputs in React](https://reactjs.org/docs/forms.html#handling-multiple-inputs)*


#### Accessing `SyntheticEvent`s Asynchronously

React wraps the Browser's native `event` with something called a
[SyntheticEvent](https://reactjs.org/docs/events.html#event-pooling). This is
to improve cross-browser support. For performance reasons React reuses the
`SyntheticEvent` objects by pooling them and since it needs to be reused it will
nullify all the properties (such as `event.target`) after the callback has been
invoked.

So if we need to access the `event`'s properties asynchronously, for updating
state perhaps, we can use a method called `event.persist()`. This will:

> remove the synthetic event from the pool and allow references to the event to
> be retained by user code.


### Lab: (C)REATE new book

- cURL
- React

## Advanced React

### Code along: Refactoring

- Refactor forms into shared component
- Add footer using component composition
- Use `async` & `await` instead of promises

### Bonus Lab: `async` & `await`

Refactor the remaining CRUD functionality to use `async` and `await` instead
of Promise chains.

## Additional Resources

- [React FAQ AJAX](https://reactjs.org/docs/faq-ajax.html)
- [Axios](https://www.npmjs.com/package/axios)
- [Using Axios with React (10 min :movie_camera:)](https://www.youtube.com/watch?v=oQnojIyTXb8)
- [9 Things Every ReactJS Beginner Should Know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
- [Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [React AHA Moments](https://tylermcginnis.com/react-aha-moments/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
