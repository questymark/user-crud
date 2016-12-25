import React from 'react';
import TextInput from '../common/TextInput';

const days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

const month = [
  {num: "01", name: "январь"},
  {num: "02", name: "февраль"},
  {num: "03", name: "март"},
  {num: "04", name: "апрель"},
  {num: "05", name: "май"},
  {num: "06", name: "июнь"},
  {num: "07", name: "июль"},
  {num: "08", name: "август"},
  {num: "09", name: "сентябрь"},
  {num: "10", name: "октябрь"},
  {num: "11", name: "ноябрь"},
  {num: "12", name: "декабрь"}
];

let years = [];
for (let i = 1900; i <= new Date().getFullYear(); i++) {
	years.push(i)
}
const UserForm = (props) => { 
  return (
    <form>
      <h1>Редактирование пользователя</h1>
      <TextInput
        name="name"
        label="ФИО"
        value={props.user.name}
        onChange={props.onChange.bind(this, "name")}
        error={props.errors.name}
        />


      <div className="form-group">
        <label>Дата рождения</label>
        <div className="form-inline">
          <select
            name="day"
            className="form-control"
            value={props.day}
            onChange={props.onChangeSelect.bind(this, "day")}
          >
            {days.map(item => {
              return <option value={item}>{item}</option>
            })}
          </select>

          <select
            name="month"
            className="form-control"
            value={props.month}
            onChange={props.onChangeSelect.bind(this, "month")}
          >
            {month.map(item => {
              return <option value={item.num}>{item.name}</option>
            })}
          </select>

          <select
            name="year"
            className="form-control"
            value={props.year}
            onChange={props.onChangeSelect.bind(this, "year")}
          >
            {years.map(item => {
              return <option value={item}>{item}</option>
            })}
          </select>
        </div>
      </div>


      <TextInput
        name="adress"
        label="Адрес"
        value={props.user.adress}
        onChange={props.onChange.bind(this, "adress")}
        />

      <TextInput
        name="city"
        label="Город"
        value={props.user.city}
        onChange={props.onChange.bind(this, "city")}
      />

      <TextInput
        name="phone"
        label="Телефон"
        value={props.user.phone}
        onChange={props.onChange.bind(this, "phone")}
      />

      <input
        type="submit"
        disabled={props.saving}
        value={props.saving ? 'Сохранение...' : 'Сохранить'}
        className="btn btn-primary"
        onClick={props.onSave}/>
    </form>
  );
};

export default UserForm;
