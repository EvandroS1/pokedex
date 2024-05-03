interface IputInterface {
  type: string;
  value?: string;
  onChange?: () => {};
  onBlur?: () => {};
  placeholder?: string;
}

export default function InputBox(data: IputInterface) {
  return (
    <input
      className="rounded-xl w-full h-14 normal-case text-lg border outline-0 border-gray-500 pl-4"
      type={data.type}
      value={data.value}
      onChange={data.onChange}
      onBlur={data.onBlur}
      placeholder={data.placeholder}
    ></input>
  );
}
