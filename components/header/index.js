import WithAuth from "../with-auth";
import Menu from "../menu";

function Header() {
  return (
    <div class="w-full">
      <Menu />
    </div>
  );
}

export default WithAuth(Header);
