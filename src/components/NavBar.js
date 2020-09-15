import React from "react"

const NavBar = (props) => {
  const { previous, next, onClickHandler, pageTotal } = props

  const currentPage = next ? next.split('=')[1] - 1 : 1

  return (
    <nav className="navbar">
      {previous ? <button onClick={() => {onClickHandler(previous)}}>Previous</button> : ''}
      <span className="currentpage">Page {currentPage} of {pageTotal}</span>
      {next ? <button onClick={() => {onClickHandler(next)}}>Next</button> : ''}
    </nav>
  )
}

export default NavBar
