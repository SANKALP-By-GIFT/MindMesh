import Navbar from "../components/layout/Navbar";
import BalanceSummary from "../components/dashboard/BalanceSummary";

const SummaryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <BalanceSummary />
      </div>
    </div>
  );
};

export default SummaryPage;
