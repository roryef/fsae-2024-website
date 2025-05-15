import React from "react";
import "./Data.css";

function Data() {
  const groupedData = {
    "May 10, 2025": [
      {
        name: "Setup Sheet",
        url: "https://docs.google.com/spreadsheets/d/1vu30C2sP-GOUOol7s5a7TJO-kla68ZJZy_RbrkEXdwQ/edit?gid=2118743170#gid=2118743170",
      },
      {
        name: "Run Log",
        url: "https://docs.google.com/spreadsheets/d/1luxBProBir_F7Uc2U7_BtDbOPCs9bM_c7ZsOwdZH3Wg/edit?gid=0#gid=0",
      },
      {
        name: "Data Debrief",
        url: "https://docs.google.com/document/d/1SfoN8MN4fyHJR9iM_1yXkLWH_XJ2h-Q_mCqtj6qImqw/edit?tab=t.0#heading=h.rmtps7vr3rj",
      },
      {
        name: "MOTEC Data - Garage Loops",
        url: "https://drive.google.com/file/d/19BAyeTNlroq0qZxfSR9n7D-EvIupW2Vb/view?usp=sharing",
      },
      {
        name: "CSV for PI Toolbox",
        url: "https://drive.google.com/file/d/19BAyeTNlroq0qZxfSR9n7D-EvIupW2Vb/view?usp=sharing",
      },
    ],
    "May 9, 2025": [
      {
        name: "Setup Sheet",
        url: "https://docs.google.com/spreadsheets/d/1vu30C2sP-GOUOol7s5a7TJO-kla68ZJZy_RbrkEXdwQ/edit?gid=0#gid=0",
      },
      {
        name: "MOTEC Data",
        url: "https://drive.google.com/file/d/1IH1C-7yfydN7tmbg5RvfPOt0R6VJbtdk/view?usp=drive_link",
      },
    ],
  };
  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <img
          src={`${process.env.PUBLIC_URL}/groups/team_wide.png`}
          alt="News Hero"
          className="news-hero-image"
        />
        <div className="news-overlay">
          <h1 className="news-title">DATA</h1>
        </div>
      </section>

      {/* Data Access Section */}
      <section className="data-section">
        <h2 className="data-section-title">Access Our Data</h2>
        <p className="data-format">Access our most recent testing data here:</p>

        {/* Dynamically render grouped data */}
        <div className="grouped-data-files">
          {Object.entries(groupedData).map(([date, files]) => (
            <div key={date} className="data-group">
              <h3 className="data-date">{date}</h3>
              <ul className="data-file-list">
                {files.map((file, index) => (
                  <li key={index}>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="data-file-link"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Data;
