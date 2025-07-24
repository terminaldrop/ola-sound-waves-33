import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AdminButton = () => {
  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <Link to="/auth">
        <Button 
          className="bg-[#2A1B3D] hover:bg-[#3A2B4D] text-white border border-white/20 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-2 shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base touch-manipulation"
        >
          <Settings className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Admin</span>
          <span className="sm:hidden">Admin</span>
        </Button>
      </Link>
    </div>
  );
};

export default AdminButton;