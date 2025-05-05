import React from "react"
import "./EventNavbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const EventNavbar = () => {
  return (
    <>
      <div className="meetup-top-section">
        <div className="meetup-top-container">
          <a href="/">
            <img
              src="https://www.nicepng.com/png/detail/266-2663230_com-has-an-unintended-cryptocurrency-community-interest-meetup.png"
              alt=""
              height="40"
              width="90"
            />
          </a>
          <div className="search-bar">
            {" "}
            <div class="input-group">
              <span class="input-group-text" id="search-icon">
                <i class="bi bi-search"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search by title and tags"
                aria-label="Search"
                aria-describedby="search-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventNavbar
