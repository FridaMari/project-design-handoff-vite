import heroImg from "/assets/hero.png";
import registerButton from "/assets/register-button01.png";

export const Hero = () => {
  return (
    <div className="container relative" style={{ height: "598px" }}>
      <div className="w-screen">
        <img
          src={heroImg}
          className="object-cover w-full"
          style={{ height: "598px" }}
          alt="Hero Image"
        />
      </div>
      <div
        className="absolute w-screen pt-12 pl-5"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "598px",
          width: "100%",
        }}
      >
        <h1
          className="font-avengeance text-primary-lightblue text-3xl mb-8"
          style={{ WebkitTextStroke: "0.4px black" }}
        >
          YOUNG <br></br>HEROES,<br></br> BIG HEARTS
        </h1>
        <h2 className="font-urbanist bg-white text-primary-lightblue text-xl mb-4 ">
          We empower girls to find their inner dragons through karate.
        </h2>
        <button>
          <img src={registerButton} alt="Register Button" />
        </button>
      </div>
    </div>
  );
};
