import {Form, Input, Tooltip, Typography} from "antd";
import {Controller} from "react-hook-form";
import * as R from "ramda";

const {Title} = Typography;

interface InputFieldProps {
  name: string;
  classNames?: string | string[];
  type?: string;
  control: any;
  placeholder?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  sx?: any;
  validate?: Array<Function>;
  label?: string;
  size?: "small" | "medium" | undefined;
  helperText?: string | undefined;
  lablePosition?: string;
  startAdornment?: string | React.ReactNode;
  endAdornment?: string | React.ReactNode;
}
export default function InputField(props: InputFieldProps) {
  const {label, name, control, disabled, classNames} = props;
  return (
    <div className={`inputFieldRoot ${classNames}`}>
      {label && <Title level={5}>{label}</Title>}
      <Controller
        name={name}
        control={control}
        render={({field, fieldState, formState}) => {
          const {name, onChange, value, ...rest} = field;
          const {errors} = formState;
          const {invalid} = fieldState;
          const message = R.path([name], errors);

          return (
            <Tooltip
              title={R.path(["message"], message)}
              color="red"
              placement="bottom">
              <Input
                {...rest}
                status={invalid ? "error" : undefined}
                disabled={disabled}
                onChange={(val) => onChange(val)}
                value={value}
                className={invalid ? "hasError" : ""}
              />
            </Tooltip>
          );
        }}></Controller>
    </div>
  );
}
