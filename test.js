import Compressor from 'compressorjs'

window.compressBenchmark = function (event) {

    //Just reading the data, nothing much...

    let selectedFile = event.target.files[0];
    let reader = new FileReader();

    let img = document.getElementById("input");
    img.title = selectedFile.name;

    reader.onload = function (event) {
        img.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    let title = document.createElement('h4');
    title.textContent = 'Compressed images';
    document.body.appendChild(title);


    for (let i = 1; i <= 10; i++) {

        new Compressor(selectedFile, {
            quality: 0.1 * i,
            mimeType: 'image/jpeg',
            success(file) {

                console.log(file);// This is a blob

                //Append image to de the body
                let image = document.createElement('img');
                image.src = window.URL.createObjectURL(file);
                image.width = 500;
                document.body.appendChild(image);

                //Append a quality description
                let quality = document.createElement('h6');
                quality.textContent = 'Quality ' + (0.1 * i).toFixed(1);
                document.body.appendChild(quality);
            }
        })

    }

};

//This is a mock of how you can simply submit data
const simpleSubmission = (selectedFile) => {

    let fd = new FormData();//You have to user this

    new Compressor(selectedFile, {
        quality: 0.6,
        mimeType: 'image/jpeg',
        success(file) {

            fd.append('file', file, selectedFile.name);

            //you can use any request library tha you want
            request.upload('post', fd).then(function (result) {

                console.log(result);

            }, function (error) {

                console.log (error)
            });
        }
    });

};


