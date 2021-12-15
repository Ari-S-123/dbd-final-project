import {useState} from "react";

export const ConstructorList: React.FC = () => {

  const [constructors, setConstructors] = useState([]);

  const constructorsPromise = fetch('/findAllConstructors')
  .then((response) => response.json())
  .then((constructors) => {
    setConstructors(constructors);
  });

  return (
      <div>
        <h2>Constructors</h2>
        <ul className="list-group">
          {
            constructors.map(constructor =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={constructor.id}>
                  {// @ts-ignore
                    constructor.name}
                </li>)
          }
        </ul>
      </div>
  );

}