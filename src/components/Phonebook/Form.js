import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  inputPhone = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handelContact = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handelContact}>
        <label>Name</label>
        <input
          value={this.state.name}
          onChange={this.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          value={this.state.number}
          onChange={this.inputPhone}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
