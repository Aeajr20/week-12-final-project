$(document).ready(function() {

    // Function to display characters
    function displayCharacters() {
        const tbody = $('table tbody');
        tbody.empty(); // Clear existing rows

        $.ajax({
            url: 'http://localhost:3000/characters',
            method: 'GET',
            success: function(characters) {
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
        });
    }

    // Initial display of characters
    displayCharacters();

    // Add character form submission handler
    $('#addCharacterForm').submit(function(event) {
        event.preventDefault();
        const fullName = $('#newName').val();
        const characterTrait = $('#newTrait').val();
        const newCharacter = { fullName, characterTrait };

        $.ajax({
            url: 'http://localhost:3000/characters',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newCharacter),
            success: function() {
                displayCharacters();
                $('#addCharacterForm').trigger('reset');
            }
        });
    });

    // Delete button click handler
    $(document).on('click', '.deleteBtn', function(event) {
        event.preventDefault();
        const row = $(this).closest('tr');
        const id = row.data('id');

        $.ajax({
            url: `http://localhost:3000/characters/${id}`,
            method: 'DELETE',
            success: function() {
                displayCharacters();
            }
        });
    });
});
