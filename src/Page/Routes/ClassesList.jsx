import FirstTitle from "../../Components/Titles/FirstTitle";
import ClassCard from "../../Components/Cards/ClassCard";
import FourthTitle from "../../Components/Titles/FourthTitle";

export default function ClassesList() {
  return (
    <div className="relative p-8 max-w-[70rem] left-1/2 -translate-x-1/2">
      <div className="border-b border-gray-300/50 pb-4 flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <FirstTitle value="Cours en libre accès" />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <FourthTitle value="Retrouvez l'intégralité de nos cours gratuits" />
        <div className="flex flex-col md:grid grid-cols-4 gap-4">
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
          <ClassCard title="Apprendre le ping pong" />
        </div>
      </div>
    </div>
  );
}