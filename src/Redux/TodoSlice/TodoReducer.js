import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';


export const SignupAsyncApi = createAsyncThunk ('register/SignupAsyncApi',
async (fieldvalue) =>{
    try {
        const formdata = new FormData();
        formdata.append("name", fieldvalue.name);
        formdata.append("email", fieldvalue.email);
        formdata.append("alias", fieldvalue.alias);
        formdata.append("password", fieldvalue.password);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            headers: {
                Accept: 'application/json'
            },
            redirect: 'follow'
        };
        
        const response = await axios.post('https://testapi1.pythonanywhere.com/webapi/usr', formdata, requestOptions);
        console.log('response', response.data);
        toast.success(response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        return response.data; // This will be available as `action.payload` in the `fulfilled` case
    } catch (error) {
        console.error('Error occurred:', error);
        toast.error(error?.response?.data?.message || error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        throw error?.response?.data?.message || error.message; // This will be available as `action.error` in the `rejected` case   
    }
}
)

const initialState = {
    todosahmed:[
        {
            id:23,
            text:'ahmed'  
          }
    ],
    isLoading: false, // Track loading state
    error: null, // Store any potential errors 
    isSucessMessage:''
 }

//things inside reducer are methods like actions

export const todoReducer=createSlice({
name:'todoAhmed',
initialState,
reducers: {
    addTodo:(state,action) => {

        console.log('state',state)

        console.log('action',action.payload)
    if(action.payload.quantity !== '')
    {
    const todo = {
        id: 4,
        text:action.payload.text,
        qty:Number(action.payload.quantity)
    }
    state.todosahmed.push(todo)
    }
    else{
        
    const todo = {
        id: 4,
        text:action.payload.text,
        qty:0
    }
    state.todosahmed.push(todo)
    }
    },
},
extraReducers: (builder) => {
    builder.addCase(SignupAsyncApi.pending, (state, action) => {
        console.log('signupAsyncApi==>pending');
        state.isLoading = true;
        // Handle the state update based on the fulfilled action
    });
    builder.addCase(SignupAsyncApi.fulfilled, (state, action) => {
        console.log('signupAsyncApi==>fulfilled');
        console.log('action==>fulfiled',action)
        state.isLoading = false;
      state.isSucessMessage= action.payload.message

        // Handle the state update based on the fulfilled action
    });
    builder.addCase(SignupAsyncApi.rejected, (state, action) => {
        console.log('signupAsyncApi==>rejected');
        console.log('action==>rejected==>',action)
        state.isLoading = false;
        state.error = action.error.message; // Store the error message
        // Handle the state update based on the fulfilled action
    });

}

});

export const { addTodo }=todoReducer.actions

//exporting reducer for storing in store
export default todoReducer.reducer