import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './BreadCrumbs.css'

const BreadCrumbs = () => {
  const location = useLocation()
  console.log(location)
  let currentLink = ''
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink =+ `home/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;