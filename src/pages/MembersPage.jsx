import Navbar from "../components/layout/Navbar";
import MemberForm from "../components/members/MemberForm";

const MembersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <MemberForm />
      </div>
    </div>
  );
};

export default MembersPage;
