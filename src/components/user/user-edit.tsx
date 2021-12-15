import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const UserEditor: React.FC = () => {
  const {id} = useParams()
  const [user, setUser] = useState({})

  const [teams, setTeams] = useState([]);

  const teamsPromise = fetch('/findTeamsByUserId/' + id)
  .then((response) => response.json())
  .then((teams) => {
    setTeams(teams);
  });


  const findUserById = (id: string | undefined) =>
      fetch(`/findUserById`, {
        method: 'POST',
        body: id,
        headers: {'content-type': 'text/plain'}
      })
      .then(response => response.json())
      .then(user => setUser(user))

  useEffect(() => {
    if (id !== "new") {
      findUserById(id);
    }
  });

  const createUser = (user: any) => {
    fetch(`/createUser/${user.firstName}/${user.lastName}/${user.username}/${user.email}/${user.dateOfBirth}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const updateUser = (id: string, user: any) => {
    fetch(`/updateUser/${id}/${user.firstName}/${user.lastName}/${user.username}/${user.email}/${user.dateOfBirth}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const deleteUser = (id: string) => {
    fetch(`/deleteUser/${id}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  return (
      <div>
        <h2>User Editor</h2>
        <label>Id</label>
        <input className="form-control" value={
          // @ts-ignore
          user.id}/>
        <br/>
        <label>First Name</label>
        <input className="form-control"
               onChange={(e) =>
                   setUser(user =>
                       ({...user, firstName: e.target.value}))}
               value={
                 // @ts-ignore
                 user.firstName}/>
        <br/>
        <label>Last Name</label>
        <input className="form-control"
               onChange={(e) =>
                   setUser(user =>
                       ({...user, lastName: e.target.value}))}
               value={
                 // @ts-ignore
                 user.lastName}/>
        <br/>
        <label>Username</label>
        <input className="form-control"
               onChange={(e) =>
                   setUser(user =>
                       ({...user, username: e.target.value}))}
               value={
                 // @ts-ignore
                 user.username}/>
        <br/>
        <label>Email</label>
        <input className="form-control"
               onChange={(e) =>
                   setUser(user =>
                       ({...user, email: e.target.value}))}
               value={
                 // @ts-ignore
                 user.email}/>
        <br/>
        <label>Date Of Birth</label>
        <input className="form-control"
               onChange={(e) =>
                   setUser(user =>
                       ({...user, dateOfBirth: e.target.value}))}
               value={
                 // @ts-ignore
                 user.dateOfBirth}/>
        <br/>
        <label>Teams:-</label>
        <ul className="list-group">
          {
            teams.map(team =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={team.id}>
                  <Link to={
                    // @ts-ignore
                    `/teamEditor/${team.id}`}>
                    {// @ts-ignore
                      team.name}
                  </Link>
                </li>)
          }
        </ul>
        <br/>
        <button className="btn btn-warning" onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          history.back()
        }}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={() => deleteUser(
            // @ts-ignore
            user.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
                onClick={() => updateUser(
                    // @ts-ignore
                    user.id, user)}>Save
        </button>
        <button className="btn btn-success"
                onClick={() => createUser(user)}>Create
        </button>
      </div>
  );
}