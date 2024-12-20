export default function TextArea({ onChange, value, placeholder }) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 focus-within:border-neutral-600 dark:focus-within:border-neutral-400 flex border rounded-xl dark:border-neutral-800 border-neutral-200 w-full overflow-hidden">
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="p-2 flex items-end bg-inherit dark:placeholder:text-neutral-600 placeholder:text-neutral-400 focus:outline-none w-full min-h-32 resize-none font-medium font-['Raleway'] text-sm dark:text-neutral-400 text-neutral-600"
      />
    </div>
  );
}
