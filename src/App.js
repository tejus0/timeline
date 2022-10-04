import "./App.css";
import Header from "./header.js";
import "./timeline.css";
import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import Footer from "./Footer";

function App() {
  let workIconStyles = { background: "#06D6A0" };
  // let schoolIconStyles = { background: "#06D6A0" };

  return (
    <div className="main-cont">
      <Header />
      <div className="timeline">
        <h1 className="title">Timeline</h1>
        <VerticalTimeline>
        {timelineElements.sort((a,b)=>new Date(a["Timeline Date"]).getTime()-new Date(b["Timeline Date"]).getTime()).map((element) => {
            return (
              <VerticalTimelineElement
              className="timeline-date"
                key={element.key}
                contentStyle={{ background: "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)", color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={element["Timeline Date"]}
                dateClassName="date"
                iconStyle={workIconStyles}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element["Prediction Heading"]}
                </h3>
                <p id="description">{element.text}</p>
                <p className="vertical-timeline-element-subtitle">{element["Prediction Date "]}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
}

export default App;
