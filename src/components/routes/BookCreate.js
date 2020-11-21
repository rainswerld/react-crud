import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import BookForm from '../shared/BookForm'
import Layout from '../shared/Layout'

class BookCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {
        title: '',
        author: ''
      },
      createdBookId: null
    }
  }

  // Create a handleChange function that will be run anytime an input is changed
  // ex. anytime someone types in the input
  handleChange = event => {
    // ensure that the event's properties (especially event.target) are persisted,
    // i.e. not changed to null, after the handleChange function finishes running
    //
    // we need to do this, because the callback we pass to `this.setState`, will
    // not be called by React until after `handleChange` has finished running.
    event.persist()

    // use the updater callback function syntax, because our new state depends on
    // our previous state
    this.setState(prevState => {
      // create an object that will keep track of our updated field
      // ex. if the input's `name` is 'title' and its `value` was `1984`, then updated
      // field would be the object { 'title': '1984' }
      const updatedField = { [event.target.name]: event.target.value }
      // Copy the book properties onto the target object {}, creating a copy of `this.state.book`
      // Copy the updatedField onto the target object (our book copy)
      // return the target object as editedBook
      const editedBook = Object.assign({}, prevState.book, updatedField)

      // return the state change, that will be shallowly merged into `this.state`
      // in this case, we set the `book` state to be the new `editedBook`
      return { book: editedBook }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/books`,
      method: 'POST',
      data: { book: this.state.book }
    })
      .then(res => this.setState({ createdBookId: res.data.book._id }))
      .catch(console.error)
  }
  /*
  async handleSubmit = event => {
    event.preventDefault()

    try {
      const response = await axios({
        url: `${apiUrl}/books`,
        method: 'POST',
        data: { book: this.state.book }
      })
      this.setState({ createdBookId: response.data.book._id })
    } catch (err) {
      console.error(err)
    }
  }
  */

  render () {
    const { handleChange, handleSubmit } = this
    const { createdBookId, book } = this.state

    if (createdBookId) {
      return <Redirect to={`/books/${createdBookId}`} />
    }

    return (
      <Layout>
        <BookForm
          book={book}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    )
  }
}

export default BookCreate
