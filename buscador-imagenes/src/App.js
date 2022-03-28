import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./header.css";

function App() {
  const [photos, setPhotos] = useState([]);
  console.log({ photos });
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID zUUaGFf7hwTAZhMttvBsvA3wn8P_VJ-wmr4ESAtI6VE",
                },
              }
            );
            const data = await response.json();
            //llamar api unsplash
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
