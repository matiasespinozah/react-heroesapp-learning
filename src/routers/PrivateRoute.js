
import { Redirect, Route } from "react-router"

const PrivateRoute = ({ 
  isAuthtenticated,
  component: Component,
  ...rest
 }) => {
  localStorage.setItem('lastpath', rest.location.pathname);

  return (
    <Route {...rest}
      component={ (props) => (
        (isAuthtenticated)
          ? (<Component {...props} />)
          : (<Redirect to="/login" />)
      )}
    />
  )
}

export default PrivateRoute
