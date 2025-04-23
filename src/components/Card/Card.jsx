import styles from './Card.module.css';

const Card = ({ photo, name, description }) => {
  return (
    <div className={styles.containerProfile}>
      <img
        className={styles.profilePhoto}
        src={photo}
        alt={`Foto de ${name}`}
      />
      <div className={styles.profileInfo}>
        <h3 className={styles.profileName}>{name}</h3>
        <p className={styles.profileDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
