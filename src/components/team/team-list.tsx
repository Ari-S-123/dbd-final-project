import {useState} from "react";

export const TeamList: React.FC = () => {

  const [teams, setTeams] = useState([]);

  const teamsPromise = fetch('/findAllTeams')
  .then((response) => response.json())
  .then((teams) => {
    setTeams(teams);
  });

  return (
      <div>
        <h2>Teams</h2>
        <ul className="list-group">
          {
            teams.map(team =>
                <li className="list-group-item"
                    // @ts-ignore
                    key={team.id}>
                  {// @ts-ignore
                    team.name}
                </li>)
          }
        </ul>
      </div>
  );

}