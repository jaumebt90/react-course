import {useFormik} from 'formik'

function App() {
  const formik=useFormik({
    initialValues:{
      name:'',
      lastname:'',
      email:'',
    }
  })
  return (
    
  );
}

export default App;
