// import { useState } from "react";

// export default function PriceRangeSlider() {
//   const [value, setValue] = useState(1000); // Set the initial value of the slider

//   const handleChange = (e:any) => {
//     setValue(e.target.value); // Update the slider value
//   };

//   return (
//     <div className="relative mb-6">
//       <label htmlFor="labels-range-input" className="sr-only">
//         Labels range
//       </label>
//       <input
//         id="labels-range-input"
//         type="range"
//         value={value}
//         min="100"
//         max="1500"
//         onChange={handleChange} // Handle slider value change
//         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
//       />
//       <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-0 -bottom-6">
//         Min ($100)
//       </span>
//       <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
//         ${Math.round(value / 3)} {/* Dynamic mid range value */}
//       </span>
//       <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
//         ${value} {/* Current slider value */}
//       </span>
//       <span className="text-sm text-gray-500 dark:text-gray-400 absolute right-0 -bottom-6">
//         Max ($1500)
//       </span>
//     </div>
//   );
// }










import { useState, type ChangeEvent } from "react"

export default function PriceRangeSlider() {
  const [value, setValue] = useState(1000)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <div className="relative mb-10 pt-2">
      <label htmlFor="labels-range-input" className="sr-only">
        Price range
      </label>
      <input
        id="labels-range-input"
        type="range"
        value={value}
        min="100"
        max="1500"
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        style={{
          background: `linear-gradient(to right, #f2b705 0%, #f2b705 ${((value - 100) / 1400) * 100}%, #e5e7eb ${((value - 100) / 1400) * 100}%, #e5e7eb 100%)`,
        }}
      />
      <div className="absolute left-0 right-0 -bottom-6 flex justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">Min (${formatNumber(100)})</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">${formatNumber(Math.round(value / 3))}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">${formatNumber(value)}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Max (${formatNumber(1500)})</span>
      </div>
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f2b705;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 2px #f2b705;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f2b705;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 2px #f2b705;
        }
      `}</style>
    </div>
  )
}

