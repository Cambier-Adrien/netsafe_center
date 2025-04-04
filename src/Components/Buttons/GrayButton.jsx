import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function GrayButton({
  link,
  onClick,
  icon,
  background,
  value,
  custom,
  connectionRequired,
}) {
  const { isAuthenticated } = useContext(ConnectionContext);
  const { toggleModal } = useContext(ModalContext);

  const handleClick = (e) => {
    if (connectionRequired) {
      if (!isAuthenticated) {
        toggleModal("connectionRequirementDialog");
      } else if (onClick) {
        onClick(e);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className="relative flex justify-center">
      <Link
        to={connectionRequired && !isAuthenticated ? "#" : link}
        onClick={handleClick}
        type="button"
        className={`${
          background
            ? "gray-btn-bg"
            : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        } ${
          value && "p-2 w-full h-10"
        } hover:opacity-75 transition gray-btn rounded-xl w-fit ${custom}`}
      >
        <FontAwesomeIcon className="p-2.5 h-4 w-4" icon={icon} />
        {value}
      </Link>
    </div>
  );
}
