import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./driver-list.module.css";

export const DriverList: React.FC = () => {

  const [drivers, setDrivers] = useState([]);

  const driversPromise = fetch('/findAllDrivers')
  .then((response) => response.json())
  .then((drivers) => {
    setDrivers(drivers);
  });

  return (
      <div className={styles.driverList}>
        <h2>Drivers</h2>
        <div className={styles.newButton}>
          <a className="btn btn-primary" href="/driverEditor/new">Add New Driver</a>
        </div>

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
      </div>
  );

}