import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [imageInput, setImageInput] = useState(null);
  const [linkInput, setLinkInput] = useState('');

  const handleAddNote = () => {
    if (textInput || imageInput || linkInput) {
      const newNote = {
        text: textInput,
        image: imageInput ? URL.createObjectURL(imageInput) : null,
        link: linkInput,
      };
      setNotes([...notes, newNote]);
      setTextInput('');
      setImageInput(null);
      setLinkInput('');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Your Notes</h2>

      {/* Input Section */}
      <textarea
        className="border rounded-lg p-2 w-full mb-4"
        rows="3"
        placeholder="Write down your thoughts..."
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />

      <input
        type="file"
        className="mb-4"
        onChange={(e) => setImageInput(e.target.files[0])}
      />

      <input
        type="url"
        className="border rounded-lg p-2 w-full mb-4"
        placeholder="Add a link..."
        value={linkInput}
        onChange={(e) => setLinkInput(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200 w-full"
        onClick={handleAddNote}
      >
        Add Note
      </button>

      {/* Display Notes */}
      <div className="mt-6">
        {notes.map((note, index) => (
          <div key={index} className="border-b mb-4 pb-2">
            {note.text && <p className="text-lg">{note.text}</p>}
            {note.image && <img src={note.image} alt="Uploaded" className="w-full h-auto mt-2" />}
            {note.link && (
              <a href={note.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {note.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
