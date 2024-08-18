import css from "./MoviInfo.module.css";

export const MovieInfo = ({
  original_language,
  overview,
  popularity,
  poster_path,
  title,
}) => {
  return (
    <div className={css.wrapper}>
      <img className={css.img} src={poster_path} alt={title} />
      <ul className={css.infoList}>
        <li className={css.infoListItem}>Title {title}</li>
        <li className={css.infoListItem}>Overview {overview}</li>
        <li className={css.infoListItem}>Popularity{popularity}</li>
        <li className={css.infoListItem}>
          Original language{original_language}
        </li>
      </ul>
    </div>
  );
};
