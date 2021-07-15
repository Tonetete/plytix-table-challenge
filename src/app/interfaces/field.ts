export interface Field {
  type: 'text' | 'select';
  label: string;
  value: string | string[];
  selectedValue?: string;
}
