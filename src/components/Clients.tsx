import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center my-10">
      {clients.map((client) => (
        <div
          key={client.id}
          className={`w-[192px] h-[60px] ${
            client.id === "client-2" || client.id === "client-4"
              ? "md:mt-4"
              : "md:mt-0"
          } mt-10`}
        >
          <img src={client.logo} alt="logo" />
        </div>
      ))}
    </section>
  );
};

export default Clients;
