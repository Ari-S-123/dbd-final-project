import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const UserEditor: React.FC = () => {
  const {id} = useParams()
  const [user, setUser] = useState({})


  const findUserById = (id: string | undefined) =>
      fetch(`/findUserById`, {
        method: 'POST',
        body: id,
        headers: {'content-type': 'application/json'}
      })
      .then(response => response.json())
      .then(user => setUser(user))

  useEffect(() => {
    if (id !== "new") {
      findUserById(id);
    }
  }, []);

  return (
      <div>
        <h2>User Editor</h2>
        <label>Id</label>
        <input className="form-control" value={
          // @ts-ignore
          user.id}/><br/>
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
        <label>Username</label>
        <input className="form-control"
               onChange={(e) =>
                   setUser(user =>
                       ({...user, username: e.target.value}))}
               value={
                 // @ts-ignore
                 user.username}/>
        <label>Email</label>
        <input className="form-control"
               onChange={(e) =>
                   setUser(user =>
                       ({...user, email: e.target.value}))}
               value={
                 // @ts-ignore
                 user.email}/>

        <br/>
        <button className="btn btn-warning" onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          history.back()
        }}>
          Cancel
        </button>
        {/*<button className="btn btn-danger" onClick={() => deleteUser(user.id)}>*/}
        {/*  Delete*/}
        {/*</button>*/}
        {/*<button className="btn btn-primary"*/}
        {/*        onClick={() => updateUser(user.id, user)}>Save*/}
        {/*</button>*/}
        {/*<button className="btn btn-success"*/}
        {/*        onClick={() => createUser(user)}>Create*/}
        {/*</button>*/}
      </div>
  );
}