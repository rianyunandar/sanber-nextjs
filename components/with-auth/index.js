export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const isLogin = true;
    if (!isLogin) return <div>Not Authorized</div>;
    return <Component {...props} />;
  };
}
