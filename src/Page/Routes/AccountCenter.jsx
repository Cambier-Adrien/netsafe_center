import { Outlet } from "react-router-dom";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import {
  LightPurpleButton,
  CardButton,
  LightRedButton,
} from "../../Components/Buttons";
import {
  faLock,
  faAddressCard,
  faUser,
  faRightToBracket,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ModalContext } from "../../Contexts";

export default function AccountCenter() {
  const { modals, toggleModal, setModalState } = useContext(ModalContext);

  const handleCopy = () => {
    navigator.clipboard.writeText(704838134);
    setModalState("textCopied", true);
  };

  return (
    <div className="page-content">
      <div className="border-b border-color pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <h1 className="first-title">Gestion du compte</h1>
        <CardButton value="ID : 704838134" icon={faCopy} onClick={handleCopy} />
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-4">
        <div>
          <div className="flex flex-col gap-2 sticky top-24">
            <LightPurpleButton
              icon={faUser}
              value="Aperçu du compte"
              link="/account_center/account_overview"
            />
            <LightPurpleButton
              icon={faAddressCard}
              value="Informations personnelles"
              link="/account_center/personal_data"
            />
            <LightPurpleButton
              icon={faLock}
              value="Mot de passe et sécurité"
              link="/account_center/password_and_security"
            />
            <LightPurpleButton
              icon={faPaintBrush}
              value="Apparence du site"
              link="/account_center/appearance"
            />
            <LightRedButton
              icon={faRightToBracket}
              value="Se déconnecter"
              onClick={() => toggleModal("logoutDialog")}
            />
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
