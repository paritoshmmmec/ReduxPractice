import React, { Fragment } from 'react'

const Header = ({ items }) => {
    return (
        <Fragment>
            {items.map((item) => {
                return (
                    <tr>
                        <td>
                            {item.id}
                        </td>
                        <td>
                            {item.SKU}
                        </td>
                        <td>
                            {item.Quantity}
                        </td>
                    </tr>
                )
            })}
        </Fragment>);
}

export default Header;