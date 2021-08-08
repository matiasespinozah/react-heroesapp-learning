import { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRouter from "./DashboardRouter";
import PrivateRoute from "./PrivateRoute";
import authContext from '../auth/AuthContext';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  const { user } = useContext(authContext);
  
  return (
    <Router>
      <>
        <Switch>
          <PublicRoute 
            exact 
            path="/login" 
            component={ LoginScreen }
            isAuthtenticated={user.logged}
            />

          <PrivateRoute 
            path="/" 
            component={ DashboardRouter }
            isAuthtenticated={user.logged}
            />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
