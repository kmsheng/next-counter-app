import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Link from 'next/link'
import { add, addAsync, cancelAddAsync } from '../redux/modules/counter'
import Head from '../components/head'
import Nav from '../components/nav'

class PageCounter extends Component {

  static propTypes = {
    add: PropTypes.func.isRequired,
    addAsync: PropTypes.func.isRequired,
    cancelAddAsync: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }

  render() {
    const { add, addAsync, count, cancelAddAsync } = this.props;
    return (
      <div>
        <Nav />
        <div>{count}</div>
        <button onClick={add}>add</button>
        <button onClick={addAsync}>add async (delay 3 seconds)</button>
        <button onClick={cancelAddAsync}>cancel</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = {
  add,
  addAsync,
  cancelAddAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCounter)
