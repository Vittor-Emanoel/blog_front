import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function Post({
  title,
  summary,
  author,
  cover,
  content,
  createdAt,
}) {
  return (
    <div className="post">
      <div className="image">
        <img src={"http://localhost:3333/" + cover} alt="" />
      </div>

      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href="" className="author">
            {author?.username}
          </a>
          <time>
            {format(new Date(createdAt), "d MMM, yyyy HH:mm", {
              locale: ptBR,
            })}
          </time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
