import React from "react";

function ProjectShowcase() {
  return (
    <div className="project-container">
  <div className="project">
    <a href="https://github.com/Scottsdaaale/MyClip" target="_blank">
      <img src="/MyClip.png"/>
    </a>
    <div className="project-desc">
      <span style={{ color: "var(--main)" }}>MyClip </span>is a clip
      uploading app where you can upload your gifyourgame.com clips. Each
      clip has a comment section, star rating, and an average of the number
      of stars rated by users.
    </div>
  </div>

  <div className="project">
    <a href="https://github.com/Scottsdaaale/HyperTyper" target="_blank">
      <img src="/hypertyper.png"/>
    </a>
    <div className="project-desc">
      HyperTyper is a simple speed typing app made collaboratively during my
      time at Flatiron School.
    </div>
  </div>

  <div className="project">
    <a href="https://github.com/Scottsdaaale/Translator" target="_blank">
      <img src="/TextTranslator.png"></img>
    </a>
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