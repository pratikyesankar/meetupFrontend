import React, { useState } from "react"
import "./SearchBox.css"

const SearchBox = ({ onEventTypeChange }) => {
  const [eventType, setEventType] = useState("")

  const handleTypeChange = (e) => {
    const selectedType = e.target.value
    setEventType(selectedType)
    if (onEventTypeChange) {
      onEventTypeChange(selectedType)
    }
  }

  return (
    <div className="events-grid container">
      <div className="d-flex justify-content-between align-items-center mb-4 header-container">
        <h1 className="meetup-events-title ">Meetup Events</h1>
        <div className="d-flex align-items-center gap-3">
          <select
            id="eventType"
            className="form-select event-type-dropdown"
            value={eventType}
            onChange={handleTypeChange}
          >
            <option value="" disabled>
              Select Event Type
            </option>
            <option value="Online Event">Online Event</option>
            <option value="Offline Event">Offline Event</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
