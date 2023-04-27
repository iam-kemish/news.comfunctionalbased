const NewsItem = ({
  title,
  content,
  description,
  author,
  imageurl,
  newsUrl,
  publishedAt,
  source,
}) => {
  return (
    <div className="text-white">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <strong>Title:</strong> {title}.....{" "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <h5 className="card-title">
            {" "}
            <strong>Author's name :</strong> {author}
          </h5>
          <p className="card-title">
            {" "}
            <strong>Content :</strong> {content}....
          </p>
          <p className="card-title">
            {" "}
            <strong>Description :</strong> {description}.....
          </p>
          <p className="card-text"></p>
          <p className="card-text text-success">
            <small className="text-body-secondary"></small>
            <strong>Published on :</strong> {publishedAt}
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary my-3"
          >
            Read more.
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
