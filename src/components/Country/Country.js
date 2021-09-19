import React from 'react';

const Country = (props) => {
    const { name, flag, nativeName, capital, regionalBlocs } = props.country;
    const bloc = regionalBlocs.map(regionalBloc => regionalBloc.name);
    return (
        <div className="col-lg-3 mb-5">
            <div className="card">
                <img src={flag} className="flag-img card-img-top" alt="Flag not found!" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Native Name: {nativeName}</li>
                    <li className="list-group-item">Capital: {capital}</li>
                    <li className="list-group-item">Regional Blocs: {bloc}</li>
                </ul>
            </div>
        </div>
    );
};

export default Country;