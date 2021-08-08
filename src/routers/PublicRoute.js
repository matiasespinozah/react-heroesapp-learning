
import { Redirect, Route } from "react-router"

const PublicRoute = ({ 
  isAuthtenticated,
  component: Component,
  ...rest
 }) => {
  return (
    <Route {...rest}
      component={ (props) => (
        (!!!isAuthtenticated)
          ? (<Component {...props} />)
          : (<Redirect to="/" />)
      )}
    />
  )
}

export default PublicRoute
