import React from "react";

function ProjectShowcase() {
  return (
    <div className="project-container">
      <div className="project">
      
        {/* <div className="project-img"> */}
          <img src="/MyClip.png"/>
        {/* </div> */}
        
        
        <div className="project-desc">
          <span style={{ color: "var(--main)" }}>MyClip </span>is a clip
          uploading app where you can upload your gifyourgame.com clips. Each
          clip has a comment section, star rating, and an average of the number
          of stars rated by users.
        </div>
      </div>

      <div className="project">
        
          {/* <div className="project-img"> */}
            <img src="/hypertyper.png"/>
          {/* </div> */}
        

        <div className="project-desc">
          HyperTyper is a simple speed typing app made collaboratively during my
          time at Flatiron School.
        </div>
      </div>

      <div className="project">
        <div className="project-img">
          <img src="/TextTranslator.png"></img>
        </div>
        <div className="project-desc">
          Irure fugiat consectetur ea nulla sunt do duis reprehenderit laboris
          et velit cillum laboris. Occaecat laboris duis mollit ea enim
          consectetur est irure irure.
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;


<div className="project-container">
  <div className="project">
    <img>
    </img>
    <div className="project-desc">

    </div>
  </div>
</div>