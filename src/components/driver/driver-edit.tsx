import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import styles from './driver-edit.module.css';

export const DriverEditor: React.FC = () => {
  const {id} = useParams()
  const [driver, setDriver] = useState({})
  const [seats, setSeats] = useState([])
  const [seatEdit, setSeatEdit] = useState({
    fantasyTeamId: '',
    driverId: id
  })
  const [tempSeat, setTempSeat] = useState({})

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

  const findSeatByBothIds = (team_id: string | undefined, driver_id: string | undefined) => {
    fetch(`/findSeatByBothIds/${team_id}/${driver_id}`)
    .then(response => response.json())
    .then(seat => setTempSeat(seat))
  }

  const createSeat = (seatEdit: any) => {
    fetch(`/createSeat/${seatEdit.driverId}/${seatEdit.fantasyTeamId}`)
    .then(response => response.json())
  }

  const deleteSeat = (id: string | undefined) => {
    fetch(`/deleteSeat/` + id)
    .then(response => response.json())
  }

  useEffect(() => {
    if (id !== "new") {
      findDriverById(id);
      findSeatsByDriverId(id);
    }
  }, []);

  useEffect(() => {
    if (id !== "new") {
      findSeatByBothIds(seatEdit.fantasyTeamId, id);
    }
  });

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
      <div className={styles.driverEdit}>
        <h2>Driver Editor</h2>
        <label>Id:</label>
        <input className="form-control" value={
          // @ts-ignore
          driver.id}/>
        <br/>
        <label>Name:</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, name: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.name}/>
        <br/>
        <label>Nationality:</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, nationality: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.nationality}/>
        <br/>
        <label>Value:</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, value: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.value}/>
        <br/>
        <label>Constructor ID:</label>
        <input className="form-control"
               onChange={(e) =>
                   setDriver(driver =>
                       ({...driver, constructor_id: e.target.value}))}
               value={
                 // @ts-ignore
                 driver.constructor_id}/>
        <br/>
        <label>Add to or Delete from Team with following ID:</label>
        <input className="form-control"
               onChange={(e) =>
                   setSeatEdit(seatEdit =>
                       ({...seatEdit, fantasyTeamId: e.target.value}))}
               value={
                 // @ts-ignore
                 seatEdit.fantasyTeamId}/>
        <br/>
        <button className="btn btn-success"
                onClick={() => createSeat(seatEdit)}>Add to Team
        </button>
        <button className="btn btn-danger"
                onClick={() => {
                  // @ts-ignore
                  findSeatByBothIds(seatEdit.fantasyTeamId, driver.id);
                  // @ts-ignore
                  deleteSeat(tempSeat.id);
                }}>Delete from Team
        </button>
        <br/>
        <br/>
        <label>Linked Fantasy Teams:-</label>
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