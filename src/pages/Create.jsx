/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../redux/actions';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData, setUserData] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.user.create({ ...userData }));
    history.push('/');
  };
  return (
    <form className="box">
      <div className="field">
        <label className="label">Số thẻ căn cước</label>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="id"
            value={(userData && userData.id) || ''}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Họ và tên</label>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="name"
            value={(userData && userData.name) || ''}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Số điện thoại</label>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            value={(userData && userData.phoneNumber) || ''}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Địa chỉ</label>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="address"
            value={(userData && userData.address) || ''}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Tên Vaccine</label>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="vaccine"
            value={(userData && userData.vaccine) || ''}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Ghi chú</label>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={handleChange}
            name="note"
            value={(userData && userData.note) || ''}
          />
        </div>
      </div>
      <button className="button is-primary" onClick={handleSubmit}>
        Tạo
      </button>
    </form>
  );
}
