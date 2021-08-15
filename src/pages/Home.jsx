/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const { users } = useSelector((state) => state.user);

  const handleClickDetail = (id) => {
    history.push(`/detail/${id}`);
  };
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ và tên</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Số lần tiêm</th>
          <th>Hành động</th>
        </tr>
      </thead>

      <tbody>
        {users.map((el) => (
          <tr key={el.id}>
            <th>{el.id}</th>
            <td>
              <strong>{el.name}</strong>
            </td>
            <td>{el.address}</td>
            <td>{el.phoneNumber}</td>
            <td>{(el.vaccines && el.vaccines.length) || 0}</td>
            <td>
              <button
                className="button is-primary"
                onClick={() => {
                  handleClickDetail(el.id);
                }}
              >
                Chi tiết
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
