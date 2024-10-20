import { WhiteCard } from "../Cards";
import { ThirdTitle } from "../Titles";
import { SearchInput } from "../Inputs";
import { HeavyPurpleButton } from "../Buttons";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PostHeaderCard({ title, description }) {
  return (
    <WhiteCard>
      <div className="p-2 flex flex-col gap-4">
        <div className="py-2 border-b border-gray-300/50">
          <ThirdTitle value={title} />
        </div>
        <div className="flex gap-4 justify-between items-center">
          {description ? (
            <p className="text-zinc-400 font-['Raleway'] text-sm">
              {description}
            </p>
          ) : (
            <SearchInput value="Rechercher un post" icon={faSearch} />
          )}
          <HeavyPurpleButton icon={faPlus} />
        </div>
      </div>
    </WhiteCard>
  );
}
