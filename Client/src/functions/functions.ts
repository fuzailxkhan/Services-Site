import { useDispatch } from "react-redux";
import { setNoti } from "../app/appSlice";

export const useNotification = () => {
    const dispatch = useDispatch();

    const setNotification = (noti:string) => {
        dispatch(setNoti(noti));
        setTimeout(() => {
            dispatch(setNoti(''));
        }, 3000);
    };

    return { setNotification };
};


