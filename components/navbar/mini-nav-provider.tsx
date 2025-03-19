import MiniNav from "./mini-nav";
import useThemeContext from "../heroSection/useThemeContext"; // Import context

function MiniNavProvider() {
  const { description } = useThemeContext(); // Get description state

  // Hide MiniNav when DescriptionDropdown is open
  if (description) return null;

  return <MiniNav page="home" />;
}

export default MiniNavProvider;

