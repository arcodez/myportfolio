import React from 'react';
import { skills } from '../../configs';

 function Skills() {
  function generateSkillsGrid() {
    const rows = [];

    for (let i = 0; i < skills.length; i += 4) {
      rows.push(<div className="columns" key={i}>
        {
          (() => {
            const columns = [];

            for (let j = i; j < i + 4; j++) {
              if (skills[j]) {
                columns.push(<div className="column skillBox" key={skills[j].skill}>
                  <div className="imageWrapper">
                    <img
                      className="image"
                      src={skills[j].link}
                      alt="skill"
                    />
                  </div>

                  <div classNam="subtitle">
                    {skills[j].skill}
                  </div>
                </div>);
              }
            }

            return columns;
          })()
        }
      </div>)
    }

    return rows;
  }

    return (
      <div id="Skills">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Skills</h1>
              <div className="content">
                {generateSkillsGrid()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Skills;
