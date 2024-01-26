import Image from "next/image";

export const FormInputElement = ({
  img,
  name,
  placeholder,
  inpuClassName,
  containerClassName,
  register,
}) => (
  <div
    className={`flex items-center gap-x-2 border p-1 rounded-sm bg-white px-2 py-2 ${containerClassName}`}
  >
    <Image src={img} height={16} width={16} alt="company-name" />
    <input
      className={`outline-none w-full ${inpuClassName}`}
      type="text"
      placeholder={placeholder}
      {...register(name)}
    />
  </div>
);
