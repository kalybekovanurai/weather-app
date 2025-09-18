interface CelsiusInputProps {
  value: number | null;
  onChangeTemp: (value: number | null) => void;
}

const CelsiusInput = ({ value, onChangeTemp }: CelsiusInputProps) => {
  return (
    <div className="flex font-semibold flex-col mb-4">
      <label htmlFor="input-weather" className="mb-2 text-gray-700 font-bold">
        Введите температуру в градусах Цельсиях:
      </label>
      <input
        type="number"
        id="input-weather"
        value={value !== null ? value : ""}
        onChange={(e) =>
          onChangeTemp(e.target.value === "" ? null : Number(e.target.value))
        }
        className="p-3 mt-4 border border-gray-300 rounded-lg  "
        placeholder="Например, 20"
      />
    </div>
  );
};

export default CelsiusInput;
