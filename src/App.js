import React from "react";

const App = () => {
  return (
    <div className="app">
      <h1>Human Settings Demo</h1>
      <Panel title="Basic Info">
        <BasicInfo />
      </Panel>
      <Panel title="Vital Signals">
        <VitalSignals />
      </Panel>
      <Panel title="Human Settings">
        <HumanSettings />
      </Panel>
    </div>
  );
};

const Panel = ({ title, children }) => {
  return (
    <div className="panel">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const BasicInfo = () => {
  return (
    <div className="basic-info">
      <p>Name: John Doe</p>
      <p>Age: 30</p>
      <p>Gender: Male</p>
      <p>Blood Type: O+</p>
      <p>Height: 180 cm</p>
      <p>Weight: 75 kg</p>
    </div>
  );
};

const VitalSignals = () => {
  return (
    <div className="vital-signals">
      <p>Heart Rate: 72 bpm</p>
      <p>Blood Pressure: 120/80 mmHg</p>
      <p>Temperature: 36.6°C</p>
      <p>Respiration Rate: 16 breaths/min</p>
    </div>
  );
};

const HumanSettings = () => {
  return (
    <div className="human-settings">
      <div className="toggle">
        <label htmlFor="emotions">Emotions:</label>
        <input type="checkbox" id="emotions" className="toggle-switch android-style" />
      </div>
      <label>
        Emotion Intensity:
        <input type="range" min="0" max="10" defaultValue="5" />
      </label>
      <div className="toggle">
        <label htmlFor="sleepMode">Sleep Mode:</label>
        <input type="checkbox" id="sleepMode" className="toggle-switch android-style" />
      </div>
    </div>
  );
};

export default App;
