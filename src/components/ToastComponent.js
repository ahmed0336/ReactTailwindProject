import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = () => {
    const toastMessage = useSelector(state => state.toastMessage);
    const dispatch = useDispatch(); // Access the dispatch function

    useEffect(() => {
        if (toastMessage) {
            toast.success(toastMessage, {
                // Toast configuration options
            });
        }
    }, [toastMessage]);

    return null;
};

export default ToastComponent;
