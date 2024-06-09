

const getImagen = async() => {

    try {
        const apiKey = 'BJ9u2uHN1818sVio2iNULzHKvWzY2ZML';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

        console.log( data );
        
    } catch (error) {
        //mensaje del error
        console.error(error)
    }

}

getImagen();





