import { GrayButton } from "../Buttons";

export default function AuthenticationInput({ value, type, icon }) {
  return (
    <div className="flex gap-1 border-2 rounded-xl border-zinc-300 w-full hover:border-zinc-600 focus-within:border-zinc-600 transition-all ease-out">
      <GrayButton icon={icon}></GrayButton>
      <input
        type={type}
        placeholder={value}
        className="flex items-end text-sm bg-inherit rounded-xl placeholder:text-zinc-300 text-zinc-600 font-['Raleway'] focus:outline-none w-full pr-2"
      ></input>
    </div>
  );
}
