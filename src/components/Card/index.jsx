import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function CardPost({
  title,
  summary,
  author,
  cover,
  content,
  createdAt,
}) {
  return (
    <div className="card">
      <img src={"http://localhost:3333/" + cover} alt="" />
      <div className="infos-card">
        <h2>{title}</h2>
        <div className="footer-card">
          <span>{author?.username}</span>
          <time>
            {format(new Date(createdAt), "d MMM, yyyy HH:mm", {
              locale: ptBR,
            })}
          </time>
        </div>
      </div>
    </div>
  );
}
