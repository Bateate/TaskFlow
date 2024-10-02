export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    options: SelectOption[];
    label: string;
    onChange: (option: SelectOption) => void;
}
