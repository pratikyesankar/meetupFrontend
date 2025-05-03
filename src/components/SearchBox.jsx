import React from "react"
import "./SearchBox.css"

const SearchBox = () => {
  return (
    <div className="events-grid">
      <h1>Meetup Events</h1>

      <select id="eventType">
        <option value="" disabled>
          Select Event Type
        </option>
        <option value="online">Online Events</option>
        <option value="offline">Offline Events</option>
      </select>
    </div>
  )
}

export default SearchBox
