import React from "react";

function AboutMe() {
  return (
    <div className="about-me-container">
        <img src="./Headshot.jpg" alt="headshot"></img>
      <div className="about-me-p-container">
        <p>
          Sunt excepteur velit laboris tempor est magna. Laboris enim
          adipisicing et commodo ut{" "}
          <span style={{ color: "var(--main)" }}>
            reprehenderit consectetur
          </span>{" "}
          qui deserunt voluptate commodo est. Minim officia enim deserunt
          ullamco. Consequat amet dolore.
        </p>

        <p>
          Eu voluptate non dolor et{" "}
          <span style={{ color: "var(--main)" }}>cillum ex</span>. Sint ad duis
          consectetur est in exercitation dolor laboris ad. Dolore culpa in
          irure consectetur sint. Incididunt qui sint Lorem irure.
        </p>
        <p>
          Pariatur minim ut nostrud incididunt velit elit eiusmod incididunt ea
          eiusmod. Ad non{" "}
          <span style={{ color: "var(--main)" }}>occaecat id consequat</span>{" "}
          culpa. Consectetur veniam dolore excepteur aliquip esse adipisicing
          non fugiat ea pariatur. Sint aute anim pariatur enim do quis ut
          occaecat ullamco adipisicing veniam.
        </p>
        <p>Here are some skills i have</p>
        <p>super good at beer pong</p>
      </div>
    </div>
  );
}

export default AboutMe;
