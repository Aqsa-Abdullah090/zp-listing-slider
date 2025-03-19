import "./style.scss";
import { useTheme } from "@/context/theme-context"; // Import theme context

function BuyEntryNow() {
  const { theme } = useTheme(); // Get theme from context

  return (
    <div className={`buy-entry-now-wrapper ${theme}`}>
      <button className="shiny-cta text-[10px] 3xl:text-[14px] w-[230px] 3xl:w-[300px]">
        <p>£25.00 GBP</p>
        <span>BUY ENTRY NOW</span>
      </button>
    </div>
  );
}
export default BuyEntryNow;

