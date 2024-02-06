export const Contact = () => {
  return (
    <div>
      <h3>Meddelande till våra buddies</h3>

      <textarea
        aria-label="Meddelande till våra buddies. Valfritt fält"
        name="textarea"
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Valfritt. Portkod, porttelefon, våning eller övrig information du vill ge oss..."
      ></textarea>
    </div>
  );
};
