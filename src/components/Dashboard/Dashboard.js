import React from "react";
import styles from "./Dashboard.scss";
import FormSteps from "./Form/FormSteps";
import TeamContainer from "../../containers/TeamContainer";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Wrapper}>
        <FormSteps />
        <TeamContainer>
          {
            (handleChange) => {
              return (
                <React.Fragment>
                  <h1>Test</h1>
                  <div className="members">
                    <label htmlFor="member">Członek 1</label>
                    <input type="text" name="member" onChange={handleChange} />
                    <label htmlFor="member2">Członek 2</label>
                    <input type="text" name="member2" onChange={handleChange} />
                    <label htmlFor="membe3">Członek 3</label>
                    <input type="text" name="member3" onChange={handleChange} />
                    <label htmlFor="member4">Członek 4</label>
                    <input type="text" name="member4" onChange={handleChange} />
                    <label htmlFor="member5">Członek 5</label>
                    <input type="text" name="member5" onChange={handleChange} />
                    <input type="text" name="member6" onChange={handleChange} />
                  </div>
                </React.Fragment>
              );
            }
          }
        </TeamContainer>
      </div>
    </div>
  );
};

export default Dashboard;
