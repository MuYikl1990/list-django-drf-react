import React from 'react';
import PropTypes from 'prop-types';
import key from 'weak-key';

const Table = ({data}) =>
    !data.length ? (
        <p>Nothing to show </p>) : (
        <div>
            <h2>
                Showing <strong>{data.length} items</strong>
            </h2>
            <table>
                <thead>
                    <tr>
                        {object.entries(data[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map(el => (
                        <tr key={el.id}>
                            {object.entries(el).map(el => <td key={key(el)}>{el[1]}>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

Table.propTypes = {
    data: PropTypes.array.isRequired
};

export default Table;