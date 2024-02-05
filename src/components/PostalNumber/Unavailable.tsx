import Button from "../Button";

export const Unavailable = () => {
  return (
    <div className="flex flex-col items-center text-center text-dark-forest">
      <p>Tyvärr finns vi inte där du bor ännu.</p>
      <p className="text-xs p-4">
        ( Få en notis till din epost så fort vi expanderar till nya områden! )
      </p>
      <div className="flex gap-2">
        <input
          aria-placeholder="E-post"
          placeholder="E-post"
          type="text"
          className="p-2 w-full md:max-w-max bg-gray-100 rounded-md"
        />
        <Button type="submit" variant="gray">
          Skicka
        </Button>
      </div>
    </div>
  );
};
