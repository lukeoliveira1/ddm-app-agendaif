import { Input } from "./styles";

interface InputFormProps {
  placeholder: string;
}

const InputForm = ({ placeholder }: InputFormProps) => {
  return <Input placeholder={placeholder} />;
};

export default InputForm;
