import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const TeamEditor: React.FC = () => {
  const {id} = useParams()
  const [team, setTeam] = useState({})
  const [seats, setSeats] = useState([])

  const findTeamById = (id: string | undefined) =>
      fetch(`/findTeamById`, {
        method: 'POST',
        body: id,
        headers: {'content-type': 'text/plain'}
      })
      .then(response => response.json())
      .then(team => setTeam(team))

  const findSeatsByTeamId = (id: string | undefined) => {
    fetch('/findSeatsByTeamId/' + id)
    .then(response => response.json())
    .then(seats => setSeats(seats))
  }

  useEffect(() => {
    if (id !== "new") {
      findTeamById(id);
      findSeatsByTeamId(id);
    }
  }, []);

  const createTeam = (team: any) => {
    fetch(`/createTeam/${team.name}/${team.budget}/${team.user}/${team.constructer}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const updateTeam = (id: string, team: any) => {
    fetch(`/updateTeam/${id}/${team.name}/${team.budget}/${team.user}/${team.constructer}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const deleteTeam = (id: string) => {
    fetch(`/deleteTeam/${id}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  return (
      <div>
        <h2>Team Editor</h2>
        <label>Id</label>
        <input className="form-control" value={
          // @ts-ignore
          team.id}/><br/>
        <label>Name</label>
        <input className="form-control"
               onChange={(e) =>
                   setTeam(team =>
                       ({...team, name: e.target.value}))}
               value={
                 // @ts-ignore
                 team.name}/>
        <label>Budget</label>
        <input className="form-control"
               onChange={(e) =>
                   setTeam(team =>
                       ({...team, budget: e.target.value}))}
               value={
                 // @ts-ignore
                 team.budget}/>
        <label>User ID</label>
        <input className="form-control"
               onChange={(e) =>
                   setTeam(team =>
                       ({...team, user: e.target.value}))}
               value={
                 // @ts-ignore
                 team.user}/>
        <label>Constructor ID</label>
        <input className="form-control"
               onChange={(e) =>
                   setTeam(team =>
                       ({...team, constructer: e.target.value}))}
               value={
                 // @ts-ignore
                 team.constructer}/>
        <label>Linked Drivers:- </label>
        <ul className="list-group">
          {
            seats.map(seat =>
                (
                    <li className="list-group-item"
                        // @ts-ignore
                        key={seat.id}>
                      <Link to={
                        // @ts-ignore
                        `/teamEditor/${seat.driverId}`}>
                        {// @ts-ignore
                            'Link to Driver ' + seat.driverId}
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
        <button className="btn btn-danger" onClick={() => deleteTeam(
            // @ts-ignore
            team.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
                onClick={() => updateTeam(
                    // @ts-ignore
                    team.id, team)}>Save
        </button>
        <button className="btn btn-success"
                onClick={() => createTeam(team)}>Create
        </button>
      </div>
  );
}