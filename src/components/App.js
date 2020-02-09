/* eslint-disable react/prop-types */
import React from "react";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import Header from "./Header";
import * as Styles from "./Styles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      showWelcomeMessage: true,
      showNewNoteDiv: false,
      note: null,
      default: {
        title: "Note name",
        content: "Note description"
      },
      id: null
    };
  }

  click() {
    this.setState({
      default: {
        title: "Note",
        content: "Note description"
      }
    });
    const newNote = {
      id: this.state.notes.length + 1,
      title: "Note",
      content: "Note description"
    };

    const notes = [...this.state.notes, newNote];

    this.setState({
      showWelcomeMessage: false,
      showNewNoteDiv: true,
      note: null,
      notes: [...this.state.notes, newNote],
      id: this.state.notes.length + 1
    });

    localStorage.setItem(
      "reactnotes",
      JSON.stringify({
        notes: notes
      })
    );
  }

  handleChange(id, e) {
    let notes;
    if (e.target.name === "defaultTitle") {
      notes = this.state.notes.map(note => {
        if (note.id === id) {
          note.title = e.target.value;
        }
        return note;
      });

      this.setState({
        default: {
          ...this.state.default,
          title: e.target.value
        },
        notes: notes
      });
    }
    if (e.target.name === "defaultContent") {
      notes = this.state.notes.map(note => {
        if (note.id === id) {
          note.content = e.target.value;
        }
        return note;
      });

      this.setState({
        default: {
          ...this.state.default,
          content: e.target.value
        },
        notes: notes
      });
    }

    localStorage.setItem(
      "reactnotes",
      JSON.stringify({
        notes: notes
      })
    );
  }

  noteClicked(id, e) {
    console.log("note heading clicked", id);
    console.log("e", e);

    let note;

    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === id) {
        note = this.state.notes[i];
        break;
      }
    }

    this.setState({
      showWelcomeMessage: false,
      showNewNoteDiv: false,
      default: {
        title: "",
        content: ""
      },
      note: note,
      id: id
    });
  }

  deleteNote(id) {
    //e.stopPropagation();

    const notes = this.state.notes.filter(note => {
      if (note.id === id) {
        return false;
      }
      return true;
    });

    if (this.state.id === id) {
      console.log("this should print");
      this.setState({
        id: null,
        note: null,
        showWelcomeMessage: true,
        showNewNoteDiv: null,
        notes: notes
      });
    } else {
      this.setState({
        notes: notes,
        showWelcomeMessage: true
      });
    }

    localStorage.setItem(
      "reactnotes",
      JSON.stringify({
        notes: notes
      })
    );
    window.location.reload();
  }

  componentDidMount() {
    const notes = JSON.parse(localStorage.getItem("reactnotes"));
    if (notes !== null) {
      this.setState({
        notes: notes.notes
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <Styles.Wrapper className="Wrapper">
        <Header />
        <Styles.Container>
          <LeftContainer
            click={this.click.bind(this)}
            notes={this.state.notes}
            noteClicked={this.noteClicked.bind(this)}
            deleteNote={this.deleteNote.bind(this)}
          />
          <RightContainer
            showWelcomeMessage={this.state.showWelcomeMessage}
            showNewNoteDiv={this.state.showNewNoteDiv}
            handleChange={this.handleChange.bind(this)}
            default={this.state.default}
            id={this.state.id}
            note={this.state.note}
          />
        </Styles.Container>
      </Styles.Wrapper>
    );
  }
}
export default App;
