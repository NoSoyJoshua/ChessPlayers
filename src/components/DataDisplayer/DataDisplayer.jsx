import React from 'react'
import './DataDisplayer.css'

function DataDisplayer(props) {
  return (
    <div className="player-data">
        <h1>Player Information</h1>
        <p>Name: {props.data.name}</p>
        <p>Federation: {props.data.federation}</p>
        <p>Birth Year: {props.data.birth_year}</p>
        {props.data.title !== "None" ? <p>Title: {props.data.title}</p> : null}
        <p>Standard ELO: {props.data.standard_elo}</p>
        <p>Rapid ELO: {props.data.rapid_elo}</p>
        <p>Blitz ELO: {props.data.blitz_elo}</p>
    </div>
  )
}

export default DataDisplayer