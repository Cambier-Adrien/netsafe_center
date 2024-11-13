export default function TextArea({ onChange, value, placeholder }) {
  return (
    <div className="p-2 flex gap-1 border bg-zinc-50 rounded-xl border-zinc-100 w-full transition-all ease-out overflow-hidden">
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="flex items-end bg-inherit placeholder:text-zinc-300 focus:outline-none w-full min-h-32 resize-none font-medium font-['Raleway'] text-sm text-zinc-600"
      />
    </div>
  );
}
