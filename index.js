$(document).ready(function() {
    // Array of characters
    let characters = [
        {
            "fullName": "Rick Sanchez",
            "characterTrait": "Scientist",
            "id": 1
        },
        {
            "fullName": "Morty Smith",
            "characterTrait": "Student",
            "id": 2
        },
        {
            "fullName": "Beth Smith",
            "characterTrait": "Horse Surgeon",
            "id": 3
        },
        {
            "fullName": "Jerry Smith",
            "characterTrait": "Unemployed",
            "id": 4
        },
        {
            "fullName": "Summer Smith",
            "characterTrait": "Student",
            "id": 5
        }
    ];

    // Function to display characters
    function displayCharacters() {
        const tbody = $('table tbody');
        tbody.empty(); // Clear existing rows

        characters.forEach(character => {
            tbody.append(`
                <tr data-id="${character.id}">
                    <td>${character.id}</td>
                    <td>${character.fullName}</td>
                    <td>${character.characterTrait}</td>
                    <td><button class="btn btn-warning deleteBtn">Delete</button></td>
                </tr>
            `);
        });
    }

    // Initial display of characters
    displayCharacters();

    // Add character form submission handler
    $('#addCharacterForm').submit(function(event) {
        event.preventDefault();
        const fullName = $('#newName').val();
        const characterTrait = $('#newTrait').val();
        const id = characters.length + 1;
        characters.push({ fullName, characterTrait, id });
        displayCharacters();
        $('#addCharacterForm').trigger('reset');
    });

    // Update character form submission handler
    $('#updateCharacterForm').submit(function(event) {
        event.preventDefault();
        const id = $('#updateId').val();
        const fullName = $('#updateName').val();
        const characterTrait = $('#updateTrait').val();
        const character = characters.find(character => character.id == id);
        if (character) {
            character.fullName = fullName;
            character.characterTrait = characterTrait;
        }
        displayCharacters();
        $('#updateCharacterForm').trigger('reset');
    });

    // Delete button click handler
    $('table').on('click', '.deleteBtn', function() {
        const id = $(this).closest('tr').data('id');
        const index = characters.findIndex(character => character.id == id);
        if (index !== -1) {
            characters.splice(index, 1);
            displayCharacters();
        }
    });
});
