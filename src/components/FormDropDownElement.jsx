import Image from "next/image";

export const FormDropDownElement = ({
  name,
  register,
  placeholder,
  options = [],
  containerClass,
  img,
  selectBoxClass,
}) => {
  return (
    <div
      className={`flex items-center gap-x-2 border p-1 rounded-sm bg-white  font-sm tracking-wide px-2 py-2 ${containerClass}`}
    >
      <Image src={img} height={16} width={16} alt="Country-name" />
      <select
        className={`w-full outline-none ${selectBoxClass}`}
        {...register(name)}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
