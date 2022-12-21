// import "./App.css";

function App() {
  return (
    <div className="container font-Josefin-Sans">
      {/* logo */}
      <img className="brand-logo w-24 mt-5 ml-5 mb-5" src=".\images\logo.svg" alt="brand-logo" />
      {/* hero mobille */}
      <img className="hero-mobile" src=".\images\hero-mobile.jpg" alt="hero-mobile" />
      {/* judul + desc + inputan */}
      <section className="desc mb-20">
        <div className="title uppercase tracking-widest text-center mt-10 text-3xl mb-5">
          <h1 className="font-light text-Desaturated-Red">We're</h1>
          <h1 className="font-semibold">coming</h1>
          <h1 className="font-semibold">soon</h1>
        </div>
        <article className="text-center mb-8">
          <p className="text-Desaturated-Red text-sm">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </article>
        <form>
          <div className="flex justify-center items-center relative">
            <input className="placeholder-Desaturated-Red placeholder-opacity-40 border border-Desaturated-Red rounded-full w-72 h-10 " type="text" id="email" name="email" placeholder="Email Adddress" />
            <button className="bg-Soft-Red p-2 rounded-full h-10 w-10 flex justify-center items-center absolute translate-x-32">
              <img src=".\images\icon-arrow.svg" alt="icon-arrow" className="h-3 w-3" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
