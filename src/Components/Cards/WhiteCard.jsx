export default function WhiteCard({ children }) {
  return (
    <div className="bg-white relative rounded-xl h-fit w-full shadow-md shadow-gray-200/50 p-2">
      {children}
    </div>
  );
}
