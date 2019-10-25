import React from "react";
const initialState = {
  countries: [],
  userSelected: []
};

function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_COUNTRY":
      if (
        state.userSelected.filter(
          country => country.name === action.payload.name
        ) == ""
      ) {
        return Object.assign({}, state, {
          userSelected: [...state.userSelected, action.payload]
        });
      }
      return state;
    case "DELETE_COUNTRY":
      return Object.assign({}, state, {
        userSelected: [
          ...state.userSelected.filter(
            country => country.name !== action.payload.name
          )
        ]
      });
    case "FETCH_DATA":
      return {
        ...state,
        countries: action.payload.map(country => ({
          ...country,
          flag: (
            <img
              className="img"
              style={{ maxHeight: 50 }}
              src={country.flag}
              alt={country.name}
            ></img>
          )
        }))
      };

    default:
      return state;
  }
}

export default countriesReducer;
