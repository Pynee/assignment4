import React, { useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import CountryTable from "./components/CountryTable";
import UserSelectionTable from "./components/UserSelectionTable";
import AllCountriesTable from "./components/AllCountriesTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

const App = props => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesReducer.countries);
  const userSelected = useSelector(
    state => state.countriesReducer.userSelected
  );
  const allCountryFields = [
    "flag",
    "name",
    "population",
    "area",
    "capital",
    "region"
  ];
  const userSelectedCountryFields = [
    "flag",
    "name",
    "population",
    "area",
    "capital",
    "region"
  ];

  const addToList = props => {
    dispatch({ type: "SELECT_COUNTRY", payload: props.country });

    return;
  };
  const removeFromList = props => {
    dispatch({ type: "DELETE_COUNTRY", payload: props.country });

    return;
  };
  const getData = () => {
    return dispatch => {
      axios.get("https://restcountries.eu/rest/v2/all").then(res =>
        dispatch({
          type: "FETCH_DATA",
          payload: res.data
        })
      );
    };
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className=" App container sticky-top">
      <UserSelectionTable>
        <CountryTable
          fields={userSelectedCountryFields}
          countries={userSelected}
        >
          <Country
            onClick={removeFromList}
            fields={userSelectedCountryFields}
          />
        </CountryTable>
      </UserSelectionTable>
      <AllCountriesTable>
        <CountryTable fields={allCountryFields} countries={countries}>
          <Country onClick={addToList} fields={allCountryFields} />
        </CountryTable>
      </AllCountriesTable>
    </div>
  );
};

export default App;
