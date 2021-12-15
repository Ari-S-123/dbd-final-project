import {useState} from "react";
import {Link} from "react-router-dom";
import styles from './constructor-list.module.css';

export const ConstructorList: React.FC = () => {

  const [constructors, setConstructors] = useState([]);

  const constructorsPromise = fetch('/findAllConstructors')
  .then((response) => response.json())
  .then((constructors) => {
    setConstructors(constructors);
  });

  return (
      <div className={styles.constructorList}>
        <h2>Constructors</h2>
        <div className={styles.newButton}>
          <a className="btn btn-primary" href="/constructorEditor/new">Add New Constructor</a>
        </div>
        <ul className="list-group">
          {
            constructors.map(constructor =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={constructor.id}>
                  <Link to={
                    // @ts-ignore
                    `/constructorEditor/${constructor.id}`}>
                    {// @ts-ignore
                      constructor.name}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  );

}