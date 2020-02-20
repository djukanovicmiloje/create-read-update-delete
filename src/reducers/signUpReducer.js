//KADA MI VRATI POTVRDAN ODGOVOR TJ DAMI ACCESS TOKEN
// moram da ga cuvam negde

// OVO SU AKCIJE konstante koje ce zavrsiti u action objektu pod propetijem type, samo govore koje je tip akcije

const SET_SIGNUP_PENDING = "SET_SIGNUP_PENDING";
const SET_SIGNUP_SUCCESS = "SET_SIGNUP_SUCCESS";
const SET_SIGNUP_ERROR = "SET_SIGNUP_ERROR";

//ACTION CREATORS === funkcije koje pakuju objekat
// ovo je kao event objekat// ove funkcije pakuju event objekat za redux

const setSignUpPending = isSignUpPending => ({
  type: SET_SIGNUP_PENDING,
  isSignUpPending
});

const setSignUpSuccess = isSignUpSuccess => ({
  type: SET_SIGNUP_SUCCESS,
  isSignUpSuccess
});

const setSignUpError = error => ({
  type: SET_SIGNUP_ERROR,
  error
});

//REDUCER ===== ova funckija prima event i state
// pakuje novi state objekat na osnovu akcije(eventa) i vraca ga na kraju

export const signUpReducer = (
  state = {
    isSignUpSuccess: false,
    isSignUpPending: false,
    signUpError: null
  },
  action
) => {
  switch (action.type) {
    case SET_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUpSuccess: action.isSignUpSuccess
      };
    case SET_SIGNUP_PENDING:
      return {
        ...state,
        isSignUpPending: action.isSignUpPending
      };
    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signUpError: action.message
      };
    default:
      return state;
  }
};

// ovde sad treba da dodje ona funkcija za koja mi nije jasno sta radi ima veze sa redux thunk

//REDUX THUNK allows to write "ACTION CREATORS"(funkcije koje vracaju akciju) that return a function instead of an action

// ovo sakriva onaj subscribe
// nije mi jasno 100 kako ovo funkcionise

//ovu funckiju cu pozivati iz react komponente nije mi jos jasno kako ce se ona kaciti na prodavnicu

import { signUp } from "../services/httpServise";

export const signUpHttp = signUpData => dispatch => {
  dispatch(setSignUpPending(true));

  signUp(signUpData)
    .then(data => {
      console.log(data);
      dispatch(setSignUpPending(false));
      dispatch(setSignUpSuccess(true));
    })
    .catch(error => {
      dispatch(setSignUpError(error));
      dispatch(setSignUpPending(false));
    });
};

// iz ovog fajla exportujem reducer i dispecer
