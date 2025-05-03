import React from "react"
import { useParams, Link } from "react-router-dom"
import useFetch from "../useFetch"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import EventNavbar from "./EventNavbar"
import "./EventDetails.css"

const EventDetails = () => {
  const { eventId } = useParams()

  const {
    data: events,
    loading,
    error,
  } = useFetch("http://localhost:3000/events")

  const event = events?.find((event) => event.id === parseInt(eventId))

  if (loading) {
    return <div>Loading event details...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!event) {
    return <div>Event not found.</div>
  }

  return (
    <>
      <div className="marketing">
        <EventNavbar />
        <main className="container py-4">
          <div>
            <div>
              <p>
                <h2>{event.title}</h2>
                Hosted by:
                <p>
                  <strong>{event.host}</strong>
                </p>
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="picture col-md-6">
              <img
                src={event.thumbnail}
                className="eventImage img-fluid rounded"
                alt={event.title}
              />
              <h2 className="details mt-3">Details:</h2>
              <p>{event.description}</p>
            </div>

            <div className="col-md-4">
              <div className="eventMeta">
                <p>
                  <i className="bi bi-calendar me-2"></i>
                  {new Date(event.date).toLocaleString()}
                </p>
                <br />
                <p>
                  <i className="bi bi-geo-alt me-2"></i>
                  {event.venue}, {event.address}
                </p>
                <br />
                <p>
                  <i className="bi bi-currency-rupee me-2"></i> {event.pricing}
                </p>
                <br />
              </div>
              <h2 className="speakers mt-4">Speakers: 2</h2>
              <div className="d-flex flex-row gap-3">
                {event.speaker1 && (
                  <div className="speakerCard d-flex align-items-center p-3 bg-light rounded">
                    <img
                      src={event.speaker1img}
                      className="speakerImage rounded-circle me-3"
                      alt={event.speaker1}
                    />
                    <div>
                      <h5 className="mb-0">{event.speaker1}</h5>
                      <p className="text-muted mb-0">{event.designation1}</p>
                    </div>
                  </div>
                )}
                {event.speaker2 && (
                  <div className="speakerCard d-flex align-items-center p-3 bg-light rounded">
                    <img
                      src={event.speaker2img}
                      className="speakerImage rounded-circle me-3"
                      alt={event.speaker2}
                    />
                    <div>
                      <h5 className="mb-0">{event.speaker2}</h5>
                      <p className="text-muted mb-0">{event.designation2}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button className="rsvpButton btn btn-danger w-25 text-center">
                  RSVP
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6">
              <h2 className="additionalInfo">Additional Information:</h2>
              <p>
                <strong>Dress Code:</strong> {event.dressCode}
              </p>
              <p>
                <strong>Age Restrictions:</strong> {event.ageRestrictions}
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h2 className="eventTags">Event Tags:</h2>
              <div>
                {event.tags &&
                  event.tags.map((tag, index) => (
                    <span key={index} className="tag badge bg-danger me-2">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default EventDetails
