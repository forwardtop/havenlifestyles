import { toast } from 'react-hot-toast';

// import { updateCompletedLectures } from "../../slices/viewCourseSlice"
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from '../apiConnector';
import { commonEndpoints } from '../apiUrls';

const { GET_MAIN_MENU_API } = commonEndpoints;

export const fetchMainCategories = async (): Promise<any[]> => {
    const toastId = toast.loading("Loading...");
    let result: any[] = [];
  
    try {
      const response = await apiConnector("GET", GET_MAIN_MENU_API);
  
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Main Categories");
      }

      result = response?.data?.data;
    } catch (error: any) {
      console.log("GET_MAIN_MENU_API API ERROR............", error);
      toast.error(error?.message || "An error occurred");
    }
  
    toast.dismiss(toastId);

    return result;
  };
