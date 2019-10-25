import React from "react";

const countryTable = props => {
  const countries = props.countries || [];
  const fields = props.fields || [];
  return (
    <React.Fragment>
      {countries != "" ? (
        <table className="table table-bordered table-dark text-left table-hover">
          <thead>
            <tr>
              {fields.map((field, index) => (
                <th className="text-capitalize" scope="col" key={index}>
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.children}
            {countries.map(country =>
              React.cloneElement(props.children, { key: country.ID, country })
            )}
          </tbody>
        </table>
      ) : (
        <div>No Countries selected...</div>
      )}
    </React.Fragment>
  );
};

export default countryTable;

/*   <CountryTable fields={fields}>
    {countries.map(country => (
      <Country
        fields={countryFields}
      //   name={country.name}
      //   population={country.population}
      //   key={country.ID}
      //   ID={country.ID}
      />
    ))}
  </CountryTable>

)} */
