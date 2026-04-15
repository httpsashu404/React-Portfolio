// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#00ff88] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-transparent px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border-1 border-[#00ff88]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="flex flex-col gap-2">
              {category.skills.map((skill) => (
                <div key={skill.name} className="w-full">
                  {/* Skill Name + Percentage */}
                  <div className="flex justify-between">
                    <span className="text-gray-300 text-xs xs:text-base">
                      {skill.name}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-1 relative overflow-hidden">
                    {/* Full Gradient Background (fixed 100%) */}
                    <div
                      className="absolute top-0 left-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(to right, #ff0000, #f6ff00, #00ff22)",
                      }}
                    ></div>

                    {/* Fill Mask (controls visibility) */}
                    <div
                      className="absolute top-0 left-0 h-full bg-gray-700"
                      style={{
                        width: `${100 - skill.level}%`,
                        right: 0,
                        left: "auto",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
