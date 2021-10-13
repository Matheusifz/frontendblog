import { withRouter } from "react-router-dom";

interface Profile {}

const Profile: React.FC<Profile> = ({}) => {
  return <div>If you are seeing this you are now authenticated.</div>;
};

export default withRouter(Profile);
