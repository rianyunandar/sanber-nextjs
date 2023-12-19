import WithAuth from "../with-auth";
import Menu from "../menu";

function Header() {
  return (
    <div class="w-full z-10 sm:px-8 lg:px-24">
      <Menu />
    </div>
  );
}

export default WithAuth(Header);
