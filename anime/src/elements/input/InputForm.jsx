import { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = forwardRef((props, ref) => {
  const {
    label,
    name,
    type,
    placeholder,
    className,
    onChange,
    value,
    accept,
    onBlur,
    error,
    helperText,
  } = props; // Ambil className dari props

  return (
    <div className="mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={className} // Gunakan className yang diterima dari props
        onChange={onChange}
        // required
        value={value}
        accept={accept}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
      />
    </div>
  );
});

export default InputForm;
