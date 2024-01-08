import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SignupAsyncApi } from '../Redux/TodoSlice/TodoReducer'
import { Loader} from 'react-overlay-loader'
import { toast } from 'react-toastify';

const Home = () => {
  // https://testapi1.pythonanywhere.com/webapi/usr

  const [filter,setfilter]=useState({
   name:'',
   email:'',
   alias:'',
   password:''
  })
  const Navigate=useNavigate()
 const dispatch = useDispatch()
 const useSelectorVar = useSelector((state)=>state)
 console.log('useSelector==>',useSelectorVar)
 console.log(useSelectorVar.isLoading === true)
 const [errorMessage, setErrorMessage] = useState('');
 

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setfilter(prevFilter => ({
      ...prevFilter,
      [name]: value
    }));
  };

  const HandleSubmit = async (e) =>{
    
    console.log('i am running')
    dispatch(SignupAsyncApi(filter))
  .then((response) => {
    // Navigating only on successful completion
    console.log('response.data.message',response)
    if(response.payload.status == true){
      Navigate('/about');
    }
  }).catch((error)=>{
    console.log('error',error)
  })
  
    // .then((response)=>{
    //   console.log('ahmed==>',response)
    //   if(useSelectorVar.isSucessMessage !== '')
    //   {
    //     toast.success(response.data.message, {  
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //   });
       
    //   }
    //   console.log('navigator==>')
    //   Navigate('/about')

    // }).catch ((error)=>{
    //   toast.error(error?.response?.data?.message || error.message, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    // });
    // })
    
  //   var formdata = new FormData();
  //   formdata.append("name", name);
  //   formdata.append("email", email);
  //   formdata.append("alias", alias);
  //   formdata.append("password", password);

  //   var requestOptions = {
  //     method: 'POST',
  //     body: formdata,
  //     headers: {
  //         Accept: 'application/json'
  //     },
  //     redirect: 'follow'
  // };
 
  // try {
  //   const response = await axios.post(
  //     'https://testapi1.pythonanywhere.com/webapi/usr77',
  //     formdata,
  //     requestOptions
  //   );

  //   if (response.status === 200) {
  //     console.log('Response:', response.data);
  //     if (response.data.status === true) {
  //       alert(response.data.message);
  //       // Do something on successful response
  //     } else {
  //       alert(response.data.message);
  //       // Handle other cases based on response data
  //     }
  //   } else {
  //     alert(response.status)
  //     console.log('respnse else',response)
  //     console.log('Unexpected status code:', response.status);
  //     // Handle unexpected status codes
  //   }
  // } catch (error) {
  //   console.log('err',error)
  //   alert(error?.response?.data?.message || error.message)
  //   console.log('Error occurred:', error?.response?.data?.message || error.message);
  //   // Handle error cases, e.g., network issue, server error, etc.
  // }



    //   await axios.post('https://testapi1.pythonanywhere.com/webapi/usr',formdata,requestOptions).then((res)=>{
    //   console.log('response',res)
    //   console.log('status',res?.data?.status)
    //   if(res?.data?.status === true)
    //   {
    //   {console.log('if==>runing')}
    //     alert(res?.data?.message)
    //     Navigate('/about')
        
    //   }
      
    // }).catch((err)=>{
    //   console.log('error',err)
    //   alert(err.response?.data?.message || err.message)
    //   console.log('err',err.response)
    // })

//     var formdata = new FormData();
// formdata.append("name", "ahsk");
// formdata.append("alias", "sd");
// formdata.append("email", "sd@gmail2.com");
// formdata.append("password", "asdsd");

// var requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://testapi1.pythonanywhere.com/webapi/usr", requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     console.log('result==>',result)
//     console.log('result==>typeof',typeof result.status)
//     console.log(result.status == true)
//     if(result.status == true)
//     {
//       alert('if')
//     }
//     else{
//       alert('if-else')
//     }
//   })
//   .catch(error => {
// alert('catch')
//     console.log('error', error)
//   }
//     );




  }

  useEffect(() => {
    if (useSelectorVar.error !== '') {
        // Set the error message if not empty
        setErrorMessage(useSelectorVar.error);
        // Clear the error message after 3 seconds
        const timer = setTimeout(() => {
            setErrorMessage('');
        }, 3000);

        // Clear the timer when component unmounts or when the error changes
        return () => clearTimeout(timer);
    }
    if (useSelectorVar.isSucessMessage !== '') {
      // Set the error message if not empty
      // setErrorMessage(useSelectorVar.error);
      // Clear the error message after 3 seconds
      const timer = setTimeout(() => {
          setErrorMessage('');
      }, 3000);

      // Clear the timer when component unmounts or when the error changes
      return () => clearTimeout(timer);
  }
}, [useSelectorVar.error,useSelectorVar.isSucessMessage]);
  


  return (
    <>

      {useSelectorVar.isLoading == true ?
                <Loader fullPage loading /> : null
            }

       {
        useSelectorVar.isSucessMessage !== '' ?
        <p>{
          useSelectorVar.isSucessMessage}</p> :null
       }    
       {errorMessage && <p>{errorMessage}</p>}
     
    <div className='form-container' >
      
      <form className='form-wrapper' >
       <div className='form-input' >
        <label className='ml-2' >Name</label>
        <input type='text' name='name' placeholder='name' onChange={handleOnChange} />

        </div> 

        <div className='form-input' >
        <label className='ml-2' >Email</label>
        <input type='text' name='email' placeholder='Email' onChange={handleOnChange} />

        </div> 

        <div className='form-input' >
        <label className='ml-2' >Alias</label>
        <input type='text' name='alias' placeholder='alias' onChange={handleOnChange} />

        </div> 

        <div className='form-input' >
        <label className='ml-2' >Password</label>
        <input type='text' name='password' placeholder='password' onChange={handleOnChange} />

        </div> 

        <button type='button' onClick={HandleSubmit} >Submit</button>

      </form>

    </div>
    </>
  )
}

export default Home