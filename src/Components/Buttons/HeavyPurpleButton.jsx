import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext, ModalContext } from "../../Contexts";

export default function HeavyPurpleButton({
  link,
  onClick,
  icon,
  value,
  disabled,
  connectionRequired,
}) {
  const { connection } = useContext(ConnectionContext);
  const { toggleModal } = useContext(ModalContext);

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (connectionRequired) {
      if (!connection) {
        toggleModal("connectionRequirementDialog");
      } else if (onClick) {
        onClick(e);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      to={connectionRequired && !connection ? "#" : link}
      onClick={handleClick}
      className={`p-2 w-full flex gap-2 items-center ${
        icon ? null : "justify-center"
      } ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"
      } transition min-h-10 text-white dark:bg-purple-700 bg-purple-500 shadow-md dark:shadow-purple-700/50 shadow-purple-500/50 rounded-xl cursor-pointer`}
    >
      <FontAwesomeIcon
        className="dark:bg-purple-600 bg-purple-400 rounded-xl
         p-2.5 h-4 w-4"
        icon={icon}
      />
      {value ? (
        <p
          className={`font-['Raleway'] font-medium text-sm overflow-hidden text-ellipsis ${
            icon ? "ml-2" : null
          }`}
        >
          {value}
        </p>
      ) : null}
    </Link>
  );
}
