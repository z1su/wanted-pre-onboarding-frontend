import { useEffect } from "react";
import { useNavigate } from "react-router";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    redirectFn();
  }, []);

  const redirectFn = () => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      navigate("/todo");
    } else if (
      (accessToken === null && window.location.pathname === "/todo") ||
      window.location.pathname === "/"
    ) {
      navigate("/signin");
    }
  };

  return;
};

export default useAuthRedirect;
