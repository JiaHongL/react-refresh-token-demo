import { useGetPostsQuery } from "../../_redux/services/postsService";
import Card from "./components/Card";

function Home() {
  const { data } = useGetPostsQuery();

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
      {data?.data.map((postItem) => (
        <Card key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
}

export default Home;
