import axios from "axios";

import * as actions from "./actionCreators";
import DatacodeConfig from "../../core/config";
import {
  SET_SUBSCRIBE_NEWS_LETTER,
  SET_SUBSCRIBE_LOADING,
  SET_ADD_TESTIMONIAL_LOADING,
  SET_ADD_TESTIMONIAL,
  SET_ADD_CONTACT_MESSAGE_LOADING,
} from "../constants";

const baseURL = DatacodeConfig.baseURL;

export const newsLetterSubscribe = (email) => (dispatch) => {
  dispatch({ type: SET_SUBSCRIBE_LOADING });
  return axios
    .post(`${baseURL}/user/subscribe-letter`, email)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_SUBSCRIBE_LOADING });
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_SUBSCRIBE_LOADING });
      console.log("Add subscribe Error", error);
    });
};

export const addTestimonial = (testimonial) => (dispatch) => {
  dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
  return axios
    .post(`${baseURL}/user/add_testimonial`, testimonial)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
        console.log("Testimonial", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
      console.log("Add Testimonial Error", error);
    });
};

export const fetchTestimonials = () => (dispatch) => {
  dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
  return axios
    .post(`${baseURL}/user/fetch_testimonials`)
    .then((res) => {
      if (res.status === 200) {
        dispatch(actions.setTestimonials(res.data.testimonials));
        console.log("Testimonials", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
      console.log("Add Testimonial Error", error);
    });
};

export const editTestimonial = (testimonial) => (dispatch) => {
  dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
  return axios
    .put(`${baseURL}/user/edit_testimonial`, testimonial)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
        console.log("Testimonial", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
      console.log("Edit Testimonial Error", error);
    });
};

export const deleteTestimonial = (testimonial) => (dispatch) => {
  dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
  return axios
    .put(`${baseURL}/user/delete_testimonial`, testimonial)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
        console.log("Testimonial", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
      console.log("Edit Testimonial Error", error);
    });
};

export const addContactMessage = (contact) => (dispatch) => {
  dispatch({ type: SET_ADD_CONTACT_MESSAGE_LOADING });
  return axios
    .post(`${baseURL}/user/add_contact_message`, contact)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_ADD_CONTACT_MESSAGE_LOADING });
        console.log("contact", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_CONTACT_MESSAGE_LOADING });
      console.log("Edit contact Error", error);
    });
};
