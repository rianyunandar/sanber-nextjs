import Layout from "@/layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function UsersByName({ user }) {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 md:px-32 px-10">
        <p>Users by Name {id}</p>
        <Image
          src={user.pic}
          alt={`Picture of ${user.name}`}
          width={80}
          loading="lazy"
          height={80}
        />
        <p>Name: {user.name}</p>
        <p>Profile: {user.profile}</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  const user = await res.json();

  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/user");
  const userIds = await res.json();

  const paths = userIds.map((id) => ({ params: { id: id.id.toString() } }));

  return { paths, fallback: false };
}
