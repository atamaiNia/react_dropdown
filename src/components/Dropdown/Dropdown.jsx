import { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visiable: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visiable: !prevState.visiable }));
  };
  render() {
    const { visiable } = this.state;
    const { toggle } = this;
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle" onClick={toggle}>
          {visiable ? 'Сховати' : 'Показати'}
        </button>
        {visiable && <div className="Dropdown__menu">Випадаюче меню</div>}
      </div>
    );
  }
}

export default Dropdown;
