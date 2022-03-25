import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label>Nombre</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label>Nombre</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
    </form>
  );
}

export default App;
