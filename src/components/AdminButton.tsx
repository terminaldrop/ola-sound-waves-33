import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AdminButton = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Link to="/auth">
        <Button 
          className="bg-[#2A1B3D] hover:bg-[#3A2B4D] text-white border border-white/20 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Settings className="mr-2 h-4 w-4" />
          Admin
        </Button>
      </Link>
    </div>
  );
};

export default AdminButton;