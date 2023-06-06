import { PageContainer } from "../css/common.styles"
import { NavLink } from "react-router-dom";
const DeveloperRoles = () => {
  return (
    <PageContainer id="DeveloperRoles">
      <p>
        Within the field of game development, there are various types of jobs that involve different aspects of the game creation process. Here are some common job roles found in game development:
      </p>

      <ul>
        <li>
          <strong>Game Designer:</strong> Game designers are responsible for creating the overall concept and design of a game. They define gameplay mechanics, levels, rules, and the overall player experience.
        </li>
        <li>
          <strong>Game Programmer:</strong> Game programmers write the code that brings the game to life. They work with game engines and programming languages to implement gameplay mechanics, artificial intelligence, physics, and other technical aspects.
        </li>
        <li>
          <strong>Game Artist:</strong> Game artists create visual elements for games. They may specialize in different areas such as concept art, 2D or 3D character design, environments, animations, or user interface (UI) design.
        </li>
        <li>
          <strong>Game Animator:</strong> Game animators focus on creating realistic movements and animations for characters, objects, and environments. They bring life and motion to the game's assets.
        </li>
        <li>
          <strong>Game Sound Designer:</strong> Sound designers are responsible for creating and implementing sound effects, background music, and voiceovers. They enhance the overall audio experience and help create immersive environments.
        </li>
        <li>
          <strong>Game Writer:</strong> Game writers develop the narrative and storyline of a game. They write dialogue, scripts, and create compelling characters and story arcs.
        </li>
        <li>
          <strong>Game Tester:</strong> Game testers playtest games to identify and report bugs, glitches, and issues in gameplay. They ensure the game meets quality standards and provide feedback for improvement.
        </li>
        <li>
          <strong>Game Producer:</strong> Game producers oversee the entire game development process. They coordinate and manage teams, schedules, budgets, and ensure the project stays on track.
        </li>
        <li>
          <strong>Game Marketer:</strong> Game marketers handle the promotion and marketing of games. They create marketing strategies, manage social media campaigns, and work on branding, PR, and community management.
        </li>
        <li>
          <strong>Game UX/UI Designer:</strong> UX (User Experience) and UI (User Interface) designers focus on creating intuitive and visually appealing interfaces for games. They ensure the game is easy to navigate, visually appealing, and provides an enjoyable user experience.
        </li>
      </ul>
      <NavLink to="/DeveloperRolesList">game developer roles wiki directory</NavLink>
    </PageContainer>
  );
};
export default DeveloperRoles;