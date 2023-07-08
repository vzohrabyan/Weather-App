import React from 'react'

const Loading = () => {
  return (
    <div style={{height: "30vh", overflow: "hidden", position: "absolute", top: "50%", left: "50%",transform: "translate(-50%, -50%)"}} className="searchedMovies">
        <div className="loading" style={{marginTop: "30px"}}>
            <div></div><div></div><div></div>
        </div>
    </div>
  )
}

export default Loading