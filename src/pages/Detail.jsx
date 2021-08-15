/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();

  const [userData, setUserData] = useState(null);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    if (users) {
      const userFind = users.find((el) => el.id === id);
      setUserData({ ...userFind });
    }
  }, [id]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };
  if (!userData || !userData.id) {
    return <div className="has-text-centered">Không có dữ liệu</div>;
  }

  return (
    <div className="columns">
      <div className="column">
        <form className="box">
          <div className="field">
            <label className="label">Số thẻ căn cước</label>
            <div className="control">
              <input
                className="input"
                type="text"
                disabled
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
                disabled
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
                disabled
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
                disabled
                value={(userData && userData.address) || ''}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Ghi chú</label>
            <div className="control">
              <input
                className="input"
                type="text"
                disabled
                value={(userData && userData.note) || ''}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tên Vaccine</label>
            {userData &&
              userData.vaccines.map((v, index) => (
                <div className="box">
                  <label className="label">Lần số: {index + 1}</label>
                  <label className="label">Loại vaccine: {v.name}</label>
                  <label className="label">Ngày: {formatDate(v.date)}</label>
                </div>
              ))}
          </div>
        </form>
      </div>
      <div className="column">
        {userData && (
          <QRCode value={`http://localhost:3000/detail/${userData.id}` || ''} />
        )}
      </div>
    </div>
  );
}
