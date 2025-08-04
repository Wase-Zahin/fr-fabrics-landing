import Fac1 from "../assets/factory/1.jpg";

const Sec2 = () => {
    return (
        <section className="">
            {/* Background layer */}
            <img
                src={Fac1}
                alt="Factory Image"
                className="w-full h-auto object-cover"
            />
        </section>
    );
};

export default Sec2;