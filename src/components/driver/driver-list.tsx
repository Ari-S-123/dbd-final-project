import {useState} from "react";

export const DriverList: React.FC = () => {

  const [drivers, setDrivers] = useState([]);

  const driversPromise = fetch('/findAllDrivers')
  .then((response) => response.json())
  .then((drivers) => {
    setDrivers(drivers);
  });

  return (
      <div>
        <h2>Drivers</h2>
        <ul className="list-group">
          {
            drivers.map(driver =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={driver.id}>
                  {// @ts-ignore
                    driver.name}
                </li>)
          }
        </ul>
      </div>
  );

}