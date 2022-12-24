import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const submitEmail = (values) => {
    console.log("form values", values);
    setTimeout(() => {
      formik.setSubmitting(false);
      alert(`we will send announcements and our launch deals to ${formik.values.email}`);
      formik.resetForm();
    }, 1000);
  };
  const formik = useFormik({
    // initial values
    initialValues: {
      email: "",
    },
    //validation schema
    validationSchema: Yup.object({
      email: Yup.string().required().email("Please provide a valid email"),
    }),
    // handle submission
    onSubmit: submitEmail,
  });
  console.log(formik);
  return (
    <div className="container font-Josefin-Sans lg:mr-52">
      <div className="lg:flex lg:flex-row">
        <div className="lg-left-side lg:pr-8">
          {/* logo */}
          <img className="brand-logo w-24 mt-5 ml-5 mb-5 lg:ml-0" src=".\images\logo.svg" alt="brand-logo" />
          {/* hero mobille */}
          <img className="hero-mobile" src=".\images\hero-mobile.jpg" alt="hero-mobile" />
          {/* judul + desc + inputan */}
          <section className="desc mb-20 lg:pr-5">
            <div className="title uppercase tracking-widest text-center mt-10 text-3xl mb-5 lg:text-left">
              <h1 className="font-light text-Desaturated-Red md:text-red-500 lg:text-blue-500 xl:text-yellow-400">We're</h1>
              <h1 className="font-semibold">coming</h1>
              <h1 className="font-semibold">soon</h1>
            </div>
            <article className="text-center mb-8 lg:text-left">
              <p className="text-Desaturated-Red text-sm">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </article>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-center items-center relative">
                <input
                  className="placeholder-Desaturated-Red placeholder-opacity-40 border border-Desaturated-Red rounded-full w-72 lg:w-60 h-10 focus:outline-none focus:ring focus:ring-Soft-Red"
                  type="text"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email Adddress"
                />
                {formik.errors.email && <img src="./images/icon-error.svg" alt="icon-error" className="absolute translate-x-20" />}

                <button className="bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] p-2 rounded-full h-10 w-14 flex justify-center items-center absolute translate-x-32 lg:translate-x-24" type="submit" disabled={formik.isSubmitting}>
                  <img src=".\images\icon-arrow.svg" alt="icon-arrow" className="h-3 w-3" />
                </button>
              </div>
              {formik.errors.email && <p className="error text-left text-red-600 ">{formik.errors.email}</p>}
            </form>
          </section>
        </div>
        <img className="hero-desktop" src=".\images\hero-desktop.jpg" alt="hero-desktop" />
      </div>
    </div>
  );
}

export default App;
