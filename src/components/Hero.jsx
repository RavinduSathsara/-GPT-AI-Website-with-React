import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 ">
        <img src={logo} alt="sumz logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() =>
            window.open(
              "https://github.com/RavinduSathsara/-GPT-AI-Website-with-React"
            )
          }
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Get concise and accurate summaries of lengthy articles with the power of
        OpenAI GPT-4's advanced language processing technology. Enjoy a
        hassle-free reading experience and save time with Summerize Articles.
      </h2>
    </header>
  );
};

export default Hero;
