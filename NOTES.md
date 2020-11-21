## Diagram of different views

![views whiteboard diagram](https://media.git.generalassemb.ly/user/16320/files/92d49b80-41af-11e9-873b-76cf1edcbba4)

---

## Code Along for `async` and `await`

```js
// src/components/routes/Movies.js
// old promise version:
componentDidMount () {
  axios(`${apiUrl}/movies`)
    .then(res => this.setState({ movies: res.data.movies }))
    .catch(console.error)
}
// new async/await version:
async componentDidMount() {
  try {
    const response = await axios(`${apiUrl}/movies`)
    this.setState({movies: response.data.movies})
  } catch (err) {
    console.error(err)
  }
}
```

## Refactoring handleChange from ES5 to ES2015 Syntax


### Using ES5 syntax

```js
const value = event.target.value
const name = event.target.name
const movieCopy = Object.assign({}, this.state.movie)
movieCopy[name] = value
this.setState({ movie: movieCopy })
```

###  Using ES6 spread operator

```js
const value = event.target.value
const name = event.target.name
const movieCopy = {...this.state.movie}
movieCopy[name] = value
this.setState({ movie: movieCopy })
```

### Using ES6 spread operator and only 1 variable

```js
const movieCopy = { ...this.state.movie }
movieCopy[event.target.name] = event.target.value
this.setState({ movie: movieCopy })
```

### Using ES6 spread and dynamic property keys

```js
const updatedMovie = { ...this.state.movie, [event.target.name]: event.target.value }
this.setState({ movie: updatedMovie })
```
