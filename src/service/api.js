
export async function fetchData() {
    try {
        const response = await fetch('https://localhost:7082/api/MovieReviews');

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Rethrow or handle the error as needed
    }
}
export async function deleteMovie(id) {
    try {
        const response = await fetch(`https://localhost:7082/api/MovieReviews/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete movie');
        }

        console.log(`Movie with ID ${id} deleted successfully`);
        return true; // Return a success flag or you can handle accordingly
    } catch (error) {
        console.error('Error during delete operation:', error);
        return false; // Return a failure flag or handle error accordingly
    }
}
export async function postMovie(movieData) {
    try {
        const response = await fetch('https://localhost:7082/api/MovieReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieData),
        });

        if (!response.ok) {
            throw new Error('Failed to create movie review');
        }

        const data = await response.json();
        console.log('Movie review created successfully:', data);
        return data; // Return the newly created movie review
    } catch (error) {
        console.error('Error during post operation:', error);
        throw error; // Rethrow to handle it higher up
    }
}
export async function updateMovieReview(id, data) {
    try {
        console.log(`Updating movie with URL: https://localhost:7082/api/MovieReviews/${id}`);
        console.log('Payload:', JSON.stringify(data));

        const response = await fetch(`https://localhost:7082/api/MovieReviews/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Response Error:', errorData);
            throw new Error('Failed to update movie review');
        }

        console.log('Movie review updated successfully');
    } catch (error) {
        console.error('Error during PUT operation:', error);
        throw error;
    }
}




