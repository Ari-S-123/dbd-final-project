import {useState} from "react";
import {Link} from "react-router-dom";
import styles from './team-list.module.css';

export const TeamList: React.FC = () => {

  const [teams, setTeams] = useState([]);

  const teamsPromise = fetch('/findAllTeams')
  .then((response) => response.json())
  .then((teams) => {
    setTeams(teams);
  });

  return (
      <div className={styles.teamList}>
        <h2>Teams</h2>
        <div className={styles.newButton}>
          <a className="btn btn-primary" href="/teamEditor/new">Add New Team</a>
        </div>

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
      </div>
  );

}