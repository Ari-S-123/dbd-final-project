import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const ConstructorEditor: React.FC = () => {
  const {id} = useParams()
  const [constructor, setConstructor] = useState({})

  const [drivers, setDrivers] = useState([]);

  const driversPromise = fetch('/findDriversByConstructorId/' + id)
  .then((response) => response.json())
  .then((drivers) => {
    setDrivers(drivers);
  });

  const findConstructorById = (id: string | undefined) =>
      fetch(`/findConstructorById`, {
        method: 'POST',
        body: id,
        headers: {'content-type': 'text/plain'}
      })
      .then(response => response.json())
      .then(constructor => setConstructor(constructor))

  useEffect(() => {
    if (id !== "new") {
      findConstructorById(id);
    }
  }, []);

  const createConstructor = (constructor: any) => {
    fetch(`/createConstructor/${constructor.name}/${constructor.color}/${constructor.nationality}/${constructor.value}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const updateConstructor = (id: string, constructor: any) => {
    fetch(`/updateConstructor/${id}/${constructor.name}/${constructor.color}/${constructor.nationality}/${constructor.value}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  const deleteConstructor = (id: string) => {
    fetch(`/deleteConstructor/${id}`)
    // eslint-disable-next-line no-restricted-globals
    .then(() => history.back())
  }

  return (
      <div>
        <h2>Constructor Editor</h2>
        <label>Id</label>
        <input className="form-control" value={
          // @ts-ignore
          constructor.id}/>
        <br/>
        <label>Name</label>
        <input className="form-control"
               onChange={(e) =>
                   setConstructor(constructor =>
                       ({...constructor, name: e.target.value}))}
               value={
                 // @ts-ignore
                 constructor.name}/>
        <br/>
        <label>Color</label>
        <input className="form-control"
               onChange={(e) =>
                   setConstructor(constructor =>
                       ({...constructor, color: e.target.value}))}
               value={
                 // @ts-ignore
                 constructor.color}/>
        <br/>
        <label>Nationality</label>
        <input className="form-control"
               onChange={(e) =>
                   setConstructor(constructor =>
                       ({...constructor, nationality: e.target.value}))}
               value={
                 // @ts-ignore
                 constructor.nationality}/>
        <br/>
        <label>Value</label>
        <input className="form-control"
               onChange={(e) =>
                   setConstructor(constructor =>
                       ({...constructor, value: e.target.value}))}
               value={
                 // @ts-ignore
                 constructor.value}/>
        <br/>
        <label>Drivers:-</label>
        <ul className="list-group">
          {
            drivers.map(driver =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={driver.id}>
                  <Link to={
                    // @ts-ignore
                    `/driverEditor/${driver.id}`}>
                    {// @ts-ignore
                      driver.name}
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
        <button className="btn btn-danger" onClick={() => deleteConstructor(
            // @ts-ignore
            constructor.id)}>
          Delete
        </button>
        <button className="btn btn-primary"
                onClick={() => updateConstructor(
                    // @ts-ignore
                    constructor.id, constructor)}>Save
        </button>
        <button className="btn btn-success"
                onClick={() => createConstructor(constructor)}>Create
        </button>
      </div>
  );
}