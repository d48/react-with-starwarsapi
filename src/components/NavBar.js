import React from "react"

const NavBar = (props) => {
  const { previous, next, onClickHandler, pageTotal, currentPage } = props

  return (
    <nav className="navbar">
      {previous ? <button onClick={() => {onClickHandler(previous)}}>Previous</button> : ''}
      <span className="currentpage">Page {currentPage} of {pageTotal}</span>
      {next ? <button onClick={() => {onClickHandler(next, true)}}>Next</button> : ''}
    </nav>
  )
}

export default NavBar
