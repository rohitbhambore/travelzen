import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import TourCard from "../TourComponent/TourCard";

const HomePage = () => {
  const [locations, setLocations] = useState([]);
  const [tours, setTours] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventFromLocationId, setEventFromLocationId] = useState("");
  const [eventToLocationId, setEventToLocationId] = useState("");
  const [tempEventName, setTempEventName] = useState("");
  const [tempEventFromLocationId, setTempEventFromLocationId] = useState("");
  const [tempEventToLocationId, setTempEventToLocationId] = useState("");

  const retrieveAllLocations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/location/fetch/all"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching locations:", error);
      return null;
    }
  };

  const retrieveAllEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/tour/fetch/all/active"
      );
      console.log("Response Data:", response.data); // Log the response data
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      return null;
    }
  };

  const searchEvents = async () => {
    try {
      if (eventName !== "") {
        const response = await axios.get(
          `http://localhost:8080/api/tour/fetch/name-wise?tourName=${eventName}`
        );
        return response.data;
      } else if (eventFromLocationId !== "" || eventToLocationId !== "") {
        const response = await axios.get(
          `http://localhost:8080/api/tour/fetch/location-wise?fromLocationId=${eventFromLocationId}&toLocationId=${eventToLocationId}`
        );
        return response.data;
      }
    } catch (error) {
      console.error("Error searching events:", error);
      return null;
    }
  };

  useEffect(() => {
    const getAllEvents = async () => {
      const allEvents = await retrieveAllEvents();
      if (allEvents && allEvents.tours) {
        setTours(allEvents.tours);
      } else {
        console.error("No tours found in response:", allEvents);
      }
    };

    const getSearchedEvents = async () => {
      const allEvents = await searchEvents();
      if (allEvents && allEvents.tours) {
        setTours(allEvents.tours);
      } else {
        console.error("No tours found in search response:", allEvents);
      }
    };

    const getAllLocations = async () => {
      const resLocation = await retrieveAllLocations();
      if (resLocation && resLocation.locations) {
        setLocations(resLocation.locations);
      } else {
        console.error("No locations found in response:", resLocation);
      }
    };

    if (
      eventFromLocationId !== "" ||
      eventToLocationId !== "" ||
      eventName !== ""
    ) {
      getSearchedEvents();
    } else {
      getAllEvents();
    }

    getAllLocations();
  }, [eventFromLocationId, eventToLocationId, eventName]);

  const searchEventByName = (e) => {
    e.preventDefault();
    setEventName(tempEventName);
    setTempEventName("");
    setEventFromLocationId("");
    setEventToLocationId("");
  };

  const searchEventByCategory = (e) => {
    e.preventDefault();
    setEventFromLocationId(tempEventFromLocationId);
    setEventToLocationId(tempEventToLocationId);
    setTempEventFromLocationId("");
    setTempEventToLocationId("");
    setEventName("");
  };

  return (
    <div className="container-fluid mb-2">
      <Carousel />
      <h5 className="text-color-second text-center mt-3">
        Search Tours here..!!
      </h5>

      <div className="d-flex aligns-items-center justify-content-center">
        <div className="row">
          <div className="col-auto">
            <div className="mt-3">
              <form className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="eventName"
                    onChange={(e) => setTempEventName(e.target.value)}
                    value={tempEventName}
                    placeholder="Search Tour here..."
                  />
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn bg-color custom-bg-text mb-3"
                    onClick={searchEventByName}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="mt-3">
              <form className="row g-3">
                <div className="col-auto">
                  <select
                    name="tempEventFromLocationId"
                    onChange={(e) => setTempEventFromLocationId(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">From Tour Location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-auto">
                  <select
                    name="tempEventToLocationId"
                    onChange={(e) => setTempEventToLocationId(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">To Tour Location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn bg-color custom-bg-text mb-3"
                    onClick={searchEventByCategory}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-3 mb-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {tours.map((tour) => (
            <TourCard key={tour.id} item={tour} />
          ))}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;