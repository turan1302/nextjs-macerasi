import React from 'react'
import {Button} from "react-bootstrap";
import Link from "next/link";

const ListItem = (props) => {

    const {item,changeStatus,removeItem} = props;

    return (
        <tr>
            <td>{item.td_id}</td>
            <td>{item.td_name}</td>
            <td>
                <label className="switch">
                    <input type="checkbox" onChange={() => changeStatus(item.td_id)}
                           defaultChecked={item.td_status === 1}/>
                    <span className="slider round"></span>
                </label>
            </td>
            <td>
                <Button onClick={() => removeItem(item.td_id)}
                        className={"btn btn-danger"}>Sil</Button>

                <Link href={`/edit/${item.td_id}`} className={"btn btn-primary ml-2"}>Güncelle</Link>
            </td>
        </tr>
    )
}

export default ListItem
