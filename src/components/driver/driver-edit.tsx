import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const DriverEditor: React.FC = () => {
  const {id} = useParams()
  const [driver, setDriver] = useState({})
  const [seats, setSeats] = useState([])

  const findDriverById = (id: string | undefined) =>
      fetch(`/findDriverById`, {
        method: 'POST',
        body: id,
        headers: {'content-type': 'text/plain'}
      })
      .then(response => response.json())
      .then(driver => setDriver(driver))

  const findSeatsByDriverId = (id: string | undefined) => {
    fetch('/findSeatsByDriverId/' + id)
    .then(response => response.json())
    .then(seats => setSeats(seats))
  }

  useEffect(() => {
    if (id !== "new") {
      findDriverById(id);
      findSeatsByDriverId(id);
    }
  }, []);

  const createDriver = (driver: any) => {
    fetch(`/createDriver/${driver.name}/${driver.nationality}/${driver.value}/${driver.constructor_id}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const updateDriver = (id: string, driver: any) => {
    fetch(`/updateDriver/${id}/${driver.name}/${driver.nationality}/${driver.value}/${driver.constructor_id}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const deleteDriver = (id: string) => {
    fetch(`/deleteDriver/${id}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  return (
      <div>
        <h2>Driver Editor</h2>
        <label>Id</label>
        <input className="form-control" value={
          // @ts-ignore
          driver.id}/><br/>
        <label>Name</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, name: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.name}/>
        <label>Nationality</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, nationality: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.nationality}/>
        <label>Value</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, value: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.value}/>
        <label>Constructor ID</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, constructor_id: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.constructor_id}/>
        <label>Linked Fantasy Teams:- </label>
        <ul className="list-group">
          {
            seats.map(seat =>
                (
                    <li className="list-group-item"
                        // @ts-ignore
                        key={seat.id}>
                      <Link to={
                        // @ts-ignore
                        `/teamEditor/${seat.fantasyTeamId}`}>
                        {// @ts-ignore
                            'Link to Team ' + seat.fantasyTeamId}
                      </Link>
                    </li>
                ))
          }
        </ul>
        <br/>
        <button className="btn btn-warning" onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          history.back()
        }}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={() => deleteDriver(
            // @ts-ignore
            driver.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
                onClick={() => updateDriver(
                    // @ts-ignore
                    driver.id, driver)}>Save
        </button>
        <button className="btn btn-success"
                onClick={() => createDriver(driver)}>Create
        </button>
      </div>
  );
}