import AccountImage from "../AccountImage";
import { GrayButton } from "../../Components/Buttons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function CommentCard({ user, comment, date, like }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <div>
          <AccountImage />
        </div>
        <div className="pt-2 h-full gap-1 w-full flex flex-col items-center">
          <div className="w-[1px] h-full dark:bg-neutral-800 bg-gray-300/50" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <p className="default-text">{user}</p>
          <p className="default-text">{comment}</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <p className="smaller-dark-text">{date}</p>
          <div className="flex items-center">
            <GrayButton icon={faThumbsUp} />
            <p className="default-text">{like}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
