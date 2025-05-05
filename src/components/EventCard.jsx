import React, { useState } from "react"
import { Link } from "react-router-dom"
import useFetch from "../useFetch"
import "./EventCard.css"

const EventCard = () => {
  const [eventType, setEventType] = useState("All")

  const {
    data: events,
    loading,
    error,
  } = useFetch("http://localhost:3000/events")

  const handleTypeChange = (e) => {
    const selectedType = e.target.value
    setEventType(selectedType)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const filteredEvents =
    eventType === "All"
      ? events
      : events?.filter((event) => event.type === eventType)

  return (
    <div className="events-grid container">
      {/* SearchBox Section */}
      <div className="d-flex justify-content-between align-items-center mb-4 header-container">
        <h1 className="meetup-events-title">Meetup Events</h1>
        <div className="d-flex align-items-center gap-3">
          <select
            id="eventType"
            className="form-select event-type-dropdown"
            value={eventType}
            onChange={handleTypeChange}
          >
            <option value="All">Select Event Type</option>
            <option value="Online Event">Online Event</option>
            <option value="Offline Event">Offline Event</option>
          </select>
        </div>
      </div>

      {/* EventCard Section */}
      <div className="event-grid">
        {filteredEvents?.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="image-wrapper">
              {event.thumbnail && (
                <>
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="event-image"
                  />
                  <span className="event-type">{event.type}</span>
                </>
              )}
            </div>
            <div className="event-details">
              <span className="event-date">
                {new Date(event.date).toLocaleDateString()}
              </span>
              <span className="event-time">{event.sessionTimings}</span>
              <Link to={`/events/${event.id}`}>
                <h2 className="event-title">{event.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCard
