export const Delivery = () => {
  return (
    <div>
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <input
              aria-label="förnamn"
              name="firstname"
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Förnamn"
              required
            />
          </div>
          <div>
            <input
              aria-label="efternamn"
              name="lastname"
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Efternamn"
              required
            />
          </div>
        </div>

        <div>
          <input
            aria-label="gatuadress"
            name="streetname"
            type="text"
            id="Gatuadress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Gatuadress"
            required
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <input
              aria-label="postnummer"
              name="postalnumber"
              type="text"
              id="Postnummer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Postnummer"
              required
            />
          </div>
          <div>
            <input
              aria-label="stad"
              name="city"
              type="text"
              id="Stad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Stad"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <input
          aria-label="mobiltelefonnummer"
          name="phonenumber"
          type="tel"
          id="Mobiltelefon"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Mobiltelefon (+46)70 000 00 00"
          required
        />
      </div>
      <div className="mb-6">
        <input
          aria-label="e-postadress"
          name="email"
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="E-postadress"
          required
        />
      </div>
    </div>
  );
};
