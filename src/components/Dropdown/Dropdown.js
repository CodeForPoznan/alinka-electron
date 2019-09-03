import React from "react";
import Dropdown from "react-dropdown";
import styles from "./Dropdown.scss";

const options = ["szkola1", "szkola2", "szkola3"];

class Drop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  render() {
    const defaultOption = this.state.selected;
    return (
      <div className={styles.DropdownControl}>
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Wybierz szkołę"
          placeholderClassName={styles.MyPlaceholderClassName}
        />
        <span className={styles.DropdownArrow} />
      </div>
    );
  }
}

export default Drop;
