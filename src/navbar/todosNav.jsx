import styles from "./todosNav.module.css"
import { NavLink} from "react-router-dom";

export default function TodosNav() {

    return (
        <nav className={styles.nav}>
            <ul className="flex space-x-4">
                <li>
                    <NavLink to="not-started">Not-Started</NavLink>
                </li>
                <li>
                    <NavLink to="inProgress">InProgress</NavLink>
                </li>
                <li>
                    <NavLink to="completed">Completed</NavLink>
                </li>
            </ul>
        </nav>
    );
}