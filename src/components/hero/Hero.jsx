import Countdown from "../countdown/Countdown";

export const Hero = () => {
  return (
    <section className="flex"
    >
      <div>
        <img src="../../../public/img/tao.png" alt="img"  className="w-1/2 h-auto"/>
        <h3 className="text-3xl font-semibold text-blueGray-700">
          desde el 25 de diciembre
        </h3>
      </div>

      <div>
        <div>
            <Countdown />
        </div>
        <div>

        </div>
      </div>
    </section>
  );
};
