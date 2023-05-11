import { useEffect, useState } from "react";
import CardPost from "../../components/Card";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  const cover = posts[0]?.cover;

  return (
    <div className="container">
      <div className="RelavantPostContainer">
        <div>
          <img src={"http://localhost:3333/" + cover} alt="" />
        </div>

        <div className="infos">
          <span>Technology</span>
          <h2>{posts[0]?.title}</h2>
          <div className="infos-footer">
            <p>{posts[0]?.summary}</p>
            <time>August 20, 2022</time>
          </div>
        </div>
      </div>

      <div className="lastPosts">
        <h2>Lastest Post</h2>
        <div className="container">
          {posts.length > 0 &&
            posts.map((post) => <CardPost {...post} key={post._id} />)}
        </div>
      </div>
    </div>
  );
}
