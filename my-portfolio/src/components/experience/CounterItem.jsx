// src/components/experience/CounterItem.jsx
export default function CounterItem({ number, label }) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-blue-500">{number}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
}
