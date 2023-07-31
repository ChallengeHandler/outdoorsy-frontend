import { ChangeEvent, FC } from "react";

type SearchBoxProp = {
  value: string,
  onChange: (value: string) => void
};
const SearchBox: FC<SearchBoxProp> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return <div className="w-3/5">
    <input
      className="rounded-xl w-full h-22 border-slate-600 border-2 m-6 p-6 font-sans text-2xl text-slate-600 font-medium whitespace-normal outline-none"
      value={value}
      onChange={handleChange}
    />
  </div>
}

export { SearchBox };