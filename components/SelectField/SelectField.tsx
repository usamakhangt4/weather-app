import {Form, Input, Select, Tooltip, Typography} from "antd";
import {Controller} from "react-hook-form";
import * as R from "ramda";

const {Title} = Typography;
const {Option} = Select;

interface SelectFieldProps {
  label?: string;
  list: Array<{name: string; value: any}>;
  name: string;
  control: any;
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  action?: {name: string; icon: JSX.Element; callback: () => any};
  startWith?: string;
  highlighted?: boolean;
  handleChange?: any;
  menuStyles?: any;
  selectedIcon?: any;
  classNames?: string | string[];
}
export default function SelectField(props: SelectFieldProps) {
  const {
    control,
    list,
    name,
    action,
    disabled,
    handleChange,
    highlighted,
    label,
    menuStyles,
    multiple,
    placeholder,
    selectedIcon,
    startWith,
    classNames,
  } = props;
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

          return (
            <Tooltip title={R.pathOr("", [name, "message"], errors)}>
              <Select
                // className={disabled && "disabled"}
                {...rest}
                // error={invalid}
                // name={name}
                id={name}
                value={value}
                defaultValue={value}
                onChange={(value) => {
                  console.log(value);

                  onChange(value);
                  handleChange && handleChange(value);
                }}
                // multiple={multiple}
                disabled={disabled}>
                {/* <Option value="jack">Jack</Option> */}
                {placeholder && (
                  <Option disabled value="">
                    <em>{placeholder}</em>
                  </Option>
                )}

                {list.map((listItem, index) => (
                  <Option key={index} value={listItem.value}>
                    <div title={listItem.name}>
                      {listItem.name}
                      {selectedIcon && value === listItem.value && selectedIcon}
                    </div>
                  </Option>
                ))}
              </Select>
            </Tooltip>
          );
        }}></Controller>
    </div>
  );
}
