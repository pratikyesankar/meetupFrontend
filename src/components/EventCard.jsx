import React from "react"
import { Link } from "react-router-dom"
import useFetch from "../useFetch"
import "./EventCard.css"

const EventCard = () => {
  const {
    data: events,
    loading,
    error,
  } = useFetch("http://localhost:3000/events")

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="event-grid">
      {events?.map((event) => (
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
  )
}

export default EventCard
